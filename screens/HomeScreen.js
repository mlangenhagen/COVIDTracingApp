import React from "react";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { styles } from "../assets/styling";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={[styles.homeScreenButton, { backgroundColor: "#DDA0DD" }]}
        onPress={() => navigation.navigate("Maps")}
      >
        <Text style={styles.buttonText}>Record how I'm feeling</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.homeScreenButton, { backgroundColor: "#AFEEEE" }]}
        onPress={() => navigation.navigate("Health")}
      >
        <Text style={styles.buttonText}>Record my location</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
