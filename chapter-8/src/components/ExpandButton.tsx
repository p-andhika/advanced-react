import { useEffect } from "react";
import { useNavigationApi, useNavigationData } from "../hooks/useNavigation";

export const ExpandButton = () => {
  const { isNavExpanded } = useNavigationData();
  const { toggle } = useNavigationApi();

  useEffect(() => {
    console.log("component that uses Context re-renders");
  });

  return (
    <button onClick={toggle}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};
