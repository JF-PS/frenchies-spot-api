import { SpotDto } from "../../dto";
import { Spot, Profile } from "../../models";
import { Coordinate } from "@prisma/client";

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
};

export default spotsRepository;
