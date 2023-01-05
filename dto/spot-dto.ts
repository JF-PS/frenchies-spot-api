import { Spot } from "@prisma/client";
import { CoordinateDto } from "./coordinate-dto";

export type SpotDto = Pick<Spot, "name" | "description">;

export interface ProfileSpotDto extends Pick<Spot, "name" | "description"> {
  profileId: string;
}

export interface CoordinateSpotDto extends Pick<Spot, "name" | "description"> {
  profileId: string;
  coordinate: CoordinateDto;
}