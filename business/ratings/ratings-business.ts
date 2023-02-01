import { throws } from "assert";
import { spotsRepository , ratingsRepository} from "../../repositories";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID, RATING_OUT_OF_RANGE } = codeErrors;

const ratingsBusiness = {
  getAll: () => {
    return ratingsRepository.getAll();
  },

  // getSpotRatingAverage: (spotId: string) => {
  //   return ratingsRepository.getSpotRatingAverage(spotId);
  // },

  getById: (ratingId: string) => {
    return ratingsRepository.getById(ratingId);
  },

  createOrUpdate: async (rate: number, ratingId: string | undefined = undefined, spotId: string, profileId: string) => {
    console.log("rate", rate)
    if(rate < 1 || rate > 5) throw new GenericError(RATING_OUT_OF_RANGE)

    const spot = await spotsRepository.getById(spotId);
    let createOrUpdateRating

    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId) throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);

    console.log("ratingId", ratingId)
    console.log("spotId", spotId)

    if (ratingId === undefined) {
      createOrUpdateRating = ratingsRepository.create(rate, spotId, profileId);
    } 
    
    if (ratingId !== undefined) {
      const rating = await ratingsRepository.getById(ratingId);

      if (profileId === rating?.profileId) {
        createOrUpdateRating = ratingsRepository.update(rate, ratingId, spotId, profileId);
      }
    }

    const newAverage = await ratingsRepository.getAverageRatingBySpotId(spotId);
    console.log("newAverage Business Rating", newAverage);
    spotsRepository.updateAverageRatingBySpotId(spotId, newAverage);

    return createOrUpdateRating
  },
};

export default ratingsBusiness;
