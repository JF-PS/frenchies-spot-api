import { spotsRepository } from "../../repositories";
import { SpotDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, GenericError } from "../../utils";
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
  update: (data: UpdateSpotDto, currentProfileId: string) => {
    const { id: spotId } = data;
    checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.update(data, currentProfileId, spotId);
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: async (data: UpdateSpotDto, currentProfileId: string) => {
    const { id: spotId} = data;
    checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.delete(currentProfileId, spotId);
  },
};

async function checkCreatedByCurrentUserOrThrow(spotId: string, currentProfileId: string) {
  const spot = await spotsRepository.getById(spotId);
  if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
  if (currentProfileId !== spot.profileId) throw new GenericError(SPOT_ID_NOT_MATCH_PROFILE_ID)
};

export default spotsBusiness;
