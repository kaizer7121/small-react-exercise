export type Product = {
  name: string;
  price: number;
  store: string;
};

export enum ImageType {
  NATURE = 'Nature',
  CITY = 'City',
  FOOD = 'Food',
  BEACH = 'Beach',
  SKY = 'Sky',
  MOUTAIN = 'Mountain',
}

export type ImageUrl = {
  url: string;
  type: ImageType;
};

const IMAGE_SIZE = '500x500';

export const getImageUrls: ImageUrl[] = [
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?nature`,
    type: ImageType.NATURE,
  },
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?city`,
    type: ImageType.CITY,
  },
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?food`,
    type: ImageType.FOOD,
  },
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?beach`,
    type: ImageType.BEACH,
  },
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?sky`,
    type: ImageType.SKY,
  },
  {
    url: `https://source.unsplash.com/random/${IMAGE_SIZE}?moutain`,
    type: ImageType.MOUTAIN,
  },
];

export type ReponseImage = {
  imageResponse: Response;
  type: ImageType;
};
