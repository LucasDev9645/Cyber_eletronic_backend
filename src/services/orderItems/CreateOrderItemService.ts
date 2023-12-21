import prismaClient from "../../prisma";

export interface OrderItemRequest {
  id: string;
  order_id: string;
  product_id: number;
  quantity: number;
  subtotal: number;
}

class CreateOrderItemService {
  async execute({
    id,
    order_id,
    product_id,
    quantity,
    subtotal,
  }: OrderItemRequest) {
    const orderItemCreate = await prismaClient.item.create({
      data: {
        id: id,
        order_id: order_id,
        product_id: product_id,
        quantity: quantity,
        subtotal: subtotal,
      },
      select: {
        id: true,
        quantity: true,
        subtotal: true,
      },
    });
    return orderItemCreate;
  }
}

export { CreateOrderItemService };
