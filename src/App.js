import React, { useCallback, useState, useRef } from 'react'
import usePhotoSearch from "./hooks/usePhotoSearch";


function App() {

    const [query, setQuery] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const { photos, error, hasMore, loading } = usePhotoSearch(query, pageNumber)

    const observer = useRef();

    const lastImgElement = useCallback(node => {
       if (loading) return
       if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
           if(entries[0].isIntersecting && hasMore) {
               setPageNumber(prevPageNumber => prevPageNumber + 1)
           }
        })
        if (node) observer.current.observe(node)
        console.log(node)
    }, [loading, hasMore])

    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

  return (
    <div>

        <input onChange={handleSearch} type="text"/>
        {/*<button onSubmit={() => handleSearch()}>Fetch Photos</button>*/}

        {photos.map((photo, index) => (
            (photos.length === index + 1) ? <img ref={lastImgElement} key={photo.id} src={photo.urls.full} alt={photo.alt_description} style={{ maxWidth: '100%'}}/>
            : <img key={photo.id} src={photo.urls.full} alt={photo.alt_description} style={{ maxWidth: '100%'}}/>
        ))}

        <div>{loading && 'Loading'}</div>
        <div>{error && 'Error'}</div>

    </div>
  );
}

export default App;
