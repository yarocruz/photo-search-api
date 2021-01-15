import React, { useCallback, useState, useRef} from 'react'
import usePhotoSearch from "./hooks/usePhotoSearch";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function App() {
    const [query, setQuery] = useState('')
    const [search, setSearch] = useState('')
    const [pageNumber, setPageNumber] = useState(1)

    const { photos, error, hasMore, loading } = usePhotoSearch(query, pageNumber)

    const observer = useRef();

    const lastImgElementRef = useCallback(node => {
       if (loading) return
       if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
           if(entries[0].isIntersecting && hasMore) {
               console.log('Visible')
               setPageNumber(prevPageNumber =>  prevPageNumber + 1)
           } else {
               console.log('not visible')
           }
        }, {rootMargin: '-300px'})
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    function handleSearchSubmit(e) {
        e.preventDefault()
        setPageNumber(1)
        setQuery(search)
        setSearch('')
    }

    function handleSearch(e) {
        setSearch(e.target.value)
    }

  return (
    <div>
        <div className="form-wrap">
            <form className="form" onSubmit={handleSearchSubmit}>
                <input
                    className="input-search"
                    value={search}
                    onChange={handleSearch}
                    type="text"
                    placeholder="Search for a Photo"
                />
                <button className="search-button" type="submit">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {query ? <p>{`Search results for "${query}"`}</p> : <p>Please enter a search term</p>}
        </div>
            {photos && photos.map((photo, index) => {
                if (photos.length === index + 1) {
                    return <img ref={lastImgElementRef} key={photo.id} src={photo.urls.full} alt={photo.alt_description}
                                style={{maxWidth: '100%', minHeight: '50px'}}/>
                } else {
                    return <img key={photo.id} src={photo.urls.full} alt={photo.alt_description} style={{maxWidth: '100%'}}/>
                }
            })}
        <div>{loading && 'Loading'}</div>
        <div>{error && 'Error'}</div>
    </div>
  );
}

export default App;
