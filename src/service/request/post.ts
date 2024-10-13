import { myAxios } from "../utils/instance";

import { UserInterface } from "../type/apiType/userType";

export function postUser(user: UserInterface, setter: (state: number) => void) {
  myAxios
    .post("/users", user)
    .then((response) => setter(response.data.insertId))
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
