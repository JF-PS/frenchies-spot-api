import prisma from "../../prisma";
import { Rating, Spot } from "../../models";

const ratingsRepository = {
  //   getAll: (
  //     orderBy: 'asc' | 'desc',
  //   ) => {
  //     return Rating.findMany({
  //       orderBy: {
  //         rate: orderBy,
  //       },
  //     }),
  //// },    

  getAll: () => {
    return Rating.findMany();
  },

  getAverageRaitingBySpotId: async (spotId: string): Promise<number> => {
    const newSpotAverage: number = await prisma.$queryRaw`
      SELECT 
        avg(r.rate)
      FROM "Spot" s
      LEFT JOIN "Rating" r
        ON r."spotId" = s."id"
        WHERE s.id = ${spotId}
    `
    return newSpotAverage
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
