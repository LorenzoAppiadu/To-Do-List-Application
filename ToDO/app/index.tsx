import SearchBar from "@/components/SearchBar";
import TaskBox from "@/components/TaskBox";
import { View, Text, StyleSheet } from "react-native";

const tasks = [
  {
    task: "Meet with Charlie",
    deadline: "Today at 10:00AM",
  },
  {
    task: "Meet with Charlie",
    deadline: "Today at 10:00AM",
  },
  {
    task: "Meet with Charlie",
    deadline: "Today at 10:00AM",
  },
  {
    task: "Meet with Charlie",
    deadline: "Today at 10:00AM",
  },
];
const HomeScreen = () => {
  return (
    <View style={HomeStyles.defaultStyle}>
      <View style={HomeStyles.headerStyle}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>All Tasks</Text>
      </View>
      <View style={HomeStyles.searchStyle}>
        <SearchBar />
      </View>
      <View style={HomeStyles.tasksStyle}>
        {tasks.map((taskItem, index) => {
          return (
            <TaskBox
              key={index}
              task={taskItem.task}
              date={taskItem.deadline}
            />
          );
        })}
      </View>
      <View style={HomeStyles.addStyle}>
        <Text style={{ fontSize: 20 }}>+</Text>
      </View>
    </View>
  );
};

const HomeStyles = StyleSheet.create({
  defaultStyle: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
  headerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchStyle: {
    flex: 0.7,
    justifyContent: "center",
    alignItems: "center",
    height: 20,
  },
  tasksStyle: {
    flex: 8,
    alignItems: "center",
    margin: 20,
  },
  addStyle: {
    flex: 1,
    backgroundColor: "#3F7281",
    alignSelf: "flex-end",
    width: 50,
  },
});

export default HomeScreen;
