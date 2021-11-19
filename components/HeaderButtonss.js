import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import MyColors from "../constants/MyColors";

const HeaderButtonss = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={MyColors.favIconColor}
    />
  );
};

export default HeaderButtonss;
