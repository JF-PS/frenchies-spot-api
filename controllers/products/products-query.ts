import { productsBusiness } from "../../business";
import {} from "../../dto";

export const productsQuery = {
  /**
   * Get All products
   */
  products: (_: undefined, data: any) => {
    return productsBusiness.getAll();
  },

  /**
   * Get buy product request
   */
  getBuyProductRequest: (_: undefined, data: { amount: number }) => {
    const { amount } = data;
    return productsBusiness.buyRequest(amount);
  },
};
