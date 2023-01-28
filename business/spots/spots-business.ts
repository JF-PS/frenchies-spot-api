import { spotsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto } from "../../dto";

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: (data: ReadSpotDto) => {
    const { searchValue, orderBy, skip, take, ...other } = data;
    const filterData = { ...other };
    const paginationData = { take, skip };

    return spotsRepository.getAll(
      filterData,
      paginationData,
      orderBy,
      searchValue
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
