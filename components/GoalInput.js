import { StyleSheet } from "react-native";

import React from "react";

function GoalInput() {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
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