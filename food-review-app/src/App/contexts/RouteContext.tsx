import { createContext, FC, useState } from "react";

interface IRouteContextProps {
  children: React.ReactNode;
}

interface IRouteContext {
  route: string;
}

export const RouteContext = createContext<IRouteContext | null>(null);

export const RouteProvider: FC<IRouteContextProps> = ({ children }) => {
  const [route, setRoute] = useState<IRouteContext>();

  return (
    <RouteContext.Provider value={{ route: "" }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContext;
