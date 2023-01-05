import { spotsRepository } from "../../repositories";
import { CoordinateSpotDto } from "../../dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: () => {
    return spotsRepository.getAll();
  },

  /**
   * @param {CoordinateSpotDto} data
   */
  create: (data: CoordinateSpotDto, profileId: string) => {
    return spotsRepository.create(data, profileId);
  },
};

export default spotsBusiness;
