import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const go = () => {
    router.push("/(tabs)/page1");
  };

  return (
    <View>
      <text style={s.title}>Inicial</text>
      <TouchableOpacity onPress={go}>
        <Text>Ir para Tabs</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
