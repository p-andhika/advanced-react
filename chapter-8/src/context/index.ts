import { createContext } from "react";
import { defaultState } from "../state";

export const ContextData = createContext(defaultState);

export const ContextApi = createContext({
  open: () => {},
  close: () => {},
  toggle: () => {},
});
