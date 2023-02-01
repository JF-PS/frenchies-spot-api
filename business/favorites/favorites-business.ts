import { favoritesRepository, spotsRepository } from "../../repositories";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID } = codeErrors;

const favoritesBusiness = {
  createOrUpdate: async (spotId: string, favoriteId: string | undefined = undefined, profileId: string) => {
    const spot = await spotsRepository.getById(spotId);
    if (!spot) {
      throw new GenericError(SPOT_NOT_FOUND, spotId);
    }
    if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);
    
    if (favoriteId === undefined) {
      return favoritesRepository.create(spotId, profileId);
    }

    if (favoriteId !== undefined) {
      const rating = await favoritesRepository.getById(favoriteId);

      if (profileId === rating?.profileId) {
        return favoritesRepository.update(favoriteId, spotId, profileId);
      }
    }
  },
};

export default favoritesBusiness;