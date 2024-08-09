import APICall from "../apiCall";

const getProducts = async () => {
  const response = await APICall("products", "GET");
  return response;
};

const getCarts = async () => {
  const response = await APICall("carts", "GET");
  return response?.data;
};

const getOrders = async () => {
  const response = await APICall("orders/status?order_id={order_id}", "GET");
  return response?.data;
};

const getOrdersList = async () => {
  const response = await APICall("orders", "GET");
  return response?.data;
};

const productService = {
  getProducts,
  getCarts,
  getOrders,
  getOrdersList,
};

export default productService;
