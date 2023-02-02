import { UpdateFavoriteDto } from "../../dto";
import { favoritesRepository, spotsRepository } from "../../repositories";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID } = codeErrors;

const favoritesBusiness = {
  getAll: () => {
    return favoritesRepository.getAll();
  },

  // create or delete favorite
  createOrDelete: async (spotId: string, favoriteId: string, profileId: string) => {
    // const spot = await spotsRepository.getById(spotId);

    console.log("*****************")
    console.log("business spotId", spotId)
    console.log("business favoriteId", favoriteId)

    // if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    // if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);
    
    if (favoriteId === "") {
      return favoritesRepository.create(spotId, profileId);
    }
    
    if (favoriteId !== "") {
      console.log("*****************")
      console.log("business favoriteId !== undefined", favoriteId)
      const favorite = await favoritesRepository.getById(favoriteId);

      if (profileId === favorite?.profileId) {
        return favoritesRepository.delete(spotId, favoriteId);
      }
    }


  },
};

export default favoritesBusiness;
