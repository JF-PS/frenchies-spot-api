import { Coordinate } from "@prisma/client";

export type CoordinateDto = Pick<Coordinate, "lat" | "lng">;
