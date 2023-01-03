import { Role } from "@prisma/client";

export interface TContext {
  isLogin: boolean;
  role: undefined | Role;
}
