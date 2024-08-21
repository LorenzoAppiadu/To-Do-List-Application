import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type SearchBarType = {};
const SearchBar = ({}: SearchBarType) => {
  return (
    <View style={searchbarStyle.inputBox}>
      <Text
        style={{
          flex: 1,
          margin: 10,
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
        }}>
        Search Icon
      </Text>
      <TextInput style={{ flex: 3, width: "auto", color: "white" }}>
        Search Tasks
      </TextInput>
    </View>
  );
};

const searchbarStyle = StyleSheet.create({
  inputBox: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "#3F7281",
  },
});

export default SearchBar;
