import { useEffect } from "react";
import { withNavigationOpen } from "../HOC/withNavigationOpen";
import { AdjustableColumnBlock } from "./AdjustableColumnBlock";
import { SlowComponentOne, SlowComponentTwo } from "./SlowComponent";
import { SomeCompnent } from "./SomeComponent";

const Main = ({ openNav }: { openNav: () => void }) => {
  useEffect(() => {
    console.log("Main...");
  });

  return (
    <>
      <div>
        <button onClick={openNav}>
          click to expand nav - inside heavy component
        </button>
      </div>
      <SomeCompnent />
      <SlowComponentOne />
      <SlowComponentTwo />
      <AdjustableColumnBlock />
    </>
  );
};

export const MainHOC = withNavigationOpen(Main);
