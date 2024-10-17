import { myAxios } from "../utils/instance";

import { UserInterface } from "../type/apiType/userType";
import { postDataStorage } from "./storage";

export function postUser(user: UserInterface) {
  return myAxios
    .post("/users", user)
    .then((response) => console.info(response.data.insertId))
    .catch((error) => console.error(error.message));
}

export function postCategoryQuery(
  setter: (state: [] | undefined) => void,
  category: string
) {
  myAxios
    .post("/filter/categories", { category })
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}

export function postUserCategory(user_id: number, category_id: number) {
  return myAxios
    .post("/usercategory", { user_id, category_id })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function postLogin(user: { email: string; password: string }) {
  return myAxios
    .post("/login", user)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function postSignToken(email: string) {
  return myAxios
    .post("/sign", email)
    .then((res) => postDataStorage(res.data))
    .catch((err) => console.error(err));
}
