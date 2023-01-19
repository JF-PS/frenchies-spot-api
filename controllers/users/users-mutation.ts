import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";
import { UserDto } from "../../dto/users-dto";
import { codeErrors, throwError } from "../../utils";
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
   * @param {TContext} ctx
   */
  signIn: (_: undefined, data: SignInDto, ctx: TContext) => {
    console.log("=============================");
    console.log(ctx);

    // throw new GraphQLError("User is not authenticated", {
    //   extensions: {
    //     code: "UNAUTHENTICATED",
    //     http: { status: 401 },
    //   },
    // });
    return usersBusiness.signIn(data);
  },

  updateUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const profileId = user?.profile.id
    if (!profileId) return throwError(UNAUTHENTICATED);
    return usersBusiness.update(data, profileId);
  },

  deleteUser: (_: undefined, data: UserDto, context: TContext) => {
    const { user } = context;
    const userId = user?.id;
    const profileId = user?.profile.id;

    console.log("******USERID ****")
    console.log({userId, profileId})
    
    if (!userId || !profileId) return throwError(UNAUTHENTICATED);
    return usersBusiness.delete(userId, profileId);
  },
};
