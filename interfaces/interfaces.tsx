import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from "react-navigation";

export interface BaseNavigation {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
