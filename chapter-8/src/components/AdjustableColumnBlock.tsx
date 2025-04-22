import { useNavigationData } from "../hooks/useNavigation";

export const AdjustableColumnBlock = () => {
  const { isNavExpanded } = useNavigationData();

  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  );
};
