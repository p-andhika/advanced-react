import { ComponentType, memo, useContext } from "react";
import { ContextApi } from "../context";

type AnyComponentProps = {
  openNav: () => void;
};

export const withNavigationOpen = <P extends object>(
  AnyComponent: ComponentType<P & AnyComponentProps>,
) => {
  const AnyComponentMemo = memo(AnyComponent);

  return (props: P) => {
    const { open } = useContext(ContextApi);

    return <AnyComponentMemo {...props} openNav={open} />;
  };
};
