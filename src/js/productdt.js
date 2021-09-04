let searchParams = new URLSearchParams(window.location.search).get("id");
console.log(searchParams);

const getdetail =async ()=>{
    try{
        
        const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productdetail");
        document.getElementById('detail').innerHTML=response.data
        .filter((x=> x.id == searchParams))
        .map(
        (detail)=>
    `


          
          
          <div class="col-7 col-s-12">
          <img src="${detail.prdImageUrl}"> 
          </div>

            <div class="col-5 col-s-12">
            <h4>${detail.prdname}</h4>
            <p class="detailproduct">${detail.prdPrice} bath</p>
            <h4>Product Detail</h4>
            <p>
            ${detail.txtDetail}
        </p>
            <div class="dropdown">
             <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                 Please Select
             </a>
     
             <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
             <li><a class="dropdown-item" href="#">S</a></li>
             <li><a class="dropdown-item" href="#">M</a></li>
             <li><a class="dropdown-item" href="#">L</a></li>
             <li><a class="dropdown-item" href="#">XL</a></li>
         </ul>
         </div>
         <button  class="AddToBlack">Add to cart</button>
       
        
            </div>

    `
)
.join("");

const adddata = document.querySelector('.AddToBlack')
        adddata.addEventListener('click', () => {
            let select = document.querySelector('#dataSize').value
            carts = JSON.parse(localStorage.getItem("carts") || "[]");
            console.log('carts :>> ', carts.length);
            const cart = {
                id: dataFetch[0].id,
                name: dataFetch[0].prdname,
                price: dataFetch[0].prdPrice,
                img: dataFetch[0].prdImageUrl,
                size: select,
              };
              console.log('cart: ', cart); 
              carts.push(cart);
              localStorage.setItem(`cart`, JSON.stringify(carts));
              location.href = `cart.html`
            
        })
    }catch{
        console.log(`e`,e);
    }
}
getdetail()

    /* var cartararay=[];

    function clicked(){
      var img = document.getElementById("imgdetail")
     var name = document.getElementById("namedetail")
     let price = document.getElementById("pricedetail")
     let realPrice = price.innerText.split(":")

     console.log(img.src,name.innerText,realPrice[1]) 
     cartararay.push({id:searchParams})
     console.log(cartararay)
    }

    */

  
  