import clsx from "clsx";

export const reviewTest = "v3";

export function reviewLabel(active: boolean) {
  return clsx("review", active && "review-active");
}

export const reviewNote = "Kelor acceptance test";
