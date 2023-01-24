import React, { useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [array, setArray] = useState([])
    const [searchParams, setaSearchParams] = useState("cats")
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchParams}&api_key=sTX6jvvYi24EuzDDPshS1qeyiz9eXqkh&rating=g`)
        .then(res => res.json())
        .then((fetchedGIFs)=>{
            setArray(fetchedGIFs.data)
        })
    },[searchParams])
    const listedGifs = array.slice(0,3)

    function searched(val) {
        setaSearchParams(val)
    }

    return(
        <div>
            <GifSearch
                searched={searched}
            />
            <GifList
                GifArray={listedGifs}
            />
        </div>
    )
}

export default GifListContainer