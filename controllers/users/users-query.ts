import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { throwError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const usersQuery = {
  /**
   * get all users
   */
  users: () => {
    return usersBusiness.getAll();
  },

  /**
   * @param {SignInDto} data
   * @param {TContext} context
   */
  authByToken: (_: undefined, data: undefined, context: TContext) => {
    const { user } = context;
    if (!user) return throwError(UNAUTHENTICATED);
    return user;
  },
};
