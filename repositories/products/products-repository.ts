import { Product, Profile } from "../../models";
import { ProductDto } from "../../dto";

const productsRepository = {
  /**
   * Find all products
   */
  getAll: () => {
    return Product.findMany();
  },

  /**
   * Create a product
   */
  create: (data: ProductDto) => {
    return Product.create({ data });
  },

  /**
   * Buy product game points
   */
  buy: (gamePoint: number, profileId: string) => {
    return Profile.update({
      where: { id: profileId },
      data: { gamePoint },
    });
  },
};

export default productsRepository;
