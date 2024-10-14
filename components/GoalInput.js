import { StyleSheet, View, Text } from "react-native";

import React from "react";

function GoalInput(props) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

export default GoalInput

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
      },
    
      goalText: {
        color: "white",
      },
})