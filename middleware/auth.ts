import { usersRepository } from "../repositories";
import { Role } from "@prisma/client";

/**
 * Get the user token from the headers.
 * @param {string} token
 */
const authMiddleware = async (token: string) => {
  // Try to retrieve a user with the token
  const user = await usersRepository.getAuth(token);

  // Add auth information to the context
  const isLogin: boolean = user !== null;
  const role: undefined | Role = user?.role;

  return { isLogin, role };
};

export default authMiddleware;
