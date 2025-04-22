import { useEffect } from "react";
import { useNavigationApi, useNavigationData } from "../hooks/useNavigation";

export const ExpandButton = () => {
  const { isNavExpanded } = useNavigationData();
  const { open, close } = useNavigationApi();

  useEffect(() => {
    console.log("component that uses Context re-renders");
  });

  return (
    <button onClick={() => (isNavExpanded ? close() : open())}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};
