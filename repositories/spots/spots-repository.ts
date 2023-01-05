import { CoordinateSpotDto } from "../../dto";
import { Spot, Profile } from "../../models";

const spotsRepository = {
  /**
   * Find all Spot
   */
  getAll: () => {
    return Spot.findMany();
  },

  /**
   * @param {CoordinateSpotDto} data
   */
  create: (data: CoordinateSpotDto, profileId: string) => {
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        spots: {
          create: [{ 
            ...data, 
            coordinate: {
              create: data.coordinate
            } 
          }],
        },
      },
      include: { spots: true },
    });
  },
};

export default spotsRepository;
