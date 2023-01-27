import { Spot, Spot_Picture } from "@prisma/client";

export interface ProfileSpotDto
  extends Pick<Spot, "name" | "description" | "lat" | "lng"> {
  profileId: string;
}

export type SpotPicturesDto = Pick<Spot_Picture, "url">[];

export type SpotDto = Omit<Spot, "profileId" | "id">;

export type UpdateSpotDto = Pick<
  Spot,
  | "id"
  | "name"
  | "description"
  | "lat"
  | "lng"
  | "isCanPark"
  | "isCanVisit"
  | "isTouristic"
  | "region"
>;
