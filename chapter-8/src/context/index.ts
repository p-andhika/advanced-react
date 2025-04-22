import { createContext } from "react";

export const ContextData = createContext({
  isNavExpanded: false,
});

export const ContextApi = createContext({
  open: () => {},
  close: () => {},
});
