import axios from "axios";

export const getProductosRequest = async () =>
  await axios.get("http://localhost:9000/productos");
