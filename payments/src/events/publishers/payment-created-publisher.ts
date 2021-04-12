import { PaymentCreatedEvent, Publisher, Subjects } from '@hpgittix/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
