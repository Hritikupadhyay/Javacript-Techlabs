// console.log("hello");

// alert("namaste");
// confirm("want to continue?")


// let val=prompt("enter number");
// console.log(val);

// let number=10
//  //number="sachin"

//  console.log(typeof number);
 
//  number="Hello"
//  console.log(typeof number);

//  number=true
//  console.log(typeof number);

//  const name="ashish";
//  console.log(name)


// let fullName="Yadav,Mishra,ashish"
// console.log(fullName.toLowerCase());
// console.log(fullName.charAt(1));
// console.log(fullName.concat(": "));

// let result=fullName.split(",")
// console.log(result[0]);



// let email="upasdhyayhritik2@gmail.com"
// let domain=email.split("@")
// console.log(domain[1])


// let domain1=email.substring(email.indexOf("@")+1)
// console.log(domain1);

// let domain2=email.slice(email.indexOf("@")+1)
// console.log(domain2)


// let stockName="Atata"
// let stockPrice=1000
// let tradingApp="Grow"

// let trader1=("i bought shres of "+stockName+"at price "+stockPrice+" by using "+tradingApp)
// console.log(trader1);

// let trader2=`i boughtg shares of ${stockName} at price ${stockPrice} by using ${tradingApp}`
// console.log(trader2);


//arrays


// let students=['hritik','ashish','jay','tousif']

// console.log(students);

// students.push('vivwake')
// console.log(students);

// students.pop()
// console.log(students);

// console.log(students.includes("ajjjuuuu"));

// let netudentws=students.concat(['harsh','hamza'])
// console.log(netudentws);

// students.filter

//null and undefined

// let num1;
// console.log(num1);

//loose coupling

// let num2=10
// let num3='10'
// console.log(num2===num3);


//functions

// function getmilk(){
//     console.log("milk");
    
// }
// getmilk()

//function with arguments

// function getmilk1(bottles){
//     console.log("milk"+ bottles);
// }
// getmilk1(2)

//arrow function

// const addition=(num1,num2)=>{
//     return num1+num2;
// }

// console.log(addition(10,20));


//callback function
//case1
// const func1=()=>{
//     console.log("inside fuction 1");
    
// }
// func1()

// const func2=()=>{
//     console.log("inside fuction 2");
    
// }
// func2()
//case2
// const func1=(callback)=>{
//     console.log("inside fuction 1");
//     callback()
// }

// const func2=()=>{
//     console.log("inside fuction 2");
//     }
// func1(func2)
//case3
// const func1=(callback)=>{
//     console.log("inside fuction 1");
//     callback()
// }

// func1(()=>{
//     console.log("inside fuction 2");
//     })


//adding elements in html


// const para=document.body.appendChild(document.createElement("h1"))
// const p=document.createElement("p")
// document.body.appendChild(p)
// console.log(p);


//foreach loop
// const ulist=document.body.appendChild(document.createElement("ul"))


// let stocks=['MRF','TATA','Reliance','OLA']

// const ulRef=document.querySelector("ul")
// console.log(ulRef);
// list='';

// stocks.forEach((stocks,index)=>{
//     list+=`<li>${index+1} :${stocks}</li>`
//     console.log(stocks);
    
// })

// console.log(list);

// ulRef.innerHTML=list

//objects
// let studentsList=[
//     {
//         id:101,
//         firstName:"Jayesh",
//         lastName:"Vichare",
//         email:"jayesh@gmail.com"
//     },
//     {
//         id:102,
//         firstName:"Nitin",
//         lastName:"Shinde",
//         email:"nitin@gmail.com"
//     },
//     {
//         id:103,
//         firstName:"Rupesh",
//         lastName:"Singh",
//         email:"rupesh@gmail.com"
//     },
//     {
//         id:104,
//         firstName:"Yogi",
//         lastName:"Maurya",
//         email:"yogi@gmail.com"
//     },
//     {
//         id:105,
//         firstName:"Mayur",
//         lastName:"Patil",
//         email:"mayur@gmail.com"
//     }
// ];

// const tbRef=document.querySelector("table")
// console.log(tbRef);
// table='';

// studentsList.forEach((students,index)=>{
//     table+=`<tr>
//     <td>${students.id}</td>
//     <td>${students.firstName}</td>
//     <td>${students.lastName}</td>
//     <td>${students.email}</td>
//     <tr>`
// })
// console.log(table);

// tbRef.innerHTML=table

