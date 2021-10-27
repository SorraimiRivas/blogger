import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

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

const styles = StyleSheet.create({});

export default ShowScreen;
