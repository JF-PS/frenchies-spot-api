import { ItinarySpotDto, buysItinaryDto } from "../../dto";
import { Itinary, Profile } from "../../models";
import { Spot } from "@prisma/client";
import { createItinaryCoordinateDto } from "../../dto/itinaries-dto";

const itinariesRepository = {
  /**
   * Find all Itinary
   */
  getAll: () => {
    return Itinary.findMany({ include: { spots: true } });
  },

  /**
   * @param {ItinarySpotDto} data
   */
  create: (data: any) => {
    const { spots } = data;

    return Itinary.create({
      data: {
        ...data,
        spots: {
          create: spots,
        },
      },
      include: { spots: true },
    });
  },

  /**
   * Connect a user with an itinary
   * @param {buysItinaryDto} data
   */
  connectUser: (data: buysItinaryDto) => {
    const { profileId, itinaryId } = data;
    return Profile.update({
      where: {
        id: profileId,
      },
      data: {
        itinaries: {
          connect: {
            id: itinaryId,
          },
        },
      },
      include: { itinaries: true },
    });
  },
};

export default itinariesRepository;
