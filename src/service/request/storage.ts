import * as SecureStore from "expo-secure-store";

const storageKeys = [
  "idBm",
  "nameBm",
  "emailBm",
  "themeBm",
  "salaryBm",
  "tokenBm",
];

const postDataStorage = async (data: {
  id: string;
  name: string;
  email: string;
  salary: string;
  theme: string;
  token: string;
}) => {
  try {
    await SecureStore.setItemAsync("tokenBm", `${data.token}`);
    await SecureStore.setItemAsync("idBm", `${data.id}`);
    await SecureStore.setItemAsync("emailBm", `${data.email}`);
    await SecureStore.setItemAsync("salaryBm", `${data.salary}`);
    await SecureStore.setItemAsync("themeBm", `${data.theme}`);
    await SecureStore.setItemAsync("nameBm", `${data.name}`);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const getDataStorage = async (): Promise<{
  id: string;
  name: string;
  email: string;
  salary: string | null;
  theme: string;
  token: string;
}> => {
  try {
    const name = (await SecureStore.getItemAsync("nameBm")) || "";
    const email = (await SecureStore.getItemAsync("emailBm")) || "";
    const salary = (await SecureStore.getItemAsync("salaryBm")) || "";
    const id = (await SecureStore.getItemAsync("idBm")) || "";
    const theme = (await SecureStore.getItemAsync("themeBm")) || "";
    const token = (await SecureStore.getItemAsync("tokenBm")) || "";
    return { id, name, email, salary, token, theme };
  } catch (error) {
    console.error(error);
    return { id: "", name: "", email: "", salary: "", token: "", theme: "" };
  }
};

const destroyDataStorage = async () => {
  try {
    storageKeys.map(async (key) => await SecureStore.deleteItemAsync(key));
  } catch (error) {
    console.error("Error deleting items:", error);
  }
};
export { postDataStorage, getDataStorage, destroyDataStorage };
