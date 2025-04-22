import { ReactNode, useEffect, useState } from "react";
import { NavigationController } from "./NavigationController";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [_scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <NavigationController>
      <div>{children}</div>
    </NavigationController>
  );
};
