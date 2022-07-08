import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IRootStackParamList = {
  Home: undefined;
  Culture: { id: number, src: string, title: string, text: string | null };
  CultureCarousel: { categoryId: number };
  Park: { id: number, src: string, title: string, text: string | null };
  ParkCarousel: { categoryId: number };
  Overnight: { id: number, src: string, title: string, text: string | null };
  OvernightCarousel: { categoryId: number };
}

export type RouteProps = Pick<NativeStackScreenProps<IRootStackParamList, "Culture" | "Overnight" | "Park">, 'route'>;
export type CategoryRouteProps = Pick<NativeStackScreenProps<IRootStackParamList, "CultureCarousel" | "OvernightCarousel" | "ParkCarousel">, 'route'>;
export type NavigationProps = Pick<NativeStackScreenProps<IRootStackParamList, "Culture" | "Overnight" | "Park">, 'navigation'>;
export type CategoryNavigationProps = Pick<NativeStackScreenProps<IRootStackParamList, "CultureCarousel" | "OvernightCarousel" | "ParkCarousel">, 'navigation'>;