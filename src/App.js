import React, { useEffect, useState } from 'react'

// Unsplash API
let count = 20
const apiKey = 'BJD0Ft5i5Qwk6bmbM5zaeFqR3c8uNVz0DZRBxojk4fo'
let apiUrl = `https://api.unsplash.com/search/photos/?client_id=${apiKey}&per_page=${count}&content_filter=high&query=games`

function App() {
  const [photos, setPhotos] = useState([])

  const fetchPhotos = () => {
    return fetch(apiUrl)
         .then(async response => {
             const data = await response.json()
             if (response.ok) {
                 setPhotos([...data.results])
                 console.log(photos)
                 console.log(data)
                 console.log(photos)
             } else {
                 return Promise.reject(data)
             }
         })
  }

  // useEffect(() => {
  //     window.addEventListener('scroll', () => {
  //         // window.innerHeight is the total height of the browser window
  //         // window.scrollY distance from top of page
  //         if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
  //            fetchPhotos()
  //         }
  //     })
  // })

  return (
    <div>
       <button onClick={() => fetchPhotos()}>Fetch Photos</button>

        {photos && photos.map(photo => (
            <img key={photo.id} src={photo.urls.full} alt={photo.alt_description} style={{ maxWidth: '100%'}}/>
        ))}

    </div>
  );
}

export default App;
