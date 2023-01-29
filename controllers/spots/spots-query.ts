import { spotsBusiness } from "../../business";
import { ReadSpotDto } from "../../dto";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: (_: undefined, data: ReadSpotDto) => {
    return spotsBusiness.getAll(data);
  },

  spot: (_: undefined, data: { id: string }) => {
    console.log("**********iiiiiiiidddddd*******************");
    console.log(data);
    const { id: spotId } = data;
    return spotsBusiness.getById(spotId);
  },
};
