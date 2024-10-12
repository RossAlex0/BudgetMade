import { myAxios } from "../utils/instance";

export function getAllCategory(setter: (state: [] | undefined) => void) {
  myAxios
    .get("/categories")
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}
