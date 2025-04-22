import { useNavigation } from "../hooks/useNavigation";
import { ExpandButton } from "./ExpandButton";

export const Sidebar = () => {
  const { isNavExpanded, toggle } = useNavigation();

  return (
    <div>
      <ExpandButton isNavExpanded={isNavExpanded} toggleNav={toggle} />

      <ul>
        <li>
          <a href="#">some link</a>
        </li>
      </ul>
    </div>
  );
};
