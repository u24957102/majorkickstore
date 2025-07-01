export interface Sneaker {
  imageLinks: string[];
  _id: string;
  shoeName: string;
  brand: string;
  silhouette: string;
  styleID: string;
  make: string;
  colorway: string;
  retailPrice: number;
  thumbnail: string;
  releaseDate: string; // ISO format: YYYY-MM-DD
  description: string;
  urlKey: string;
}

export interface Brand{
  id: string ;
  imageLinks: string ;
  name: string ;
}