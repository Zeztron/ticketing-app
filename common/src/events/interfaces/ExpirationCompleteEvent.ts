import { Subjects } from '../enums/subjects';

export interface ExipirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: { orderId: string };
}
