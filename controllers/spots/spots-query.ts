import { spotsBusiness } from "../../business";
import { UpdateSpotDto } from "../../dto/spot-dto";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: () => {
    return spotsBusiness.getAll();
  },

  spot: (_: undefined, data: { id: string }) => {
    const { id: spotId } = data;
    console.log(spotId);
    return spotsBusiness.getById(spotId);
  },
};
