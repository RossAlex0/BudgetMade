import * as SecureStore from "expo-secure-store";

const storageKeys = ["id", "name", "mail", "city", "token"];

const postDataStorage = async (
  id: string,
  name: string,
  mail: string,
  city: string,
  token: string
) => {
  try {
    await SecureStore.setItemAsync("token", token);
    await SecureStore.setItemAsync("id", id);
    await SecureStore.setItemAsync("mail", mail);
    await SecureStore.setItemAsync("city", city);
    await SecureStore.setItemAsync("name", name);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const getDataStorage = async (): Promise<{
  id: string;
  name: string;
  mail: string;
  city: string;
  token: string;
}> => {
  try {
    const name = (await SecureStore.getItemAsync("name")) || "";
    const mail = (await SecureStore.getItemAsync("mail")) || "";
    const city = (await SecureStore.getItemAsync("city")) || "";
    const id = (await SecureStore.getItemAsync("id")) || "";
    const token = (await SecureStore.getItemAsync("token")) || "";

    return { id: id, name: name, mail: mail, city: city, token: token };
  } catch (error) {
    console.error(error);
    return { id: "", name: "", mail: "", city: "", token: "" };
  }
};

const getPrivateStorage = async (): Promise<{
  id: string | null;
  token: string | null;
}> => {
  try {
    const id = (await SecureStore.getItemAsync("id")) || null;
    const token = (await SecureStore.getItemAsync("token")) || null;

    return { id, token };
  } catch (error) {
    console.error(error);
    return { id: null, token: null };
  }
};

const destroyDataStorage = async () => {
  try {
    storageKeys.map(async (key) => await SecureStore.deleteItemAsync(key));
  } catch (error) {
    console.error("Error deleting items:", error);
  }
};
export {
  postDataStorage,
  getDataStorage,
  getPrivateStorage,
  destroyDataStorage,
};
