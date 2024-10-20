import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { UserContext } from "@/src/service/context/UserContext";
import { getAllExpenseByUser } from "@/src/service/request/get";
import { ExpenseUserInterface } from "@/src/service/type/apiType/expenseType";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { BudgetDetailsStyle } from "@/src/style/tabs/budget";

export default function BudgetDetails() {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const [expensesData, setExpensesData] = useState<
    ExpenseUserInterface[] | undefined
  >();

  useEffect(() => {
    if (userLog) {
      getAllExpenseByUser(userLog?.id, setExpensesData);
    }
  }, []);

  const groupByDate = (expenses: ExpenseUserInterface[]) => {
    return expenses.reduce(
      (groupedExpenses: any, expense: ExpenseUserInterface) => {
        const date = new Date(expense.date).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        });

        if (!groupedExpenses[date]) {
          groupedExpenses[date] = [];
        }

        groupedExpenses[date].push(expense);
        return groupedExpenses;
      },
      {}
    );
  };

  const groupedExpenses = expensesData && groupByDate(expensesData);
  return (
    expensesData && (
      <>
        {Object.keys(groupedExpenses).map((date) => (
          <View key={date}>
            <View style={BudgetDetailsStyle.date}>
              <Text style={BudgetDetailsStyle.date_text}>{date}</Text>
            </View>
            {groupedExpenses[date].map((expense: any) => (
              <View key={expense.id} style={BudgetDetailsStyle.detail}>
                <View style={BudgetDetailsStyle.detail_left}>
                  <View
                    style={[
                      BudgetDetailsStyle.detail_left_icon,
                      { backgroundColor: expense.colorbg },
                    ]}
                  >
                    <Icon
                      name={expense.category_icon}
                      size={20}
                      color={expense.color}
                    />
                  </View>
                  <View style={BudgetDetailsStyle.detail_left_text}>
                    <Text style={BudgetDetailsStyle.left_text_title}>
                      {expense.description}
                    </Text>
                    <Text style={BudgetDetailsStyle.left_text_text}>
                      {expense.category_name && expense.category_name}
                    </Text>
                  </View>
                </View>
                <Text style={BudgetDetailsStyle.detail_right}>
                  - {expense.amount} €
                </Text>
              </View>
            ))}
          </View>
        ))}
      </>
    )
  );
}
