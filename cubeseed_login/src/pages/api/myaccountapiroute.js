let formDatas = [];

const addFormData = (data) => {
  formDatas.push(data);
};

const getFormDatas = () => {
  return formDatas;
};

export { addFormData, getFormDatas };
