import { StyleSheet, Text } from "react-native";

export default function TabTwoScreen() {
  return (
    <>
      <Text style={s.title}>Lista de humanos</Text>
    </>
  );
}
const s = StyleSheet.create({
  title: {
    fontSize: 32,
  },
});
