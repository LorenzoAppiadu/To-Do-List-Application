import InputBox from "@/components/InputBox";
import { Pressable, Text, View } from "react-native";

const NewTask = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 9, alignItems: "center", margin: 10 }}>
        <InputBox placeholder="Title" type="task" />
        <InputBox placeholder="Deadline" type="deadline" />
        <View>
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}>
            Notes
          </Text>
          <InputBox placeholder="Add notes" type="notes" />
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <Pressable>
          <Text>Add</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewTask;
