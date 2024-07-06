import { StaticImageData } from "next/image";

export interface ItemProps {
  id: number;
  city: string;
  name: string;
  rate: string;
  reviews: string;
  price: string;
  sale: boolean;
  guests: string;
  bedRooms: string;
  beds: string;
  bath: string;
  type: string;
  images: string[];
  filtering: string[];
  amenities: string[];
}
export interface DestinationsProps {
  img: StaticImageData;
  name: string;
  place: string;
  rate: string;
  type: string;
}

export interface FooterLinksProps {
  label: string;
  links: string[];
}

export interface memberProps {
  name: string;
  img: StaticImageData;
  position: String;
}
