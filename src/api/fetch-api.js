export async function fetchAPI ({ resource, method, fields }) {
  const validatedFields = fields !== null 
    ? { body : JSON.stringify(fields) }
    : {}
  const options = {
    method,
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*'
    },
   validatedFields
  }

  try {
    const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}${resource}`, options)

    if (!res.ok) {
      const errorData = await res.json()
      console.error('Server error:', errorData.error)
      return errorData
    }

    return res.json()
  } catch (error) {
    console.error('Client error:', error)
    return error
  }
}
