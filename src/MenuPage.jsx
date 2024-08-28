import FunctionalBar from './SearchBar'
import SearchBar from './SearchBar'
import menu from '../data';

import ItemList from './ItemCard';
import { useState } from 'react';

function MenuPage(){
    const[something,setSomething] = useState('')




    function HandleSomething(e){
        setSomething(e.target.value)
        
    }
    const filterdData = menu.filter((item)=>{

        return something.toLowerCase() ===''? item : item.title.includes(something)
    })


    return(<>
     <div className=' bg-amber-300 h-full w-full flex flex-col justify-start items-center'>
    <div className="row mt-14 mb-10 flex justify-center flex-col items-center text-center w-10/12" >
    <h1 className='text-6xl  pb-6 flex justify-end items-center  font-bold'>Our Menu </h1>
    <span className='h-1 w-2/4   bg-black'></span>
                    <SearchBar inputValue={something} onSubmit={HandleSomething}/>
    </div>
    <div className="item-container w-full  flex flex-wrap p-9 justify-center items-center gap-5"  >
      <ItemList filterdata={filterdData}/>
    
    </div>
  </div>
  </>);
}

export default MenuPage;