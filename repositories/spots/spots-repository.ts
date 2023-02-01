import {
  SpotDto,
  SpotFilterDto,
  SpotOrderDto,
  SpotPaginationDto,
  SpotPicturesDto,
} from "../../dto";
import { Spot, Profile } from "../../models";
import { ratingsRepository } from "../ratings";
import SpotPicture from "./../../models/spotPicture";
import prisma from "../../prisma";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: async (
    filterData: SpotFilterDto,
    paginationData: SpotPaginationDto,
    orderBy: SpotOrderDto["orderBy"],
    nameContains: string,
  ) => {
    
    const result = await prisma.$queryRaw`
      SELECT 
        s."id" as SpotId,
        s."name",
        s."description",
        s."isCanPark",
        s."isCanVisit",
        s."isTouristic",
        s."profileId",
        s."lat",
        s."lng",
        s."region",
        avg(r.rate) as "averageRating"
      FROM "Spot" s
      LEFT JOIN "Rating" r
        ON r."spotId" = s."id"
      GROUP BY
        s."id"
      ORDER BY "averageRating" desc   
    `
    // let spot = await Spot.findMany({
    //   orderBy: {
    //     // name: orderBy,
    //     // rating: orderBy,
    //   },

    //   where: {
    //     ...filterData,
    //     name: {
    //       contains: nameContains,
    //     },
    //   },

    //   ...paginationData,

    //   include: { spotPicture: true },
    // });

    // const avg = ratingsRepository.getSpotRatingAverage(spot.id)

    // spot = {
    //   ...spot,
    //   avgRating: avg,
    // }

    return result
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

  update: (data: SpotDto, profileId: string, spotId: string) => {
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        spots: {
          update: {
            data: {
              ...data,
            },
            where: {
              id: spotId,
            },
          },
        },
      },
      include: { spots: true },
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
      include: { spots: true },
    });
  },
};

export default spotsRepository;
