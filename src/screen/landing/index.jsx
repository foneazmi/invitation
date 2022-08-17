import { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { height, width } from "../../utils";
import LottieView from "lottie-react-native";
console.log("width height", width, height);
export const Landing = () => {
  const lottieRef = useRef();

  useEffect(() => {
    lottieRef.current.play();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 300, width: 300 }}>
        <LottieView
          ref={lottieRef}
          loop
          source={require("../../../assets/lottie/envelope.json")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
