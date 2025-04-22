type Props = {
  isNavExpanded: boolean;
  toggleNav: () => void;
};

export const ExpandButton = ({ isNavExpanded, toggleNav }: Props) => {
  return (
    <button onClick={toggleNav}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};
