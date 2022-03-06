# Welcome

### Section 1

- `item` - This is an item

### Structure

```jsx
<slots.root></slots.root>
```

### Props

```ts
/**
 * Welcome Slots
 */
export type WelcomeSlots = {
  root: Slot<"div">;
};

/**
 * Welcome Commons
 */
export type WelcomeCommons = {
  text: String;
};

/**
 * Welcome Props
 */
export type WelcomeProps = ComponentProps<WelcomeSlots> & WelcomeCommons;

/**
 * State used for rendering Welcome
 */
export type WelcomeState = ComponentState<WelcomeSlots> & WelcomeCommons;

/**
 * Refs
 */
export interface Refs {
  firstRef: React.MutableRefObject<HTMLDivElement>;
}
```
