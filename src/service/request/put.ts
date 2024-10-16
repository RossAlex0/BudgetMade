import { myAxios } from "../utils/instance";

export function putUser(id: number, salary: number) {
  return myAxios
    .put(`/users/${id}`, { salary })
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

export function putUserCategory(
  id: number,
  state: { id: string; value: string }[]
) {
  return myAxios
    .put(`/usercategory/${id}`, state)
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

export function putUserPassword(
  id: number,
  user: { current: string; password: string; check: string }
) {
  return myAxios
    .put(`/password/users/${id}`, user)
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}
