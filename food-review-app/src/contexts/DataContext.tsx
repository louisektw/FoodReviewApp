import { createContext, FC } from "react";
import { IRestaurant } from "../interfaces/irestaurant.interface";
import restaurantData from "../restaurant-data.json";

interface IDataContextProps {
  children: React.ReactNode;
}

export interface IDataContext {
  restaurants: IRestaurant[];
}

export const DataContext = createContext<IDataContext | null>(null);

export const DataContextProvider: FC<IDataContextProps> = ({ children }) => {
  let restaurants = restaurantData;
  return (
    <DataContext.Provider value={{ restaurants }}> {children} </DataContext.Provider>
  );
};
