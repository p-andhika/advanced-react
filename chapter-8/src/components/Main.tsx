import { AdjustableColumnBlock } from "./AdjustableColumnBlock";
import { SlowComponentOne, SlowComponentTwo } from "./SlowComponent";
import { SomeCompnent } from "./SomeComponent";

export const Main = () => {
  return (
    <>
      <SomeCompnent />
      <SlowComponentOne />
      <SlowComponentTwo />
      <AdjustableColumnBlock />
    </>
  );
};
