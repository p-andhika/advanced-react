import { useNavigation } from "../hooks/useNavigation";

export const ExpandButton = () => {
  const { isNavExpanded, toggle } = useNavigation();

  return (
    <button onClick={toggle}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};
