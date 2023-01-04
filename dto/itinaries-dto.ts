import { Itinary, Profile, Spot } from "@prisma/client";

export interface ItinaryDto extends Pick<Itinary, "name" | "description"> {
  // spots: Spot[];
}

export type buysItinaryDto = {
  profileId: Profile["id"];
  itinaryId: Itinary["id"];
};
