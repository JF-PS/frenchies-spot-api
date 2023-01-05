import { Spot } from "@prisma/client";
import { CoordinateDto } from "./coordinate-dto";

export interface ProfileSpotDto extends Pick<Spot, "name" | "description"> {
  profileId: string;
  coordinate: CoordinateDto;
}

export interface SpotDto extends Pick<Spot, "name" | "description"> {
  coordinate: CoordinateDto;
}
