import prismaClient from "../../prisma";

export interface OrderRequest {
  id: string;
  user_id: string;
  status: boolean;
  amount: number;
}

class CreateOrderService {
  async execute({ id, user_id, status, amount }: OrderRequest) {
    const orderCreate = await prismaClient.order.create({
      data: {
        id: id,
        user_id: user_id,
        status: status,
        amount: amount,
      },
      select: {
        id: true,
        status: true,
        amount: true,
      },
    });
    return orderCreate;
  }
}

export { CreateOrderService };
