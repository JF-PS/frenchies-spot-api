import { spotsBusiness } from "../../business";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: () => {
    return spotsBusiness.getAll();
  },
};
