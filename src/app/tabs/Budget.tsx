import { Text, View, StyleSheet } from "react-native";
import React from "react";
import PieChart from "react-native-pie-chart";

export default function Budget() {
  const salary = 10000;
  const expenses = [1500, 2000, 2500, 500];
  const totalDonut = salary - expenses.reduce((acc, sum) => acc + sum, 0);
  let series = [];
  let sliceColor = [];
  if (salary < expenses.reduce((acc, sum) => acc + sum, 0)) {
    series = [1];
    sliceColor = ["red"];
  } else {
    series = [...expenses, totalDonut + salary];
    sliceColor = ["#000000", "#ffb300", "#ff9100", "#ff6c00", "gray"];
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doughnut Chart</Text>
      <View style={styles.chartContainer}>
        <PieChart
          widthAndHeight={250}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.85}
          coverFill={"transparent"}
          style={styles.halfRing}
        />
        <Text style={styles.text}>{salary} €</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 80,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  chartContainer: {
    width: 250,
    height: 125,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  halfRing: {
    transform: [{ rotate: "-90deg" }],
    borderRadius: 240,
  },
  text: {
    fontFamily: "Regular",
    fontSize: 24,
    position: "absolute",
    top: 84,
  },
});
