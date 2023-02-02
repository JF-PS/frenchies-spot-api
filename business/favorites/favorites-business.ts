import { UpdateFavoriteDto } from "../../dto";
import { favoritesRepository, spotsRepository } from "../../repositories";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID } = codeErrors;

const favoritesBusiness = {
  getAll: () => {
    return favoritesRepository.getAll();
  },

  // create or delete favorite
  toggleFavorite: async (spotId: string, favoriteId: string | undefined = undefined, profileId: string) => {
    const spot = await spotsRepository.getById(spotId);

    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);
    console.log("business spotId:", spotId, "favoriteId:", favoriteId)
    if (favoriteId === undefined) {
      return favoritesRepository.create(spotId, profileId);
    }
    
    if (favoriteId !== undefined) {
      console.log("business ok favoriteId:", favoriteId)
      const favorite = await favoritesRepository.getById(favoriteId);

      if (profileId === favorite?.profileId) {
        return favoritesRepository.delete(spotId, favoriteId);
      }
    }


  },
};

export default favoritesBusiness;
