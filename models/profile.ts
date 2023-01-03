import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const Profile = prisma.profile;

export default Profile;
