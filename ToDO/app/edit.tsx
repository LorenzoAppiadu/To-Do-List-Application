import InputBox from "@/components/InputBox";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type EditType = {
  title: string;
  notes: string;
  deadline: string;
  urgency: "high" | "medium" | "low";
};
const EditTask = ({}: EditType) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 9, alignItems: "center", margin: 10 }}>
        <InputBox placeholder="Title" type="task" />
        <View>
          <Text style={[editStyle.heading, { marginLeft: 20 }]}>Notes</Text>
          <InputBox placeholder="Add notes" type="notes" />
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={editStyle.heading}>List</Text>
          <Text style={{ margin: 10 }}>I am not sure yet</Text>
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={editStyle.heading}>Remind me on a day</Text>
          <Text style={{ margin: 10 }}>Change reminder date</Text>
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <Text style={editStyle.heading}>Urgency</Text>
          <Text style={{ margin: 10 }}>Very Urgent</Text>
        </View>
      </View>

      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Link href="/notifications" asChild>
          <Pressable style={editStyle.saveButton}>
            <Text style={{ color: "#fff" }}>Save</Text>
          </Pressable>
        </Link>
        <Link href="/" asChild>
          <Pressable style={editStyle.cancelButton}>
            <Text style={{ color: "white" }}>Delete</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

export default EditTask;

const editStyle = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "left",
  },
  saveButton: {
    flex: 1,
    margin: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  cancelButton: {
    flex: 1,
    margin: 10,
    backgroundColor: "#ADC3CE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
