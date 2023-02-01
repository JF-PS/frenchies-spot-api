import { ratingsBusiness } from "../../business/ratings";

export const ratingsQuery = {
  ratings: () => {
    return ratingsBusiness.getAll();
  },

  // ratingsAverage: (_: undefined, spotId: string) => {
  //   return ratingsBusiness.getSpotRatingAverage(spotId);
  // },

  rating: (_: undefined, data: { id: string }) => {
      const { id: ratingId } = data;
      return ratingsBusiness.getById(ratingId);
    },
};
