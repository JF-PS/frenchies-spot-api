import { spotsBusiness } from "../../business";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: () => {
    return spotsBusiness.getAll();
  },

  spot: (spotId: string) => {
    return spotsBusiness.getById(spotId);
  },
};
