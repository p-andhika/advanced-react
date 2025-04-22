import { useContext } from "react";
import { ContextApi, ContextData } from "../context";

export const useNavigationApi = () => useContext(ContextApi);
export const useNavigationData = () => useContext(ContextData);
