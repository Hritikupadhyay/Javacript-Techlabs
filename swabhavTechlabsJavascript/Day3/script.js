//Array functions(filter/map)

// const players=['sachin','kohli','dhoni','sehwag','rainaa','dhoni']
// console.log(players);

// const filteredPlayer=players.filter((player)=>{
//  return player.length==5 || player.length==3
// })
// console.log(filteredPlayer);

// filteredPlayer2=[]
// players.filter((player)=> {

//     if (!filteredPlayer2.includes(player)){
//         filteredPlayer2.push(player)
        
//     }
// })
// console.log(filteredPlayer2);




// const num=[10,30,22,21,35,66,77,91]
// console.log(num);

// const filterNum=num.filter((nums)=>{
//     return nums%2==0
// })
// console.log(filterNum);

//assignment

const myOttList = [
    {
      name: "hotstar",
      price: 1500,
      subscription: "active",
    },
    {
      name: "sonyLiv",
      price: 700,
      subscription: "inactive",
    },
    {
      name: "zee5",
      price: 500,
      subscription: "active",
    },
    {
      name: "jioCinema",
      price: 1000,
      subscription: "inactive",
    },
    {
      name: "prime videos",
      price: 1300,
      subscription: "active",
    },
  ];

  const sortName=myOttList.sort((ott1,ott2)=>{
     return ott1.name.localeCompare(ott2.name)
  })
  console.log(sortName);
  

// //  const activeSubscription=myOttList.filter((myOttList=> myOttList.subscription=='active'))
// // console.log(activeSubscription);
// const discount=myOttList.map((ott)=>{
//         if(ott.price>1000){
//          ott.price -= ott.price*0.2
//         }
//         return [ott.name,ott.price]
// })
// console.log(discount);


//map

// const priceList=[100,200,150,50,300,600]
// let result=0
// const salePrice= priceList.map((price)=>{
//     //return result=price+result
//      return (price -price *0.2)
// })
// console.log(salePrice);


//reduce
// const priceList=[100,200,150,50,300,600]
// let result=0
// const saleprice= priceList.reduce((res,val)=>{
//     console.log("hi");

//     return res+val
    
// })
// console.log(saleprice);


//find
// const priceList=[100,200,150,50,300,600]
//  let result=0

//  const saleprice= priceList.find((price)=>{
//      return price>300

//  })
//  console.log(saleprice);
 
 //sort

//  const priceList=[100,200,150,50,300,600]
//  const players=['sachin','kohli','dhoni','sehwag','rainaa','dhoni']
 

//  const saleprice= priceList.sort((num1,num2)=>{
//      return num1-num2
//  })
//  console.log(saleprice);

// console.log(players.sort());

 