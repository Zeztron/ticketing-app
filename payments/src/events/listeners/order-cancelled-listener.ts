import {
  Listener,
  OrderCancelledEvent,
  Subjects,
  queueGroupNames,
  OrderStatus,
} from '@hpgittix/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
  queueGroupName = queueGroupNames.PAYMENTS_SERVICE;

  async onMessage(data: OrderCancelledEvent['data'], msg: Message) {
    const order = await Order.findByEvent(data);

    if (!order) throw new Error('Order not found');

    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    msg.ack();
  }
}
