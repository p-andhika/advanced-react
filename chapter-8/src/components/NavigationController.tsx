import { ReactNode, useState } from "react";

import { Context } from "../context/";

type Props = {
  children: ReactNode;
};

export const NavigationController = ({ children }: Props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = () => setIsNavExpanded(!isNavExpanded);

  return (
    <Context.Provider
      value={{
        isNavExpanded,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
};
