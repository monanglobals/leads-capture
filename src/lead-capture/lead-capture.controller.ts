import { Body, Controller, Post, Res } from '@nestjs/common';
import { LeadCapturePostSearchRequestDto } from '../dto/lead-capture-post-search-request.dto';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { v4 as uuidv4 } from 'uuid';

@Controller('lead')
export class LeadCaptureController {
  constructor(@InjectQueue('google-job') private googleQueue: Queue) {}

  @Post('/search')
  async postSearchRequest(
    @Res() response: Response,
    @Body() searchLeadDto: LeadCapturePostSearchRequestDto,
  ): Promise<any> {
    searchLeadDto.query.map();
    await this.googleQueue.add('PollToGetPlacesQuery', searchLeadDto, {
      removeOnComplete: true,
      jobId: 'PollToGetPlacesQuery::' + uuidv4(),
    });
    return 'process started';
  }
}
