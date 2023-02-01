import { spotsRepository, ratingsRepository } from "../../repositories";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND, SPOT_ID_MATCH_PROFILE_ID } = codeErrors;

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
    const spot = await spotsRepository.getById(spotId);

    // if (!spot) throw new GenericError(SPOT_NOT_FOUND, spotId);
    // if (profileId === spot.profileId)
    //   throw new GenericError(SPOT_ID_MATCH_PROFILE_ID);

    const userRating = await ratingsRepository.createOrUpdate(
      rate,
      ratingId,
      spotId,
      profileId
    );

    const average = await ratingsRepository.getSpotAverageRating(spotId);
    const newAverage = average._avg.rate;
    const maxVote = average._count.rate;
    await spotsRepository.updateAverageRatingBySpotId(spotId, newAverage);

    return { currentRating: userRating, avg: newAverage, maxVote };
  },
};

export default ratingsBusiness;
