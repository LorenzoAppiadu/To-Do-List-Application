import InputBox from "@/components/InputBox";
import { Text, View } from "react-native";

const EditTask = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, alignItems: "center", margin: 10 }}>
        <InputBox placeholder="Title" type="task" />
        <InputBox placeholder="Deadline" type="deadline" />
      </View>
    </View>
  );
};

export default EditTask;
