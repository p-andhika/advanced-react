import { useEffect } from "react";
import { useNavigationApi } from "../hooks/useNavigation";

export const SomeCompnent = () => {
  const { open } = useNavigationApi();

  useEffect(() => {
    console.info(
      "SomeComponent won't re-render on navigation expand/collapse, even though it uses Context",
    );
  });

  return <button onClick={open}>Expand nav</button>;
};
