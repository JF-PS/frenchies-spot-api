import { SpotDto } from "../../dto";
import { Spot, Profile } from "../../models";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: (orderBy: 'asc' | 'desc', isCanPark: boolean, isCanVisit: boolean, isTouristic: boolean) => {
    return Spot.findMany({
      orderBy: {
        name: orderBy,
        // rating: 'asc'
      }, 

      where: {
        isCanPark: isCanPark,
        isCanVisit: isCanVisit,
        isTouristic: isTouristic,
      },      
      
      // ADD: par région dans les champs spot
      // ADD: par rayon autour de soi
      // ADD: search bar
      // ADD: 5 premiers spots autour de soi
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
   */
  create: (data: SpotDto, profileId: string) => {
    return Profile.update({
      where: {
        id: profileId,
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
