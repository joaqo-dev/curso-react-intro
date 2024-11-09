import React from "react";

function TodoSearch({searchValue,setSearchValue}){
    

    return(
      <input placeholder= "Todo Search..."
      value={searchValue}
      onChange={(event) => {
        console.log('Escribiste...')
        setSearchValue (event.target.value)
      }}
      ></input>
    )
  }

export {TodoSearch};