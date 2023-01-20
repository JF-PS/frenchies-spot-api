import { getSupportedCodeFixes } from "typescript";
import { RatingDto } from "../../dto";
import { CreateRatingsRepositoryDto } from "../../dto/rating-dto";
import { Profile, Spot, User } from "../../models";
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

  create: (data: RatingDto, spotId: string, profileId: string) => {

    return Profile.update({
        where: {
            id: profileId,
        },
        data: {
            spots: {
                update: {
                    where: {
                        id: spotId,
                    },
                    data: {
                        ratings: {
                            create: {
                                ...data,
                            },
                        },
                    },
                },
            },
        },
        // data: {
        //     ratings: {
        //         create: {
        //             ...data,
        //         }
        //     }
        // }
        // where: {
        //     id: profileId,
        // },
        // data: {
        //     spots: {
        //         update: {
        //             where: {
        //                 id: spotId,
        //             },
        //             data: {

        //             }
        //         }
        //     }
        // },
        // ratings: {
        //     create: {
        //         rate: data,
        //         data: {
        //             ...data,
        //         },
        //         where: {
        //             id: spotId,
        //         },
        //     },
        // },
    });
  },

};

export default ratingsRepository;
