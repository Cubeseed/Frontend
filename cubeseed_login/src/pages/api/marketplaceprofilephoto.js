import { NextApiRequest, NextApiResponse } from 'next';

const storedImages = []; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { localPath } = JSON.parse(req.body);   
      storedImages.push({ path: localPath });
      res.status(200).json({ message: 'Image processed and stored successfully' });
    } catch (error) {
      console.error('Error processing image:', error);
      res.status(500).json({ error: 'Image processing failed' });
    }
  } else if (req.method === 'GET') {
    res.status(200).json({ storedImages });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
