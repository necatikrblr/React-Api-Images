// import { useState } from 'react'
import './App.css';
import Search from './search'
import SearchImages from './api/'
import { useState } from 'react';
import ImageList from './components/ImgList';
function App() {

  const [images, setImages] = useState([])
  const handleSubmit = async (term)=>{
    const result = await SearchImages(term);
    setImages(result);
  }

  return (
    <div className='app'>
    <Search search={handleSubmit} />
    <ImageList ImagesPlaceholder = {images}/>
    </div>
  )
}

export default App;
