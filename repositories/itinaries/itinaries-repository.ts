import { ItinaryDto, buysItinaryDto } from "../../dto";
import { Itinary, Profile } from "../../models";

const itinariesRepository = {
  /**
   * Find all Itinary
   */
  getAll: () => {
    return Itinary.findMany();
  },

  /**
   * @param {ItinaryDto} data
   */
  create: (data: ItinaryDto) => {
    return Itinary.create({ data });
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
