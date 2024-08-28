// import './ItemCard.css'
import menu from './data'

function ItemCard(props) {

    return (
        <div className="card bg-base-100 w-96  shadow-xl" style={{width:"384px",height:"463px",objectFit:"contain"}}>
  <figure>
    <img
      src={props.imagesource}
      alt="Cake"  />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}<span className='absolute right-10'>{`$${props.price}`}</span></h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>


            );
}



// export default ItemCard;


function ItemList({filterdata=menu}){
  const NewMenu = filterdata.map((item)=>{

    return(<ItemCard key={item.id} 
                    title={item.title} 
                    description={item.desc} 
                    imagesource={item.img} 
                    price={item.price} />)
  })


return NewMenu;
}

export default ItemList;