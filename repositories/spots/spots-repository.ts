import { SpotDto } from "../../dto";
import { Spot, Profile } from "../../models";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: () => {
    return Spot.findMany();
  },

  getById: (id: string) => {
    console.log(id);
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
