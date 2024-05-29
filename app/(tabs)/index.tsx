import { useCounter, useSecondStore } from "@/zu";
import { Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const counter = useCounter((state) => state);
  const height = useSecondStore((state) => state);
  console.log(height);

  return (
    <View style={{ flex: 1, marginVertical: 100 }}>
      <Text>{counter.counter}</Text>
      <Text
        onPress={() => {
          counter.fetchHeightFromSecondStore();
          //height.increaseHeight();
        }}
      >
        increase
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
