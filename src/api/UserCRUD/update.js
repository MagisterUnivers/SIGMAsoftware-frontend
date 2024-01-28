import { fetchAPI } from "../fetch-api"

 export async function UpdateData (id, data) {
   const result = await fetchAPI({ resource: `/${id}`, method: 'PUT', fields: data })
   return result
}
