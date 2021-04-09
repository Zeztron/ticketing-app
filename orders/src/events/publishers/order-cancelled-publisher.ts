import { Publisher, OrderCancelled, Subjects } from '@hpgittix/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelled> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
