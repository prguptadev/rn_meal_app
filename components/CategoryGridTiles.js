import React from "react";
import {
  Platform,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
} from "react-native";

const CategoryGridTiles = (cgtprops) => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android") TouchableCmp = TouchableNativeFeedback;

  return (
    <View style={cstyles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={cgtprops.onSelect}>
        <View
          style={{
            ...cstyles.containers,
            ...{ backgroundColor: cgtprops.color },
          }}
        >
          <Text style={cstyles.title} numberOfLines={2}>
            {cgtprops.title}
          </Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const cstyles = StyleSheet.create({
  title: {
    //fontFamily: "my-open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 7,
  },
  containers: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,

    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default CategoryGridTiles;
