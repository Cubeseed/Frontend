import { addFormData, getFormDatas } from './myaccountapiroute';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const formData = req.body.formData;
    const newData = {
      id: Date.now(),
      name: formData.name,
      phone_number: formData.phone_number,
      email: formData.email,
      location: formData.location,
      old_password: formData.old_password,
      new_password: formData.new_password,
    };
    addFormData(newData);
    console.log('Received form data:', newData);
    res.status(201).json(newData);
  } else if (req.method === 'GET') {
    const allFormDatas = getFormDatas();
    res.status(200).json(allFormDatas);
  }
}
