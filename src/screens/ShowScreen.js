import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text
        style={{
          marginBottom: 15,
          marginHorizontal: 15,
          fontSize: 18,
          fontWeight: "bold",
          top: 10,
        }}
      >
        {blogPost.title}
      </Text>
      <Text style={{ marginHorizontal: 15 }}>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <Feather
          style={styles.editIcon}
          raised
          name="edit"
          size={28}
          color="black"
          onPress={() =>
            navigation.navigate("Edit", { id: navigation.getParam("id") })
          }
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  editIcon: {
    marginRight: 10,
  },
});

export default ShowScreen;
