import { myAxios } from "../utils/instance";

export function putUser(id: string, salary: number) {
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
  id: string,
  user: { current: string; password: string; check: string }
) {
  return myAxios
    .put(`/password/users/${id}`, user)
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

export function putUserProfil(
  id: number,
  user: { name: string; email: string }
) {
  return myAxios
    .put(`/profil/users/${id}`, user)
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}
