import { Spot } from "@prisma/client";

export interface ProfileSpotDto
  extends Pick<Spot, "name" | "description" | "lat" | "lng"> {
  profileId: string;
}

export type SpotDto = Pick<Spot, "name" | "description" | "lat" | "lng" | "isCanPark" | "isCanVisit" | "isTouristic" | "region">;

export type UpdateSpotDto = Pick<Spot, "id" | "name" | "description" | "lat" | "lng" | "isCanPark" | "isCanVisit" | "isTouristic" | "region">;
