import { Itinary, Profile, Spot } from "@prisma/client";
import { ProfileSpotDto } from "./spot-dto";

export interface CreateItinaryDto
  extends Pick<Itinary, "name" | "description"> {
  spots: Pick<Spot, "name" | "description">[];
}

export interface ItinarySpotDto extends Pick<Itinary, "name" | "description"> {
  spots: ProfileSpotDto[];
}

export type buysItinaryDto = {
  profileId: Profile["id"];
  itinaryId: Itinary["id"];
};
