import { postExpenseBycategory } from "../request/post";

export default async function expensePercent(
  user_id: string | number,
  category_id: string | number,
  cap: number
): Promise<number> {
  const response = await postExpenseBycategory(user_id, category_id);
  const expense = response[0].total_amount;
  if (expense) {
    const percentageExpense = (Math.floor(expense) / cap) * 100;
    return Math.floor(percentageExpense);
  } else {
    return 0;
  }
}
