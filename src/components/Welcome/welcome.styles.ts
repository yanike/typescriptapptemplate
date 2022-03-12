import { makeStyles } from "@fluentui/react-make-styles";
import { WelcomeState } from "./welcome.types";

const useClasses = makeStyles({
  root: {
    padding: "0"
  }
});

export const useWelcomeStyles = (state: WelcomeState): WelcomeState => {
  const classes = useClasses();

  if (state.root) {
    state.root.className = classes.root;
  }
};
