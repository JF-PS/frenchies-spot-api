import { Itinary, Profile } from "@prisma/client";
import { CoordinateDto } from "./coordinate-dto";
import { ProfileSpotDto, SpotCreateCoordinateDto, SpotDto } from "./spot-dto";

export interface CreateItinaryDto
  extends Pick<Itinary, "name" | "description"> {
  spots: SpotDto[];
}

export interface ItinarySpotDto extends Pick<Itinary, "name" | "description"> {
  spots: ProfileSpotDto[];
}

export type buysItinaryDto = {
  profileId: Profile["id"];
  itinaryId: Itinary["id"];
};

export interface createItinaryCoordinateDto extends Pick<Itinary, "name" | "description"> {
  spots: SpotCreateCoordinateDto[];
}
