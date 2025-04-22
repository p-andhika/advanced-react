import { useEffect } from "react";
import { useNavigation } from "../hooks/useNavigation";

export const ExpandButton = () => {
  const { isNavExpanded, toggle } = useNavigation();

  useEffect(() => {
    console.log("component that uses Context re-renders");
  });

  return (
    <button onClick={toggle}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};
