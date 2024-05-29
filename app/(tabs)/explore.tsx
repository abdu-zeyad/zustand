import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Text, View } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import useCounter from "@/zu";

export default function TabTwoScreen() {
  const counter = useCounter((state) => state);

  return (
    <View style={{ flex: 1, marginVertical: 100 }}>
      <Text>{counter.counter}</Text>
      <Text
        onPress={() => {
          counter.resetCounter();
        }}
      >
        reset
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
