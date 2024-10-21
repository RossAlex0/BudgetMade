import { myAxios } from "../utils/instance";

import { UserInterface } from "../type/apiType/userType";
import { postDataStorage } from "./storage";

// ---** USER **--- \\
export function postUser(user: UserInterface) {
  return myAxios
    .post("/users", user)
    .then((response) => console.info(response.data.insertId))
    .catch((error) => console.error(error.message));
}

// ---** CATEGORY **--- \\
export function postCategoryQuery(
  setter: (state: [] | undefined) => void,
  category: string
) {
  myAxios
    .post("/filter/categories", { category })
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}

// ---** USER_CATEGORY **--- \\
export function postUserCategory(
  user_id: string,
  category_id: number,
  cap?: number
) {
  const post = cap ? { user_id, category_id, cap } : { user_id, category_id };
  return myAxios
    .post("/usercategory", post)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

// ---** EXPENSE **--- \\

export function postExpenseBycategory(
  id: string | number,
  category_id: string | number
) {
  return myAxios
    .post(`/category/expenses/${id}`, { category_id })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
//-----------------\\
// ---** LOGIN **--- \\

export function postLogin(user: { email: string; password: string }) {
  return myAxios
    .post("/login", user)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}

export function postSignToken(email: string) {
  return myAxios
    .post("/sign", { email })
    .then((res) => postDataStorage(res.data))
    .catch((err) => console.error(err));
}
