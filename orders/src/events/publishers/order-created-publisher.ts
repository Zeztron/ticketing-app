import { Publisher, OrderCreatedEvent, Subjects } from '@hpgittix/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
