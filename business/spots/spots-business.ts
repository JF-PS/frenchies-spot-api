import { spotsRepository } from "../../repositories";
import { ReadSpotDto, SpotDto, SpotPicturesDto } from "../../dto";
import { codeErrors, GenericError } from "../../utils";
import { UpdateSpotDto, UpdateSpotPicturesDto } from "../../dto/spot-dto";
const { SPOT_ID_NOT_MATCH_PROFILE_ID, SPOT_NOT_FOUND } = codeErrors;

const spotsBusiness = {
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

  create: (
    data: SpotDto & { pictures: SpotPicturesDto },
    profileId: string
  ) => {
    const { pictures, ...other } = data;
    const spotData = { ...other };
    return spotsRepository.create(spotData, pictures, profileId);
  },

  update: async (
    data: UpdateSpotDto & { pictures: UpdateSpotPicturesDto },
    currentProfileId: string
  ) => {
    const { id: spotId, pictures, ...other } = data;
    const updateData = { ...other };
    await checkCreatedByCurrentUserOrThrow(spotId, currentProfileId);
    return spotsRepository.update(updateData, spotId, pictures);
  },

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
