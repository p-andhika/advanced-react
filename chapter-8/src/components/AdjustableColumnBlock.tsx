import { useNavigation } from "../hooks/useNavigation";

export const AdjustableColumnBlock = () => {
  const { isNavExpanded } = useNavigation();

  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  );
};
