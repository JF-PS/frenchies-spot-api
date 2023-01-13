import { spotsRepository } from "../../repositories";
import { SpotDto } from "../../dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: () => {
    return spotsRepository.getAll();
  },

  getById: (spotId: string) => {
    return spotsRepository.getById(spotId);
  },

  /**
   * @param {SpotDto} data
   */
  create: (data: SpotDto, profileId: string) => {
    return spotsRepository.create(data, profileId);
  },

  update: (data: SpotDto, profileId: string, spotId: string) => {
    return spotsRepository.update(data, profileId, spotId);
  },

  delete: (data: SpotDto, profileId: string, spotId: string) => {
    return spotsRepository.delete(data, profileId, spotId);
  },
};

export default spotsBusiness;
