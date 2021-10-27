import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPosts } = useContext(Context);

  return (
    <View>
      <Text style={styles.Label}>Blog Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.Input}
      />
      <Text style={styles.Label}>Blog Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.Input}
      />
      <Button title="Add Post" onPress={() => addBlogPosts(title, content)} />
    </View>
  );
};

const styles = StyleSheet.create({
  Input: {
    borderWidth: 1,
    borderColor: "gray",
    marginHorizontal: 10,
    margin: 10,
  },
  Label: {
    left: 10,
    marginBottom: 5,
  },
});

export default CreateScreen;
