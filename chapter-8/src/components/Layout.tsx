import { ReactNode } from "react";
import { NavigationController } from "./NavigationController";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <NavigationController>
      <div>{children}</div>
    </NavigationController>
  );
};
