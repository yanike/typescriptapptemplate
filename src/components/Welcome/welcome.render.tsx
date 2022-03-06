import React from "react";
import { WelcomeSlots, WelcomeState } from "./welcome.types";
import { getSlots } from "@fluentui/react-utilities";

/**
 * Renders a Welcome component by passing the state and defined props to the appropriate slots.
 */
export const renderWelcome: React.FunctionComponent<WelcomeState> = (state) => {
  const { slots, slotProps } = getSlots<WelcomeSlots>(state);
  const { text } = state;

  return <slots.root {...slotProps.root}>{text}</slots.root>;
};
