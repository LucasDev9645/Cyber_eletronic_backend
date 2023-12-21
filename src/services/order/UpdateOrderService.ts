import prismaClient from "../../prisma";

export type UpdateOrderRequest = {
  status: boolean;
};

interface OrderRequest {
  order_id: string;
  data: UpdateOrderRequest;
}

class UpdateOrderService {
  async execute({ order_id, data }: OrderRequest) {
    const order = await prismaClient.order.update({
      where: {
        id: order_id,
      },
      data,
      select: {
        id: true,
        status: true,
        amount: true,
      },
    });
    return order;
  }
}

export { UpdateOrderService };
