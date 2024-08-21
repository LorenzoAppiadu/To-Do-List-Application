import { StyleSheet, Text, View } from "react-native";

type TaskType = {
  task: string;
  date: string;
};

const TaskBox = ({ task, date }: TaskType) => {
  return (
    <View
      style={{
        flexDirection: "row",
        // backgroundColor: "red",
        marginTop: 10,
        height: 40,
        alignItems: "flex-start",
      }}>
      <View style={TaskBoxStyle.checkBoxStyle}>
        <Text style={{ justifyContent: "center" }}>Check</Text>
      </View>
      <View style={{ flex: 5, marginLeft: 10 }}>
        <Text style={TaskBoxStyle.taskTextStyle}>{task}</Text>
        <Text style={TaskBoxStyle.dateTextStyle}>{date}</Text>
      </View>
    </View>
  );
};

const TaskBoxStyle = StyleSheet.create({
  checkBoxStyle: { flex: 1, justifyContent: "center" },
  taskTextStyle: { fontSize: 15 },
  dateTextStyle: { fontSize: 13, color: "#3F7281" },
});

export default TaskBox;
