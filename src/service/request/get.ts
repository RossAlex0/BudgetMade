import { UserCatInterface } from "../type/apiType/userCategoryType";
import { CategoriesJoinInterface } from "../type/apiType/userCatJoinCat";
import { UserLog } from "../type/contextType/userType";
import { myAxios } from "../utils/instance";

export function getUserById(id: number, setter: (state: UserLog) => void) {
  return myAxios
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

export function getUserCategoryById(
  id: number,
  state: UserCatInterface[] | undefined,
  setter: (state: UserCatInterface[]) => void
) {
  myAxios
    .get(`/usercategory/${id}`)
    .then((res) => (state ? setter([...state, res.data]) : setter(res.data)))
    .catch((err) => console.error(err));
}

export function getUserJoinCategoryById(
  id: string | number,
  setter: (state: CategoriesJoinInterface[]) => void
) {
  myAxios
    .get(`/usercategoryall/${id.toString()}`)
    .then((res) => setter(res.data))
    .catch((err) => console.error(err));
}
