import React from "react";
import { renderWelcome } from "./welcome.render";
import { useWelcomeStyles } from "./welcome.styles";
import { WelcomeProps } from "./welcome.types";
import { useWelcome } from "./welcome.usecase";

export const Welcome: React.FunctionComponent<WelcomeProps> = (props) => {
  const state = useWelcome(props);
  useWelcomeStyles(state);

  return renderWelcome(state);
};

Welcome.displayName = "Welcome";
