import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type InputBoxType = {
  placeholder: string;
  type: "task" | "deadline" | "notes";
};
const InputBox = ({ placeholder, type }: InputBoxType) => {
  return (
    <>
      {type == "notes" ? (
        <View
          style={[
            searchbarStyle.inputBox,
            { height: type == "notes" ? 100 : 0 },
          ]}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#3F7281"}
            style={{
              margin: 10,
              flex: 1,
              color: "#3F7281",
              textAlignVertical: "top",
            }}
          />
        </View>
      ) : (
        <View style={searchbarStyle.inputBox}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#3F7281"}
            style={{ margin: 10, flex: 1, color: "#3F7281" }}
          />
          {type == "deadline" ? (
            <Pressable style={{ alignSelf: "center" }}>
              <Text
                style={{
                  color: "#3F7281",
                  margin: 10,
                  textAlignVertical: "center",
                }}>
                Calendar
              </Text>
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      )}
    </>
  );
};

const searchbarStyle = StyleSheet.create({
  inputBox: {
    flexDirection: "row",
    // flex: 1,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#ADC3CE",
    margin: 10,
  },
});

export default InputBox;
