import { ExpandButton } from "./ExpandButton";

type Props = {
  isNavExpanded: boolean;
  toggleNav: () => void;
};

export const Sidebar = ({ isNavExpanded, toggleNav }: Props) => {
  return (
    <div>
      <ExpandButton isNavExpanded={isNavExpanded} toggleNav={toggleNav} />

      <ul>
        <li>
          <a href="#">some link</a>
        </li>
      </ul>
    </div>
  );
};
