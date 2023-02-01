import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Favorite = prisma.favorite;

export default Favorite;
