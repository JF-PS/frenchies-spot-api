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
    searchValue: string,
    region: string,
    skip: number,
    take: number,
  }) => {
    return spotsBusiness.getAll(
      data.orderBy,
      data.isCanPark,
      data.isCanVisit,
      data.isToursitic,
      data.searchValue,
      data.region,
      data.skip,
      data.take,
    );
  },

  spot: (_: undefined, data: { id: string }) => {
    const { id: spotId } = data;
    return spotsBusiness.getById(spotId);
  },
};
