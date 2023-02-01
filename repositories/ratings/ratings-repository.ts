import prisma from "../../prisma";
import { Rating, Spot } from "../../models";

const ratingsRepository = {
  getAll: () => {
    return Rating.findMany();
  },

  // getAverageRating: (spotId: string) => {
  //   return Rating.groupBy({
  //     by: [${spotId}],
  //     _avg: {
  //       rate: true,
  //     },
  //   }) 
  // },

  getAverageRatingBySpotId: async (spotId: string) => {
    const newSpotAverage: {avg: number}[] = await prisma.$queryRaw`
      SELECT 
        avg(r.rate)
      FROM "Spot" s
      LEFT JOIN "Rating" r
        ON r."spotId" = s."id"
        WHERE s.id = ${spotId}
    `
    console.log("getAverage ratingRepo", newSpotAverage[0].avg)
    return newSpotAverage[0].avg
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
