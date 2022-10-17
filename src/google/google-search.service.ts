import { Injectable } from '@nestjs/common';
import { GoogleSearchGetPlacesQueryResponseDto } from '../dto/google-search-get-places-query-response.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class GoogleSearchService {
  constructor(
    private readonly httpService: HttpService,
    private readonly API_KEY: string = process.env.GOOGLE_API_KEY,
    private readonly BASE_URL: string = process.env.GOOGLE_BASE_URL,
  ) {}

  async getPlacesQuery(
    query: string,
  ): Promise<GoogleSearchGetPlacesQueryResponseDto> {
    const result = await this.httpService.axiosRef.get(
      `${
        this.BASE_URL
      }/maps/api/place/textsearch/json?query=${encodeURIComponent(query)}&key=${
        this.API_KEY
      }`,
    );
    return result.data;
  }
}
