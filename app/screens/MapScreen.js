import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { Text, SafeAreaView } from "react-native";

import { styles } from "../assets/styling";

function MapScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Positive Test Cases Near Me</Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="TESTED POSITIVE: July 17th"
          description="Visited: July 14th, 12:04pm"
        />

        <Marker
          coordinate={{ latitude: 37.79825, longitude: -122.4334 }}
          title="TESTED POSITIVE: July 14th"
          description="Visited: July 11th, 11:36am"
        />

        <Marker
          coordinate={{ latitude: 37.79835, longitude: -122.4344 }}
          title="TESTED POSITIVE: July 16th"
          description="Visited: July 15th, 2:22pm"
        />

        <Marker
          coordinate={{ latitude: 37.79635, longitude: -122.4244 }}
          title="TESTED POSITIVE: July 12th"
          description="Visited: July 18th, 6:19pm"
        />
      </MapView>
    </SafeAreaView>
  );
}

export default MapScreen;
