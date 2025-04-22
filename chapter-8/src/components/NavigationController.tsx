import { ReactNode, useCallback, useMemo, useState } from "react";

import { Context } from "../context/";

type Props = {
  children: ReactNode;
};

export const NavigationController = ({ children }: Props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggle = useCallback(
    () => setIsNavExpanded(!isNavExpanded),
    [isNavExpanded],
  );

  const value = useMemo(
    () => ({
      isNavExpanded,
      toggle,
    }),
    [isNavExpanded, toggle],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
