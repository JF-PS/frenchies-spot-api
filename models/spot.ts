import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Spot = prisma.spot;

export default Spot;
