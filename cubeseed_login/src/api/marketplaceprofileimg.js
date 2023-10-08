import axios from 'axios';

const MarketPlaceProfileImg = async (imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  return axios.post('api/uploadimage', formData)
    .then(response => {
      // Handle success and return response data
      return response.data;
    })
    .catch(error => {
      // Handle error
      throw new Error('Error uploading image: ' + error.message);
    });
};

export default MarketPlaceProfileImg;
