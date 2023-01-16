import { spotsRepository } from "../../repositories";
import { SpotDto } from "../../dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: (
    orderBy: 'asc' | 'desc', 
    isCanPark: boolean, 
    isCanVisit: boolean, 
    isTouristic: boolean
  ) => {
    return spotsRepository.getAll(
      orderBy,
      isCanPark,
      isCanVisit,
      isTouristic,
    );
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

  /**
   * @param {SpotDto} data
   * @param {string} profileId
   * @param {string} spotId
   */
  update: (data: SpotDto, profileId: string, spotId: string) => {
    return spotsRepository.update(data, profileId, spotId);
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: (profileId: string, spotId: string) => {
    return spotsRepository.delete(profileId, spotId);
  },
};

export default spotsBusiness;
