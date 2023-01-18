import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const SpotPicture = prisma.spot_Picture;

export default SpotPicture;