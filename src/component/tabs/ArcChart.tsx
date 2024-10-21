import { Text, View, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import PieChart from "react-native-pie-chart";

import { CategoriesJoinInterface } from "@/src/service/type/apiType/userCatJoinCat";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { UserContext } from "@/src/service/context/UserContext";
import { postExpenseBycategory } from "@/src/service/request/post";

import { colors } from "@/src/style/colors";
import { Chartstyle } from "@/src/style/tabs/home";

export default function ArcChart({
  categories,
}: {
  categories: CategoriesJoinInterface[];
}) {
  const [series, setSeries] = useState<number[]>();
  const [sliceColor, setSliceColor] = useState<string[]>();
  const [expense, setExpense] = useState(0);
  const { userLog } = useContext(UserContext) as UserContextInterface;

  const chartValues = async () => {
    if (userLog) {
      const salary: number =
        typeof userLog.salary === "number"
          ? userLog.salary
          : parseInt(userLog.salary as string) || 1;

      const expensesPromises = categories.map(async (category) => {
        const response = await postExpenseBycategory(
          userLog.id,
          category.category_id
        );

        return parseInt(response[0].total_amount) || 1;
      });
      const expenses = await Promise.all(expensesPromises);

      const totalDonut = salary - expenses.reduce((acc, sum) => acc + sum, 0);
      setExpense(expenses.reduce((acc, sum) => acc + sum, 0));
      if (salary < expenses.reduce((acc, sum) => acc + sum, 0)) {
        setSeries([1]);
        setSliceColor(["red"]);
      } else {
        setSeries([...expenses, totalDonut + salary]);
        const colorsCtaegories = categories.map((category) => category.color);
        colorsCtaegories.push(`${colors.gray_color}`);
        setSliceColor(colorsCtaegories);
      }
    }
  };

  useEffect(() => {
    chartValues();
  }, []);

  return (
    series &&
    sliceColor && (
      <View style={Chartstyle.container}>
        <View style={Chartstyle.chartContainer}>
          <PieChart
            widthAndHeight={250}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.85}
            coverFill={"transparent"}
            style={Chartstyle.halfRing}
          />
          <View style={Chartstyle.element_budget}>
            <Text style={Chartstyle.expense}>{expense && expense} €</Text>
            <Text style={Chartstyle.text}>{userLog?.salary} €</Text>
          </View>
        </View>
      </View>
    )
  );
}
