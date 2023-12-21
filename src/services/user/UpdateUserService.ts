import prismaClient from "../../prisma";

export interface UpdateUserRequest {
  user_id: string;
  name: string;
  email: string;
}

class UpdateUserService {
  async execute({ user_id, name, email }: UpdateUserRequest) {
    try {
      const userAlreadyExists = await prismaClient.user.findFirst({
        where: {
          id: user_id,
        },
      });

      if (!userAlreadyExists) {
        throw new Error("User not exists!");
      }

      const userUpdate = await prismaClient.user.update({
        where: {
          id: user_id,
        },
        data: {
          name,
          email,
        },
        select: {
          name: true,
          email: true,
          roles: true,
        },
      });
      return userUpdate;
    } catch (err) {
      console.log(err);
      throw new Error("Error an update the user!");
    }
  }
}

export { UpdateUserService };
