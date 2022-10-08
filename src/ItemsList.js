import { useState } from "react";

const items=[
  {
    type:"Fancy Item",
    rating: null,
    price: "$40.00 - $80.00",
  },
  {
    type:"Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "18.00",
  },
  {
    type:"Sale Item",
    rating: null,
    price: "25.00",
  },
  {
    type:"Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "40.00",
  },
  {
    type:"Sale Item",
    rating: null,
    price: "25.00",
  },
  {
    type:"Fancy Product",
    rating: null,
    price: "$120.00 - $280.00",
  },
  {
    type:"Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "18.00",
  },
  {
    type:"Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "40.00",
  }
];

export function ItemsList({ setCartCount, cartCount }) {

  return (
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {
          items.map((item)=>(
            <ItemCard item={item} setCartCount={setCartCount} cartCount={cartCount}/>
          ))
        }
        </div>
      </div>
    </section>
  );

}


function ItemCard({setCartCount,cartCount,item}){

  const [buttonValue, setButtonValue] = useState('Add to Cart');

  return(
    <div class="col mb-5">
      <div class="card h-100">
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{item.type}</h5>
              <div class="d-flex justify-content-center small mb-2">
                {item.rating}          
              </div>
              {item.price}
            </div>
          </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={()=>{
          if(buttonValue==='Add to Cart'){
            setButtonValue('Remove from Cart');
            setCartCount(cartCount+1);
          }else{
            setButtonValue('Add to Cart');
            setCartCount(cartCount-1);
          }
      }}>{buttonValue}</button></div>
    </div>
  </div>
</div>
  );
}
