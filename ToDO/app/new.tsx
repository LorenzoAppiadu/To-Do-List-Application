import InputBox from "@/components/InputBox";
import { Link } from "expo-router";
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
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={{
            flex: 1,
            margin: 10,
            backgroundColor: "blue",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}>
          <Text style={{ color: "#fff" }}>Add</Text>
        </Pressable>
        <Link href="/" asChild>
          <Pressable
            style={{
              flex: 1,
              margin: 10,
              backgroundColor: "#ADC3CE",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
            }}>
            <Text style={{ color: "white" }}>Cancel</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default NewTask;
