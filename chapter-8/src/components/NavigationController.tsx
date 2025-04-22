import { ReactNode, useMemo, useReducer } from "react";
import { ContextApi, ContextData } from "../context";
import { defaultState, reducer } from "../state";

type Props = {
  children: ReactNode;
};

export const NavigationController = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const data = useMemo(() => ({ isNavExpanded: state.isNavExpanded }), [state]);
  const api = useMemo(
    () => ({
      open: () => dispatch({ type: "open" }),
      close: () => dispatch({ type: "close" }),
      toggle: () => dispatch({ type: "toggle" }),
    }),
    [],
  );

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};
