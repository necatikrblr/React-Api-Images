import ImageItem from "./ImageItem";

function ImageList({ImagesPlaceholder}) {
    return ( 
        <div className="kapsa">
            {ImagesPlaceholder.map((image,index)=>{
              return  <ImageItem key={index} img = {image}/>
            })}
        </div>
     );
}

export default ImageList;