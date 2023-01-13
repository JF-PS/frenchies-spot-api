import { spotsRepository } from "../../repositories";
import { SpotDto } from "../../dto";
import { UpdateSpotDto } from "../../dto/spot-dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: () => {
    return spotsRepository.getAll();
  },

  /**
   * @param {SpotDto} data
   */
  create: (data: SpotDto, profileId: string) => {
    return spotsRepository.create(data, profileId);
  },

 /**
   * @param {UpdateSpotDto} data
   */

  update: (data: SpotDto, profileId: string, spotId: string) => {
    return spotsRepository.update(data, profileId, spotId);
  },
};

export default spotsBusiness;
