import { spotsRepository } from "../../repositories";
import ratingsRepository from "../../repositories/ratings/ratings-repository";
import { codeErrors, GenericError } from "../../utils";

const { SPOT_NOT_FOUND } = codeErrors;

const ratingsBusiness = {
  //   getAll: (
  //     orderBy: 'asc' | 'desc',
  //   ) => {
  //     return ratingsRepository.getAll(
  //       orderBy,
  //     );
  //   },

  //   getById: (ratingId: string) => {
  //     return ratingsRepository.getById(ratingId);
  //   },

  create: async (rate: number, spotId: string, profileId: string) => {
    const spot = await spotsRepository.getById(spotId);
    if (!spot) {
      throw new GenericError(SPOT_NOT_FOUND, spotId);
    }
    return ratingsRepository.create(rate, spotId, profileId);
  },

  //   update: (data: RatingDto, userId: string, spotId: string) => {
  //     return ratingsRepository.update(data, userId, spotId);
  //   },

  //   delete: (ratingId: string) => {
  //     return ratingsRepository.delete(ratingId);
  //   },
};

export default ratingsBusiness;
