const getShopData = async () => {
  const res = await fetch('https://gadget-heaven-theta.vercel.app/Data.json', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default getShopData;
