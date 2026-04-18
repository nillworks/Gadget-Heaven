const getShopData = async () => {
  const res = await fetch(`http://localhost:3000/Data.json`);
  return res.json();
};

export default getShopData;
