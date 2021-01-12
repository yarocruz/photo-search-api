import {useEffect, useState} from 'react'

export default function usePhotoSearch(query, pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [photos, setPhotos] = useState([])
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
        setPhotos([])
    }, [query])

    useEffect(() => {
        setLoading(true)
        setError(false)
        const controller = new AbortController()
        const signal = controller.signal
        const apiKey = 'BJD0Ft5i5Qwk6bmbM5zaeFqR3c8uNVz0DZRBxojk4fo'
        const apiUrl = `https://api.unsplash.com/search/photos/?client_id`

        fetch(`${apiUrl}=${apiKey}&page=${pageNumber}&content_filter=high&query=${query}`,
            {
                method: 'get',
                signal: signal,
            })
            .then(async response => {
                const data = await response.json()
                setPhotos(prevPhotos => {
                    return [...prevPhotos, ...data.results]
                })
                setHasMore( data.results.length > 0)
                console.log(data.results.length)
                setLoading(false)
                if (response.ok) {
                    console.log(data)
                } else {
                    return Promise.reject(data)
                }
            })
            .catch(err => {
                if(signal.aborted) return
                setError(true)
                console.log(err)
            })
        return () => controller.abort()

    }, [query, pageNumber])
    return { loading, error, photos, hasMore }
}