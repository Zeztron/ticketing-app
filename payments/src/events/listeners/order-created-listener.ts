import {
  Listener,
  OrderCreatedEvent,
  Subjects,
  queueGroupNames,
} from '@hpgittix/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';

export class OrderCreatedListner extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupNames.PAYMENTS_SERVICE;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {
    const order = Order.build({
      id: data.id,
      price: data.ticket.price,
      status: data.status,
      userId: data.userId,
      version: data.version,
    });
    await order.save();

    msg.ack();
  }
}
