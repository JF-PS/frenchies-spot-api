import { spotsBusiness } from "../../business";
import { UpdateSpotDto } from "../../dto/spot-dto";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: () => {
    return spotsBusiness.getAll();
  },

  spot: (spotId: string) => {
    console.log("****************************")
    console.log(spotId)
    return spotsBusiness.getById(spotId);
  },
};
