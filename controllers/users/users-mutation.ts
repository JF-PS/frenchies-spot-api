import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";
import { throwError, codeErrors } from "../../utils";
const { UNAUTHENTICATED } = codeErrors;

export const usersMutation = {
  /**
   * @param {SignInDto} data
   */
  signUp: (_: undefined, data: SignInDto) => {
    return usersBusiness.signUp(data);
  },

  /**
   * @param {SignInDto} data
   * @param {TContext} context
   */
  signIn: (_: undefined, data: SignInDto, context: TContext) => {
    return usersBusiness.signIn(data);
  },

  /**
   * @param {TContext} context
   */
  signOut: (_: undefined, data: undefined, context: TContext) => {
    const { user } = context;
    if (!user) return throwError(UNAUTHENTICATED);
    const { token } = user;
    return usersBusiness.signOut(token);
  },
};
