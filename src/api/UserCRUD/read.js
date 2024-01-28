import { fetchAPI } from "../fetch-api"

 export async function ReadData (id) {
   const result = await fetchAPI({ resource: `/${id}`, method: 'GET', fields: null })
   return result
}
