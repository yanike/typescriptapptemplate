import { WelcomeProps, WelcomeState } from "./welcome.types";
import { getNativeElementProps } from "@fluentui/react-utilities";

/**
 * Create the state required to render Welcome
 * @param props - props from this instance of Welcome
 * @param ref - references to root HTML of Welcome
 */
export const useWelcome = (props: WelcomeProps): WelcomeState => {
  const { text } = props;

  return {
    text,

    components: {
      root: "div"
    },

    root: getNativeElementProps("div", {})
  };
};
