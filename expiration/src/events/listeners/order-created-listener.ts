import {
  Listener,
  OrderCreatedEvent,
  Subjects,
  queueGroupNames,
} from '@hpgittix/common';
import { Message } from 'node-nats-streaming';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupNames.EXPIRATION_SERVICE;

  async onMessage(data: OrderCreatedEvent['data'], msg: Message) {}
}
