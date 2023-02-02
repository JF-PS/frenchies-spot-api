import { Spot, Spot_Picture } from "@prisma/client";

export interface ProfileSpotDto
  extends Pick<Spot, "name" | "description" | "lat" | "lng"> {
  profileId: string;
}

export type SpotPicturesDto = Pick<Spot_Picture, "url">[];
export type UpdateSpotPicturesDto = Omit<Spot_Picture, "spotId">[];

export type SpotDto = Omit<Spot, "profileId" | "id">;

export type UpdateSpotDto = Omit<Spot, "profileId">;

export type SpotFilterDto = Omit<Spot, "id" | "name" | "description">

export type SpotPaginationDto = { take: number; skip: number };

export type SpotOrderDto = { orderBy: "asc" | "desc" };

export interface ReadSpotDto
  extends SpotFilterDto,
    SpotPaginationDto,
    SpotOrderDto {
  searchValue: string;
}
