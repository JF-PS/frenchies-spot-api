import { throws } from "assert";
import { spotsRepository, ratingsRepository } from "../../repositories";
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

  createOrUpdate: async (
    rate: number,
    ratingId: string | undefined = undefined,
    spotId: string,
    profileId: string
  ) => {
    console.log("rate", rate)
    if(rate < 1 || rate > 5) throw new GenericError(RATING_OUT_OF_RANGE)

    const spot = await spotsRepository.getById(spotId);

    if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    if (profileId === spot.profileId)
      throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);

    const userRating = await ratingsRepository.createOrUpdate(
      rate,
      ratingId,
      spotId,
      profileId
    );

    const average = await ratingsRepository.getSpotAverageRating(spotId);
    const newAverage = average._avg.rate;
    await spotsRepository.updateAverageRatingBySpotId(spotId, newAverage);

    return { currentRating: userRating, avg: newAverage };
  },
};

export default ratingsBusiness;
