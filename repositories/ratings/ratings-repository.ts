import { AverageRatingDto } from "../../dto";
import { Rating, Spot } from "../../models";

const ratingsRepository = {
  getAll: () => {
    return Rating.findMany();
  },

  // getSpotRatingAverage: (spotId: string) => {

  //   return 3
    // return Rating.groupBy({
    //   by: ["spotId"],
    //   _avg: {
    //     rate: true,
    //   }, 
    //   orderBy: {
    //     _avg: {
    //       rate: 'asc',
    //     }
    //   }
    // })

    // return Rating.aggregate({
    //   where: {
    //     spotId,
    //   },
    //   _avg: {
    //     rate: true,
    //   }, 
    // })
  // },

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
            // : Buffer.from([1, 2, 3, 4, 5]),
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
