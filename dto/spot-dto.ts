import { Spot } from "@prisma/client";

export type SpotDto = Pick<Spot, "name" | "description">;
