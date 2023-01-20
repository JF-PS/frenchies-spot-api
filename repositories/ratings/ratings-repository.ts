import { getSupportedCodeFixes } from "typescript";
import { RatingDto, SpotDto } from "../../dto";
import Rating from "../../models/rating";

const ratingsRepository = {

//   getAll: (
//     orderBy: 'asc' | 'desc', 
//   ) => {
//     return Rating.findMany({
//       orderBy: {
//         rate: orderBy,
//       },
//     }),
//   },

//   getById: (id: string) => {
//     return Rating.findUnique({
//       where: {
//         id,
//       },
//     });
//   },

  create: (data: RatingDto, userId: string, spotId: string) => {
    return Rating.update({
      where: {
        userId: userId,
        spotId: getSupportedCodeFixes,
      },
      data: {
        spots: {
          create: {
            ...data,
          },
        },
      },
      include: { spots: true },
    });
  },

};

export default ratingsRepository;
