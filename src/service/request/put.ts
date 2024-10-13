import { myAxios } from "../utils/instance";

export function putUser(id: number, salary: number) {
  return myAxios
    .put(`/users/${id}`, { salary })
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

export function putUserCategory(id: number, cap: string, category_id: number) {
  return myAxios
    .put(`/usercategory/${id}`, { cap, category_id })
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}
