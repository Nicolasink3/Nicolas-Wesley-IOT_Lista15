import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 8,
          borderTopColor: "#0a3b60",
          height: 70,
          paddingTop: 5,
          shadowColor: "#2065db85",
          shadowOffset: { width: 0, height: -10 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name="page1"
        options={{
          title: "Lista umidade",
          headerShown: false,
          tabBarIcon: () => (
            <Image style={s.icontab} source={require("@/assets/agua.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="page2"
        options={{
          title: "Lista Calor",
          headerShown: false,
          tabBarIcon: () => (
            <Image style={s.icontab} source={require("@/assets/fogo.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="page3"
        options={{
          title: "Lista Humano",
          headerShown: false,
          tabBarIcon: () => (
            <Image style={s.icontab} source={require("@/assets/humano.png")} />
          ),
        }}
      />
    </Tabs>
  );
}

const s = StyleSheet.create({
  icontab: {
    width: 30,
    height: 30,
  },
});
