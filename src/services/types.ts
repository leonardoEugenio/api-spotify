export interface SessionType {
  expires: string;
  token: {
    name: string;
    accessToken: string;
    exp: number;
    iat: number;
    jti: string;
    picture: string;
    sub: string;
  };
  user: {
    email: string;
    name: string;
    image: string;
  };
}
export interface tracksType {
  preview_url: string;
  name: string;
  external_urls: {
    spotify: string;
  };
  external_ids: {
    isrc: string;
  };
  album: {
    images: [
      {
        url: string;
        width: number;
      }
    ];
  };
  artists: [
    {
      name :string
    }
  ]
}
