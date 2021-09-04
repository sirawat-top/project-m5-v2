const GetLocal = localStorage.getItem('carts'); 
const Get = JSON.parse(GetLocal)
console.log('carts : ',(Get));


const cartdetail = ()=>{
  try{
      
    document.querySelector('.detail').innerHTML = Get.map((detail) =>
  `
      <div class="col-8">
      <div class="row">
      <div class="col-6">
      <img src="${detail.img}" id="img"> 
    </div>
    <div class="col-6">
      <p id="prdname">${detail.name}</p>
      <p id="prdPrice">${detail.price} bath</p>
   
   
    <div class="row">
      <div class="col-6">
        <p>size</p>
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
      </div>
      <div class="col-6">
        <p>Quantity</p>
   <div class="dropdown">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Please Select
    </a>
<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">1</a></li>
    <li><a class="dropdown-item" href="#">2</a></li>
    <li><a class="dropdown-item" href="#">3</a></li>
    <li><a class="dropdown-item" href="#">4</a></li>
</ul>
</div>
      </div>
    </div>



    </div>
      </div>
   
      </div>
      <div class="col-4">
      <div class="mini-container">
      <h4>Summary</h4>
      <div class="row">
        <div class="col-6">
        <p>subtotal</p>
        </div>
        <div class="col-6">
        <p id="prdPrice">${detail.prdPrice} bath</p>
        </div>
      </div>
      <div class="row">
      <div class="col-6">
      <p>Total</p>
      </div>
      <div class="col-6">
      <p id="prdPrice">${detail.prdPrice} bath</p>
      </div>
    </div>
    <button onclick="location.href='payment.html?id=${detail.id}';"class="btn btn-primary btn-dark">Check out</button>
      </div>
        
        
      </div>
      

    
    
     
  `
)
.join("");
  }catch{
      console.log(`e`,e);
  }
}
cartdetail() 