import { StackScreenProps } from "@react-navigation/stack";

import { Params as DetailParams } from "../../screens/Detail";
import { Params as PointsParams } from "../../screens/Points";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  Points: PointsParams;
  Detail: DetailParams;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, Screen>;
