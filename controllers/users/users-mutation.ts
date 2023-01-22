import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";
import { throwError, codeErrors } from "../../utils";
import { UserDto } from "../../dto/users-dto";
const { UNAUTHENTICATED } = codeErrors;

export const usersMutation = {
  /**
   * @param {SignInDto} data
   */
  signUp: (_: undefined, data: SignInDto) => {
    console.log("==================================");
    console.log("SIGNUP");
    console.log("==================================");
    return usersBusiness.signUp(data);
  },

  /**
   * @param {SignInDto} data
   * @param {TContext} context
   */
  signIn: (_: undefined, data: SignInDto, context: TContext) => {
    console.log("==================================");
    console.log("SIGNIN");
    console.log("==================================");
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

  updateUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id;
    if (!profileId) return throwError(UNAUTHENTICATED);
    return usersBusiness.update(data, profileId);
  },

  deleteUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const userId = user?.id;
    const profileId = user?.profile.id;

    console.log("******USERID ****");
    console.log({ userId, profileId });

    if (!userId || !profileId) return throwError(UNAUTHENTICATED);
    return usersBusiness.delete(userId, profileId);
  },
};
