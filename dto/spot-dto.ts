import { Spot } from "@prisma/client";

export type SpotDto = Pick<Spot, "name" | "description">;

export interface ProfileSpotDto extends Pick<Spot, "name" | "description"> {
  profileId: string;
}
