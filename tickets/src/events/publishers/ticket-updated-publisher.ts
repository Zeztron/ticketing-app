import { Publisher, Subjects, TicketUpdatedEvent } from '@hpgittix/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
