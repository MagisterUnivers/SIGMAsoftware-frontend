export async function fetchAPI ({
  resource = process.env.REACT_APP_API_ENDPOINT,
  method,
  fields
}) {
  const options = {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*'
    },
    body: JSON.stringify(fields)
  }

  try {
    const res = await fetch(resource, options)

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
