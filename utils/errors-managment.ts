import { GraphQLError } from "graphql";

interface TError {
  statusCode: number;
  errorMessage: Record<string, string>;
}

export enum codeErrors {
  USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
  UNAUTHENTICATED = "UNAUTHENTICATED",
  USER_NOT_EXISTS = "USER_NOT_EXISTS",
  INCORRECT_PASSWORD = "INCORRECT_PASSWORD",
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

const errorsMessage: Record<keyof typeof codeErrors, TError> = {
  USER_ALREADY_EXISTS: {
    statusCode: 412,
    errorMessage: { en: "A user is already registred with the email: " },
  },
  UNAUTHENTICATED: {
    statusCode: 401,
    errorMessage: { en: "User is not authenticated" },
  },
  USER_NOT_EXISTS: {
    statusCode: 401,
    errorMessage: { en: "No user registred with the email: " },
  },
  INCORRECT_PASSWORD: {
    statusCode: 401,
    errorMessage: { en: "Incorrect password" },
  },
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    errorMessage: { en: "500 Internal Server Error: " },
  },
};

const throwError = (codeError: keyof typeof codeErrors, err: string = "") => {
  const errorMessage = errorsMessage[codeError].errorMessage["en"];
  const statusCode = errorsMessage[codeError].statusCode;

  throw new GraphQLError(`${errorMessage}${err}`, {
    extensions: {
      code: codeError,
      http: { status: statusCode },
    },
  });
};

export default throwError;
