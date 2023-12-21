import { Request, Response } from "express";

import { UpdateUserService } from "../../services/user/UpdateUserService";
import { UpdateUserRequest } from "../../services/user/UpdateUserService";

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const user_id = req.user_id;
    const { name, email }: UpdateUserRequest = req.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({ user_id, name, email });
    return res.json(user);
  }
}

export { UpdateUserController };
