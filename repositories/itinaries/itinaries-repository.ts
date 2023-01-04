import { ItinaryDto, buysItinaryDto } from "../../dto";
import { Itinary, Profile } from "../../models";
import { Spot } from "@prisma/client";

const itinariesRepository = {
  /**
   * Find all Itinary
   */
  getAll: () => {
    return Itinary.findMany({ include: { spots: true } });
  },

  /**
   * @param {ItinaryDto} data
   */
  create: (data: ItinaryDto, spot: Spot) => {
    return Itinary.create({
      data: {
        ...data,
        spots: {
          create: [],
          // create: { name: "ff", description: "frf" },
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
