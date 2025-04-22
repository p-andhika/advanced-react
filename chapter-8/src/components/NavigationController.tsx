import { ReactNode, useCallback, useMemo, useState } from "react";
import { ContextApi, ContextData } from "../context";

type Props = {
  children: ReactNode;
};

export const NavigationController = ({ children }: Props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const open = useCallback(() => setIsNavExpanded(true), []);
  const close = useCallback(() => setIsNavExpanded(false), []);

  const data = useMemo(() => ({ isNavExpanded }), [isNavExpanded]);
  const api = useMemo(() => ({ open, close }), [open, close]);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>;
    </ContextData.Provider>
  );
};
