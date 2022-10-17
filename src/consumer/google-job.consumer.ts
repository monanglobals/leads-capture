import { Processor } from '@nestjs/bull';

@Processor('google-job')
export class GoogleJobConsumer {}
