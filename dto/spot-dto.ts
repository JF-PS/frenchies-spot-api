import { Spot } from "@prisma/client";
import { CoordinateDto } from "./coordinate-dto";

export interface ProfileSpotDto
  extends Pick<Spot, "name" | "description" | "lat" | "lng"> {
  profileId: string;
}

export type SpotDto = Pick<Spot, "name" | "description" | "lat" | "lng">;
