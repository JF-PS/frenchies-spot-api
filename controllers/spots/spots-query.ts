import { spotsBusiness } from "../../business";

export const spotsQuery = {
  /**
   * Get All Spots
   */
  spots: (_: undefined, data: {
    orderBy: 'asc' | 'desc',
    isCanPark: boolean,
    isCanVisit: boolean,
    isToursitic: boolean,
  }) => {
    console.log("************orderBY*****************")
    console.log(data)
    return spotsBusiness.getAll(
      data.orderBy,
      data.isCanPark,
      data.isCanVisit,
      data.isToursitic,
    );
  },

  spot: (_: undefined, data: { id: string }) => {
    console.log("**********iiiiiiiidddddd*******************")
    console.log(data)
    const { id: spotId } = data;
    return spotsBusiness.getById(spotId);
  },
};
