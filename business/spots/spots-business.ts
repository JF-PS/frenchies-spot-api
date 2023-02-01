import { spotsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto } from "../../dto";
import { TContext } from "../../graphql/context";
import { codeErrors, GenericError } from "../../utils";
import { UpdateSpotDto, UpdateSpotPicturesDto } from "../../dto/spot-dto";
import { GraphQLError } from "graphql";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND } = codeErrors;

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
      searchValue,
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
   * @param {string} currentProfileId
   */
  update: async (
    data: UpdateSpotDto & { pictures: UpdateSpotPicturesDto },
    currentProfileId: string
  ) => {
    const { id: spotId, pictures, ...other } = data;
    const updateData = { ...other };
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.update(updateData, spotId, pictures);
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: async (data: UpdateSpotDto, currentProfileId: string) => {
    const { id: spotId } = data;
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.delete(currentProfileId, spotId);
  },
};

async function checkCreatedByCurrentUserOrThrow(
  spotId: string,
  currentProfileId: string
) {
  const spot = await spotsRepository.getById(spotId);

  if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);

  if (currentProfileId !== spot.profileId)
    throw new GenericError(SPOT_ID_NOT_MATCH_PROFILE_ID);
}

export default spotsBusiness;
