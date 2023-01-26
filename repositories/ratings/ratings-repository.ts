import { Rating, Spot } from "../../models";

const ratingsRepository = {
  getAll: () => {
    return Rating.findMany();
  },

  getById: (id: string) => {
    return Rating.findUnique({
      where: {
        id,
      },
    });
  },

  create: (rate: number, spotId: string, profileId: string) => {
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        ratings: {
          create: {
            rate,
            profileId,
          },
        },
      },
      include: { ratings: true },
    });
  },

  update: (rate: number, ratingId: string, spotId: string, profileId: string ) => {
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        ratings: {
          update: {
            where: {
              id: ratingId,
            },
            data: {
              rate,
              profileId,
            }
          },
        },
      },
      include: { ratings: true },
    });
  },
};

export default ratingsRepository;
