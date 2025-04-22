import { AdjustableColumnBlock } from "./AdjustableColumnBlock";
import { SlowComponentOne, SlowComponentTwo } from "./SlowComponent";

export const Main = () => {
  return (
    <>
      <SlowComponentOne />
      <SlowComponentTwo />
      <AdjustableColumnBlock />
    </>
  );
};
