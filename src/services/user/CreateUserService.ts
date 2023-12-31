import prismaClient from "../../prisma";

import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  email: string;
  password: string;
  roles: string[];
}

class CreateUserService {
  async execute({ name, email, password, roles }: UserRequest) {
    if (!email) {
      throw new Error("Email incorrect!");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        roles: roles,
      },
      select: {
        id: true,
        name: true,
        email: true,
        roles: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
