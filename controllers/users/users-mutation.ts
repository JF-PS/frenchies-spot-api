import { usersBusiness } from "../../business";
import { TContext } from "../../graphql/context";
import { SignInDto } from "../../dto";
import { UpdateUserDto } from "../../dto/users-dto";
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

  updateUser: (_: undefined, data: UpdateUserDto, context: TContext) => {
    const { user } = context;
    const idUser = user?.id
    if (!idUser) return throwError(UNAUTHENTICATED);
    const { id: userId } = data 
    return usersBusiness.update(data, userId);
  },
};
