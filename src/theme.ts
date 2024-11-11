const mediaTag = "@media only screen and ";
export const mq = {
  // custom functions to easily create media queries
  customMin: (width: number) => `${mediaTag} (min-width: ${width}px)`,
  customMax: (width: number) => `${mediaTag} (max-width: ${width}px)`,
  customRange: (width: number, widthTwo?: number) =>
    `${mediaTag} (min-width: ${width}px) and (max-width: ${widthTwo}px)`,
};

// for reference
export const colors = {
  gray: "#C6D5D4",
  black: "#1B1F21",
  violet: "#716DA8",
  pink: "#EFB0C0",
  blue: "#81C3D7",
};
