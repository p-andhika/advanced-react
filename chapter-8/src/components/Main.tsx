import { AdjustableColumnBlock } from "./AdjustableColumnBlock";
import { SlowComponentOne, SlowComponentTwo } from "./SlowComponent";

type Props = {
  isNavExpanded: boolean;
};

export const Main = ({ isNavExpanded }: Props) => {
  return (
    <>
      <SlowComponentOne />
      <SlowComponentTwo />
      <AdjustableColumnBlock isNavExpanded={isNavExpanded} />
    </>
  );
};
