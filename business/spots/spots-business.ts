import { spotsRepository } from "../../repositories";
import { SpotDto, SpotPicturesDto } from "../../dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: (
    orderBy: "asc" | "desc",
    isCanPark: boolean,
    isCanVisit: boolean,
    isTouristic: boolean,
    searchValue: string,
    region: string,
    skip: number,
    take: number
  ) => {
    return spotsRepository.getAll(
      orderBy,
      isCanPark,
      isCanVisit,
      isTouristic,
      searchValue,
      region,
      skip,
      take
    );
  },

  getById: (spotId: string) => {
    return spotsRepository.getById(spotId);
  },

  /**
   * @param {SpotDto} data
   */
  create: (
    data: SpotDto & { pictures: SpotPicturesDto },
    profileId: string
  ) => {
    const { pictures, ...other } = data;
    const spotData = { ...other };
    return spotsRepository.create(spotData, pictures, profileId);
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
