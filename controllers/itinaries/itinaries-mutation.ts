import { itinariesBusiness } from "../../business";
import { ItinaryDto, buysItinaryDto } from "../../dto";

export const itinariesMutation = {
  /**
   * @param {ItinaryDto} data
   */
  createItinary: (_: undefined, data: ItinaryDto) => {
    return itinariesBusiness.create(data);
  },

  /**
   * @param {buysItinaryDto} data
   */
  buysItinary: (_: undefined, data: buysItinaryDto) => {
    console.log("=======================");
    console.log({ data });
    console.log("=======================");
    return itinariesBusiness.connectUser(data);
  },
};
