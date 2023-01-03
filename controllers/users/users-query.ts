import { usersBusiness } from "../../business";

export const usersQuery = {
  /**
   * get all users
   */
  users: () => {
    return usersBusiness.getAll();
  },
};
