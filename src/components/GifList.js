import React from "react";

function GifList({GifArray}){
    return(
        <div>
        <ul>
         {GifArray.map((gif, index)=>{
             return(
              <li key={index}>
               <img src={gif.images.original.url} alt="animal pics"/>
              </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default GifList