import { RatingDto } from "../../dto";
import ratingsRepository from "../../repositories/ratings/ratings-repository";

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

  create: (data: RatingDto, spotId: string, profileId: string) => {
    //vérifier spotId existe

    return ratingsRepository.create(data, spotId, profileId);
  },

//   update: (data: RatingDto, userId: string, spotId: string) => {
//     return ratingsRepository.update(data, userId, spotId);
//   },

//   delete: (ratingId: string) => {
//     return ratingsRepository.delete(ratingId);
//   },
};

export default ratingsBusiness;
