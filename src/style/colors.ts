interface Colors {
  primary_color: string;
  background_color: string;
  white_color: string;
  gray_dark: string;
  gray_color: string;
  black_color: string;
  icon_color: string;
  font_color: string;
  gradient_color: string[];
}

let theme: string = "light";

export let colors: Colors;

if (theme === "dark") {
  colors = {
    primary_color: "#8516D1",
    background_color: "#000000",
    white_color: "#FFFFFF",
    black_color: "#000000",
    gray_dark: "#7C7C7C",
    gray_color: "#DCE4ED",
    icon_color: "#FFFFFF",
    font_color: "#FFFFFF",
    gradient_color: ["#7100DA", "#FF9597"],
  };
} else {
  colors = {
    primary_color: "#8516D1",
    background_color: "#FFFFFF",
    white_color: "#FFFFFF",
    black_color: "#000000",
    gray_dark: "#7C7C7C",
    gray_color: "#DCE4ED",
    icon_color: "#7C7C7C",
    font_color: "#000000",
    gradient_color: ["#7100DA", "#FF9597"],
  };
}
