import { Subjects } from '../enums/subjects';

export interface OrderCancelled {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    };
  };
}
