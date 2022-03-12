import { makeStyles } from "@fluentui/react-components";
import { WelcomeState } from "./welcome.types";

const useClasses = makeStyles({
  root: {}
});

export const useWelcomeStyles = (state: WelcomeState): WelcomeState => {
  const classes = useClasses();

  if (state.root) {
    state.root.className = classes.root;
  }

  return state;
};
