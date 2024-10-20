export interface ExpenseUserInterface {
  id: number;
  user_id: number;
  category_id: number;
  amount: number;
  description: string;
  date: Date;
  category_name: string;
  category_icon: string;
  color: string;
  colorbg: string;
}
