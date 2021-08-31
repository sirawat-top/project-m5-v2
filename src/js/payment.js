let searchParams = new URLSearchParams(window.location.search).get("id");
      console.log(searchParams);
const billingde =async ()=>{
  try{
      
      const response = await axios.get("https://6102d7aa79ed680017482359.mockapi.io/productdetail");
      document.getElementById('billing').innerHTML=response.data
      .filter((x=> x.id == searchParams))
      .map(
      (detail)=>
        `
        <p>“I authorise Jersey Shop to charge my card for a total amount of ${detail.prdPrice} bath</p>
        `
        )
        document.getElementById('comfirm').innerHTML=response.data.filter((x=> x.id == searchParams))
        .map(
            (index)=>
            `
            <button onclick="click()" id="confirmpayment" style="height: 55px; background: #000; border: 0.5px solid gray; color: #fff;">Confirm payment${index.prdPrice}bath</button>
            `
        )
        document.getElementById('pricecheck').innerHTML=response.data.filter((x=> x.id == searchParams))
        .map(
            (index)=>
            `
            <p>${index.prdPrice} bath</p>
            `
        )
        document.getElementById('total').innerHTML=response.data.filter((x=> x.id == searchParams))
        .map(
            (index)=>
            `
            <p style="color: red;">${index.prdPrice} bath</p>
            `
        )
       
.join("");
  }catch{
      console.log(`e`,e);
  }
}
billingde() 


function click(){
    alert("success")
}



