import { UpdateRatingDto } from "../../dto/rating-dto";
import { spotsRepository } from "../../repositories";
import ratingsRepository from "../../repositories/ratings/ratings-repository";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID, RATING_NOT_FOUND, RATING_ID_NOT_MATCH_PROFILE_ID } = codeErrors;

const ratingsBusiness = {
  getAll: () => {
    return ratingsRepository.getAll();
  },

  getById: (ratingId: string) => {
    return ratingsRepository.getById(ratingId);
  },

  // createOrUpdate: async (rate: number, ratingId: string | undefined = undefined, spotId: string, profileId: string) => {
  //   const spot = await spotsRepository.getById(spotId);
    
  //   if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
  //   if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);
    
  //   if (ratingId === undefined) {
  //     return ratingsRepository.create(rate, spotId, profileId);
  //   } 
    
  //   if (ratingId !== undefined) {
  //     const rating = await ratingsRepository.getById(ratingId);

  //     if (profileId === rating?.profileId) {
  //       return ratingsRepository.update(rate, ratingId, spotId, profileId);
  //     }
  //   }
  // },


  create: async (rate: number, spotId: string, profileId: string) => {
    const spot = await spotsRepository.getById(spotId);
    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);

    return ratingsRepository.create(rate, spotId, profileId);
  },

  update: async (rate: number, spotId: string, profileId: string, ratingId: string) => {
    const spot = await spotsRepository.getById(spotId);
    const rating = await ratingsRepository.getById(ratingId);

    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);

    if (!rating) throw new GenericError(RATING_NOT_FOUND, ratingId);
    if (profileId !== rating.profileId) throw new GenericError(RATING_ID_NOT_MATCH_PROFILE_ID, ratingId);

    return ratingsRepository.update(rate, ratingId, spotId, profileId);   
  },
};

export default ratingsBusiness;
