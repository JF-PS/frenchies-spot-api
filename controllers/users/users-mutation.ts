import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";

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
};
