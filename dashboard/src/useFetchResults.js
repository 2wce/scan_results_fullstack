import { useEffect, useState } from 'react'

export const useFetchResults = (parameter, method = 'GET') => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    const baseUrl = 'http://0.0.0.0:4000/api/results/'

    const apiUrl = parameter && parameter.length > 0 ?
      `${baseUrl}${parameter}` :
      `${baseUrl}`

    fetch(apiUrl, { method })
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        if (json) {
            setResults(json)
        } else {
            setResults([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })

  // This is important. We pass the new search parameter into
  // the empty array we had before. This means, the effect
  // will run again if this parameter changes
  }, [parameter, method])

  return { results, loading, error }
}