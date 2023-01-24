import { spotsRepository } from "../../repositories";
import { SpotDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, throwError } from "../../utils";
import { UpdateSpotDto } from "../../dto/spot-dto";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND } = codeErrors;

const spotsBusiness = {
  /**
   * Get all itinary
   */
  getAll: (
    orderBy: 'asc' | 'desc', 
    isCanPark: boolean, 
    isCanVisit: boolean, 
    isTouristic: boolean, 
    searchValue: string,
    region: string,
    skip: number,
    take: number,
  ) => {
    return spotsRepository.getAll(
      orderBy,
      isCanPark,
      isCanVisit,
      isTouristic,
      searchValue,
      region,
      skip,
      take,
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
  update: async (data: UpdateSpotDto, currentProfileId: string) => {
    const { id: spotId } = data;
    const spot = await spotsRepository.getById(spotId);
    if (!spot) {
      return throwError(SPOT_NOT_FOUND, spotId);
    }

    if (currentProfileId !== spot.profileId) return throwError(SPOT_ID_NOT_MATCH_PROFILE_ID)
    return spotsRepository.update(data, currentProfileId, spotId);
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
