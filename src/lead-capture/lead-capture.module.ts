import { Module } from '@nestjs/common';
import { LeadCaptureController } from './lead-capture.controller';
import { LeadCaptureService } from './lead-capture.service';
import { BullModule } from '@nestjs/bull';

@Module({
  controllers: [LeadCaptureController],
  providers: [LeadCaptureService],
  imports: [
    BullModule.registerQueue({
      name: 'default',
    }),
  ],
})
export class LeadCaptureModule {}
