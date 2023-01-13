import { SpotDto } from "../../dto";
import { Spot, Profile } from "../../models";
import { UpdateSpotDto } from "../../dto/spot-dto";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: () => {
    return Spot.findMany();
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
          }
        },
      },
      include: { spots: true },
    });
  },

  delete: (data: SpotDto, profileId: string, spotId: string) => {
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        spots: {
          delete: {
            id: spotId,
          }
        },
      },
      include: { spots: true },
    });
  },
};

export default spotsRepository;
