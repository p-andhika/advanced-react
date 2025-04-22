type Props = {
  isNavExpanded: boolean;
};

export const AdjustableColumnBlock = ({ isNavExpanded }: Props) => {
  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  );
};
