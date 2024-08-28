import { useState } from "react";

export function FunctionalBar(){
    const[inputValue,setInputValue] = useState("");
     function HandleSubmit(e){
        setInputValue(e.target.value);



     }




    return(
        <SearchBar inputValue={inputValue} onSubmit={HandleSubmit}/>



    );
}



function SearchBar({onSubmit,inputValue}){

 



return(

    <label className="input input-bordered flex items-center m-5 w-2/5 h-1/6 py-3.5 gap-2">
  <input type="text"  value={inputValue} onChange={onSubmit} className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // onClick={onSubmit}
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
)
}

export default SearchBar;