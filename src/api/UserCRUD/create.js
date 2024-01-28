import { fetchAPI } from "../fetch-api"

 export async function CreateData (data) {
   const result = await fetchAPI({ resource: `/`, method: 'POST', fields: data })
   return result
}
