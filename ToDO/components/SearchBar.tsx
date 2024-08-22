import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type SearchBarType = {};
const SearchBar = ({}: SearchBarType) => {
  return (
    <View style={searchbarStyle.inputBox}>
      <Text
        style={{
          flex: 1,
          margin: 10,
          color: "#ADC3CE",
          justifyContent: "center",
          alignItems: "center",
          textAlignVertical: "center",
        }}>
        Search Icon
      </Text>
      <TextInput
        placeholder="Search Tasks"
        placeholderTextColor={"#3F7281"}
        style={{ flex: 3, width: "auto", color: "#ADC3CE" }}></TextInput>
    </View>
  );
};

const searchbarStyle = StyleSheet.create({
  inputBox: {
    flex: 1,
    flexDirection: "row",
    height: 30,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ADC3CE",
  },
});

export default SearchBar;
