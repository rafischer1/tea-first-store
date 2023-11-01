export type ColorName =
  | "red"
  | "blue"
  | "white"
  | "black"
  | "orange"
  | "green"
  | "purple"
  | "teal"
  | "pink"
  | "brown";

export const colorNameMap: { [key: string]: string } = {
  red: "🔴",
  blue: "🔵",
  black: "⚫️",
  white: "⚪️",
  orange: "🔶",
  green: "❇️",
  purple: "💜",
  teal: "👗",
  brown: "📦",
  pink: "🦩",
};

export const colorsList: ColorName[] = [
  "red",
  "blue",
  "white",
  "black",
  "orange",
  "green",
  "purple",
  "teal",
  "brown",
  "pink",
];
