
import { addBusinessData, getBusinessDatas } from './mybusinessapiroute';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const bizData = req.body.bizData;
    const newData = {
      id: Date.now(),
      company_name: bizData.company_name,
      company_email: bizData.company_email,
      company_phone: bizData.company_phone,
      category: bizData.category,
      business_address: bizData.business_address,
      custom_fields: bizData.custom_fields,
    };
    addBusinessData(newData);
    console.log('Received form data:', newData);
    res.status(201).json(newData);
  } else if (req.method === 'GET') {
    const allFormDatas = getBusinessDatas();
    res.status(200).json(allFormDatas);
  }
}
