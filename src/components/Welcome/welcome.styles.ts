import { makeStyles } from "@fluentui/react-components";
import { WelcomeState } from "./welcome.types";

const useClasses = makeStyles({
  root: {
    paddingTop: "0",
    paddingRight: "0",
    paddingBottom: "0",
    paddingLeft: "0"
  }
});

export const useWelcomeStyles = (state: WelcomeState): WelcomeState => {
  const classes = useClasses();

  if (state.root) {
    state.root.className = classes.root;
  }

  return state;
};
