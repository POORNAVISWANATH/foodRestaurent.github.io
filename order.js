// const d = document.getElementById("ordered_list");
// function calculateTotal() {
    // const prices = {
    //     item1: 90,
    //     item2: 50,
    //     item3: 15,
    //     item4: 100,
    //     item5: 15,
    //     item6: 80,
    //     item7: 90,
    //     item8: 80,
    //     item9: 150  
    // };

//     let total = 0;

//     // Get values from the form
//     for (const item in prices) {
//         const quantity = document.getElementById(item).value;

//             total += prices[item] * quantity;
         
//     }

//     // Update the total amount
//     document.getElementById('totalAmount').innerText = total.toFixed(2);
// }

// const total=document.querySelector("#total")
// let a=document.querySelector(".q") 
// let b=document.querySelector(".w") 
// let totalBill=0;

//   console.log(a.value)
//     if(a.value!=0){
//        const totalB=prices[0]*a.value
//     total.innerHTML+=`<p> Briyani : ${prices[0]} * ${a.value} = ${totalB} </p> <br>`
//     totalBill+=totalB
//    }

//     if(b.value!=0){
//        const totalB=prices[1]*a.value
//     total.innerHTML+=`<p> Dosa : ${prices[1]} * ${b.value} = ${totalB} </p> <br>`
//     totalBill+=totalB
//    }

//    total.innerHTML+=`<p> TOTAL PRICE IS ${totalBill}`





function calculateTotal()
{

   let item1=document.querySelector(".item1").value;
   let item2=document.querySelector(".item2").value;
   let item3=document.querySelector(".item3").value;
   let item4=document.querySelector(".item4").value;
   let item5=document.querySelector(".item5").value;
   let item6=document.querySelector(".item6").value;
   let item7=document.querySelector(".item7").value;
   let item8=document.querySelector(".item8").value;
   let item9=document.querySelector(".item9").value;
   
   const total=document.querySelector("#total")
   
   total.innerHTML="";

const itm={
     item1,
     item2,
     item3,
     item4,
     item5,
     item6,
     item7,
     item8,
     item9
}


const prices = {
   item1:{
    briyani:90
   },
   item2:
   {
      Dosa:15
   },
   item3: {
      FishFry:50
   },
   item4:
   { 
      Noodles:100
   } ,
   item5:{
      parotta:15
   } ,
   item6: {
      Pasta:80
   },
   item7: {Meals:90},
   item8: {Sharwama:80},
   item9: {Pizza:150}  
};

const food=[`briyani`,`Dosa`,`FishFry`,`Noodles`,`parotta`,`Pasta`,`Meals`,`Sharwama`,`Pizza`];


let k=0,totalBill=0;
for(let i=0;i<9;i++)
{5

    if(itm[`item${i+1}`]>0){
      totalBill+=prices[`item${i+1}`][food[k]]*itm[`item${i+1}`];
    total.innerHTML+= `<p id="bill">  ${food[k]} ₹${prices[`item${i+1}`][food[k]]} * ${itm[`item${i+1}`]} =  ${prices[`item${i+1}`][food[k]]*itm[`item${i+1}`]}<br><br>`
    }
   k++;   
}

total.innerHTML+=`<h2> TOTAL BILL =  ₹ ${totalBill}`

}



