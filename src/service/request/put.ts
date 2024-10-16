import { myAxios } from "../utils/instance";

export function putUser(id: number, salary: number) {
  return myAxios
    .put(`/users/${id}`, { salary })
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

export function putUserCategory(id: number, state: test[]) {
  return myAxios
    .put(`/usercategory/${id}`, state)
    .then((response) => response.status)
    .catch((error) => console.error(error.message));
}

interface test {
  id: string;
  value: string;
}
