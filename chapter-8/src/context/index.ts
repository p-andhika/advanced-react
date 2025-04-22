import { createContext } from "react";

export const Context = createContext({
  isNavExpanded: false,
  toggle: () => {},
});
