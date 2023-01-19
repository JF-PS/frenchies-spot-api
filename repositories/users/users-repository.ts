import { UpdateSpotDto } from "../../dto/spot-dto";
import { UpdateUserDto, UserDto } from "../../dto/users-dto";
import { User } from "../../models";

const usersRepository = {
  /**
   * @param {any} parent
   * @param {{ searchString: string }} args
   * @param {{ prisma: Prisma }} ctx
   */
  getAll: () => {
    return User.findMany();
  },

  getOne: (email: string) => {
    return User.findUnique({ where: { email } });
  },

  create: (pseudo: string, email: string, password: string, token: string) => {
    return User.create({
      data: {
        email,
        password,
        token,
        profile: { create: { pseudo } },
      },
      include: { profile: true },
    });
  },

  update: (data: UserDto, userId: string) => {
    return User.update({
      where: {
        id: userId,
      },
      data: {
        ...data,
      },
      include: { profile: true },
    });
  },

  login: (email: string, token: string) => {
    return User.update({
      where: { email },
      data: { token },
      include: { profile: true },
    });
  },

  getAuth: (token: string) => {
    return User.findUnique({ where: { token }, include: { profile: true } });
  },
};

export default usersRepository;
