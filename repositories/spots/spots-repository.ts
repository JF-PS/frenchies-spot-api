import {
  SpotDto,
  SpotFilterDto,
  SpotOrderDto,
  SpotPaginationDto,
  SpotPicturesDto,
} from "../../dto";
import { Spot, Profile } from "../../models";

const spotsRepository = {
  updateAverageRatingBySpotId: (spotId: string, avg: SpotDto["averageRating"]) => {
    console.log("updateAverageSpotRepo", avg);
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        averageRating: avg,
      },
      include: { spotPicture: true },
    });

  },

  /**
   * Find all Spot
   */
  getAll: (
    filterData: SpotFilterDto,
    paginationData: SpotPaginationDto,
    orderBy: SpotOrderDto["orderBy"],
    nameContains: string,
  ) => {
    return Spot.findMany({
      orderBy: {
        averageRating: orderBy,
      },

      where: {
        ...filterData,
        name: {
          contains: nameContains,
        },

      },

      ...paginationData,

      include: { spotPicture: true },
    });
  },

  getById: (id: string) => {
    return Spot.findUnique({
      where: {
        id,
      },
    });
  },

  /**
   * @param {SpotDto} data
   * @param {SpotPicturesDto} pictures
   * @param {string} profileId
   */
  create: (data: SpotDto, pictures: SpotPicturesDto, profileId: string) => {
    return Spot.create({
      data: {
        ...data,
        profile: {
          connect: { id: profileId },
        },
        spotPicture: {
          create: [...pictures],
        },
      },
      include: { spotPicture: true },
    });
  },

  update: (data: SpotDto, spotId: string) => {
    return Spot.update({
      where: {
        id: spotId,
      },
      data: {
        ...data,
      },
      include: { spotPicture: true },
    });
  },

  /**
   * @param {string} profileId
   * @param {string} spotId
   */
  delete: (profileId: string, spotId: string) => {
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        spots: {
          delete: {
            id: spotId,
          },
        },
      },
    })
      .then(() => true)
      .catch(() => false);
  },
};

export default spotsRepository;
