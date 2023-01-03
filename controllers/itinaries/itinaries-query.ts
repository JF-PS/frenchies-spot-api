import { itinariesBusiness } from "../../business";

export const itinariesQuery = {
  /**
   * Get All Itinaries
   */
  itinaries: () => {
    return itinariesBusiness.getAll();
  },
};
