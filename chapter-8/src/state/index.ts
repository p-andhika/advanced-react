type State = {
  isNavExpanded: boolean;
};

export const defaultState: State = {
  isNavExpanded: false,
};

type Action = {
  type: "open" | "close" | "toggle";
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "open":
      return { ...state, isNavExpanded: true };
    case "close":
      return { ...state, isNavExpanded: false };
    case "toggle":
      return { ...state, isNavExpanded: !state.isNavExpanded };
  }
};
