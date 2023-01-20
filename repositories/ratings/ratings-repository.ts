import { RatingDto } from "../../dto";
import { Spot } from "../../models";

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

  create: (data: RatingDto, spotId: string, profileId: string) => {

    return Spot.update({
        where: {
            id: spotId,
        },
        data: {
            ratings: {
                create: {
                    ...data,
                    profileId,
                },
            },
        },
        include: { ratings: true }
    });
  },

};

export default ratingsRepository;
