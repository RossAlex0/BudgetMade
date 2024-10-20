import { Pressable, Text, View } from "react-native";
import React, { forwardRef } from "react";

import { ButtonInterface } from "../service/type/ButtonType";
import { buttonStyle } from "../style/component/button";

import { colors } from "../style/colors";

const Button = forwardRef<View, ButtonInterface>(function Button(
  { text, theme, click },
  ref
) {
  const colorStyle =
    theme === "purple" ? colors.primary_color : colors.white_color;

  const textStyle =
    theme === "purple" ? colors.white_color : colors.black_color;

  const borderStyle = theme === "white" && {
    borderWidth: 1,
    borderColor: colors.gray_color,
  };

  return (
    <Pressable
      onPress={click}
      ref={ref}
      style={[
        buttonStyle.pressable,
        { backgroundColor: colorStyle },
        borderStyle,
      ]}
    >
      <Text style={[buttonStyle.text, { color: textStyle }]}>{text}</Text>
    </Pressable>
  );
});

export default Button;
