import { itinariesRepository } from "../../repositories";
import { ItinaryDto, buysItinaryDto } from "../../dto";

const itinariesBusiness = {
  /**
   * Get all itinary
   */
  getAll: () => {
    return itinariesRepository.getAll();
  },

  /**
   * @param {ItinaryDto} data
   */
  create: (data: ItinaryDto) => {
    return itinariesRepository.create(data);
  },

  /**
   * @param {buysItinaryDto} data
   */
  connectUser: (data: buysItinaryDto) => {
    return itinariesRepository.connectUser(data);
  },
};

export default itinariesBusiness;
