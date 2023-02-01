import {
  SpotDto,
  SpotFilterDto,
  SpotOrderDto,
  SpotPaginationDto,
  SpotPicturesDto,
  UpdateSpotPicturesDto,
} from "../../dto";
import { Spot, Profile } from "../../models";
import SpotPicture from "./../../models/spotPicture";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: (
    filterData: SpotFilterDto,
    paginationData: SpotPaginationDto,
    orderBy: SpotOrderDto["orderBy"],
    nameContains: string
  ) => {
    return Spot.findMany({
      orderBy: {
        name: orderBy,
        // rating: orderBy,
      },
      where: {
        ...filterData,
        name: {
          contains: nameContains,
        },
      },
      ...paginationData,
      // ADD: par rayon autour de soi
      // ADD: 5 premiers spots autour de soi
      include: { spotPicture: true },
    });
  },

  getById: (id: string) => {
    return Spot.findUnique({
      where: {
        id,
      },
      include: { spotPicture: true },
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

  update: (
    data: SpotDto,
    spotId: string,
    pictures: UpdateSpotPicturesDto = []
  ) => {
    const spotPicture = {
      upsert: pictures.map((picture) => {
        const { id = undefined, url } = picture;
        return { where: { id }, update: { url }, create: { url } };
      }),
    };

    return Spot.update({
      where: {
        id: spotId,
      },
      data: pictures ? { ...data, spotPicture } : data,
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
