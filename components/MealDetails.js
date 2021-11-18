import React from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const ListItem = (props) => {
  return (
    <View style={mmstyle.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetails = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Image source={{ uri: props.imageuri }} style={mmstyle.image} />

        <View style={mmstyle.details}>
          <Text>{props.duration}minutes</Text>
          <Text>{props.complexity.toUpperCase()}</Text>
          <Text>{props.affordability.toUpperCase()}</Text>
        </View>

        <Text style={mmstyle.title}>Ingredients</Text>
        {props.ingredients.map((ingredient) => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={mmstyle.title}>Steps</Text>
        {props.steps.map((step) => (
          <ListItem key={step}>{step}</ListItem>
        ))}

        {/* <View>
        <Text>{props.title}</Text>
        <Text>{props.steps}</Text>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MealDetails;

const mmstyle = StyleSheet.create({
  title: {
    fontFamily: "my-open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  steps: {},
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  image: {
    width: "100%",
    height: 200,
  },
  listItem: {
    marginVertical: 1,
    marginHorizontal: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 9,
  },
});
