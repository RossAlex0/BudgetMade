import { UserLog } from "../type/contextType/userType";
import { myAxios } from "../utils/instance";

export function getUserById(id: number, setter: (state: UserLog) => void) {
  myAxios
    .get(`/users/${id}`)
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}

export function getAllCategory(setter: (state: [] | undefined) => void) {
  myAxios
    .get("/categories")
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}
