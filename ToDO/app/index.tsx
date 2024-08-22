import SearchBar from "@/components/SearchBar";
import TaskBox from "@/components/TaskBox";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";

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
        <Link
          href={"/new"}
          style={[
            {
              fontSize: 40,
              color: "white",
              textAlign: "center",
            },
            HomeStyles.addButtonStyle,
          ]}>
          +
        </Link>
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
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  tasksStyle: {
    flex: 8,
    alignItems: "center",
    marginLeft: 20,
  },
  addStyle: {
    flex: 1,
    alignSelf: "flex-end",
    width: 50,
    marginRight: 20,
    marginBottom: 20,
  },
  addButtonStyle: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3F7281",
    borderRadius: 10,
  },
});

export default HomeScreen;
