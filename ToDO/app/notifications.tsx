import { Text, View } from "react-native";

const Notifications = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ margin: 20, borderLeftWidth: 1 }}>
        <Text style={{ marginLeft: 15 }}>Lunch With Alex</Text>
        <Text style={{ marginLeft: 15 }}>Today at 12:00 PM</Text>
      </View>
      <View style={{ margin: 20, borderLeftWidth: 1 }}>
        <Text style={{ marginLeft: 15 }}>Lunch With Alex</Text>
        <Text style={{ marginLeft: 15 }}>Today at 12:00 PM</Text>
      </View>
    </View>
  );
};

export default Notifications;
