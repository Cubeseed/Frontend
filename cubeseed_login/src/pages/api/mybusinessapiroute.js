let bizDatas = [];

const addBusinessData = (data) => {
  bizDatas.push(data);
};

const getBusinessDatas = () => {
  return bizDatas;
};

export { addBusinessData, getBusinessDatas };
