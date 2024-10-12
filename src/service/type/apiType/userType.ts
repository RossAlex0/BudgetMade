export interface UserInterface {
  name: string;
  email: string;
  password: string;
  theme?: "light" | "dark";
  salary?: number;
}
