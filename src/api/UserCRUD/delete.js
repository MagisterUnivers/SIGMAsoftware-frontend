import { fetchAPI } from "../fetch-api"

 export async function DeleteData (id) {
  await fetchAPI({ resource: `/${id}`, method: 'DELETE', fields: null })
}
