import { myAxios } from "../utils/instance";

export function postCategoryQuery(
  setter: (state: [] | undefined) => void,
  category: string
) {
  myAxios
    .post("/filter/categories", { category })
    .then((response) => setter(response.data))
    .catch((error) => console.error(error.message));
}
