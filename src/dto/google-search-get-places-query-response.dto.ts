export class GoogleSearchGetPlacesQueryResponseDto {
  result: [
    {
      place_id: string;
      business_status: string;
      formatted_address: string;
      geometry: {
        location: {
          lat: string;
          lng: string;
        };
      };
      name: string;
    },
  ];
}
