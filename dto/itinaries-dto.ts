import { Itinary, Profile } from "@prisma/client";

export type ItinaryDto = Pick<Itinary, "name" | "description">;
export type buysItinary = {
  profileId: Profile["id"];
  itinaryId: Itinary["id"];
};
