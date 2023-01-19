import { usersRepository } from "../../repositories";
import { SignInDto } from "../../dto";
import { throwError, codeErrors } from "../../utils";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";
import { UserDto } from "../../dto/users-dto";

const { USER_ALREADY_EXISTS, USER_NOT_FOUND, INCORRECT_PASSWORD } = codeErrors;
const secretKey = process.env.SECRET_KEY;

const usersBusiness = {
  /**
   * Get all users
   */
  getAll: () => {
    return usersRepository.getAll();
  },

  /**
   * @param {UserDto} data
   */
  update: (data: UserDto, userId: string) => {
    const { email, password, pseudo, photoUrl } = data;
    const user = { email, password};
    const profile = { pseudo, photoUrl};
    return usersRepository.update(user, profile, userId);
  },

  /**
   * @param {SignInDto} data
   */
  signUp: async (data: SignInDto) => {
    const { pseudo, email, password } = data;

    // See if an old user exists with email attemting to register
    const oldUser = await usersRepository.getOne(email);

    // Throw error if that user exists
    if (oldUser) {
      return throwError(USER_ALREADY_EXISTS, email);
    }

    // Encrypt password
    const hashPassword = await hash(password, 10);

    // Create our token
    const token = jwt.sign({ email, password: hashPassword }, `${secretKey}`, {
      expiresIn: "48h",
    });

    return usersRepository.create(pseudo, email, hashPassword, token);
  },

  /**
   * @param {SignInDto} data
   */
  signIn: async (data: SignInDto) => {
    const { email, password } = data;

    // See if a user exists with the email
    const currentUser = await usersRepository.getOne(email);

    // Throw error if user doesn't exist
    if (!currentUser) {
      return throwError(USER_NOT_FOUND, email);
    }

    // Check if the entered password equals to the hash password
    const { password: hashPassword } = currentUser;
    const isMatchPassword = await bcrypt.compare(password, hashPassword);

    // Create a new token
    if (isMatchPassword) {
      // Create new token
      const token = jwt.sign(
        { email, password: hashPassword },
        `${secretKey}`,
        {
          expiresIn: "48h",
        }
      );

      return usersRepository.login(email, token);
    }

    return throwError(INCORRECT_PASSWORD);
  },
};

export default usersBusiness;
