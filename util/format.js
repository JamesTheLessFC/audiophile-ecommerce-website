export const formatUSD = (num) => {
  const options = {
    style: "currency",
    currency: "USD",
  };

  return num.toLocaleString("en-US", options);
};
