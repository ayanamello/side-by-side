import ILocationData from "../components/Modals/FirstAccessForm";
import IAllBadges from "./badgesData";
import { Marker } from "./makerData";

export interface User {
  name: string;
  id?: number;
  image_url: string;
  password: string;
  email: string;
  badges: IAllBadges;
  my_events: MyEvent[];
  experience: number;
  places: Marker[];
  location: null | ILocationData
}

export interface MyEvent extends Marker {}
