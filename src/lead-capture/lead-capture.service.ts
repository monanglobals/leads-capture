import { Injectable } from '@nestjs/common';

@Injectable()
export class LeadCaptureService {
  leadCaptureResponse(): string {
    return 'Pong';
  }
}
