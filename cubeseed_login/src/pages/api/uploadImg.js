import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';

const copyFile = (sourcePath, destinationPath) => {
  return fs.copyFile(sourcePath, destinationPath);
};

const saveLocally = async (file) => {
  const uploadDir = path.join(process.cwd(), '/public/marketPlaceUsersImg');
  const filename = Date.now().toString() + '_' + file.name;
  const destinationPath = path.join(uploadDir, filename);
  await copyFile(file.path, destinationPath);
  return destinationPath;
};

const readFile = (req, saveLocally) => {
  const options = {};
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/tmp'); // Temporary directory for processing
    options.keepExtensions = true; // Keep file extensions
    options.hash = 'md5'; // Hash the file name
  }
  const form = new formidable.IncomingForm(options);
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        const { picture } = files;
        const localPath = await saveLocally(picture);
        resolve({ fields, files, localPath });
      }
    });
  });
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await fs.mkdir(path.join(process.cwd(), '/public/marketPlaceUsersImg'), { recursive: true });
      const { fields, files, localPath } = await readFile(req, true);
      const response = await fetch('/api/marketplaceprofilephoto', {
        method: 'POST',
        body: JSON.stringify({ localPath }), 
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to send image to the other API');
      }

      res.status(200).json({ message: 'Image uploaded and processed successfully' });
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Image processing failed' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
