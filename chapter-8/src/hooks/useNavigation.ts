import { useContext } from "react";
import { Context } from "../context";

export const useNavigation = () => useContext(Context);
