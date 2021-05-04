let man ={
    name:"gena",
    age:22,
    color:"black",
    lox:false,
}


for(let key in man){
    console.log(`${key}:${man[key]}`)
}

let newMan=Object.assign({}, man)

console.log(newMan)


let cirle={
    radius:5,
    color:"white",
    calc(){
        let result= 2*Math.PI*cirle["radius"]
        console.log(result)
    }
}

cirle.calc()


let mess={
    text:" tht",
    getMessage(str){
        str==mess["text"]
        console.log(str)
    },

    showMessage(){
        alert(mess["text"])
    }
}

mess.getMessage("zopa")
// mess.showMessage()


function isEmpty(obj){
    for(let keys in obj){
               
        return false;
    }
        true;
        
}
     
console.log(isEmpty(man))






// задание 1

let str="2019-12-18T12:20";
let createDate=Date.parse(str);
let d = new Date(createDate)
console.log(d)


// задание 2

let d=new Date(2000,2,4);
console.log(d)
let day = d.getDay(d)
console.log(day)


// задание 3

let ss=1590749435756;
let date =new Date(ss);
console.log(date);

// задание 1

let image={
    name:"Userfoto",
    size:"200*200",
}

let newImage=JSON.stringify(image)
console.log(newImage)



// задание 1
let arr=[82,3,4,5,6,7]
for(let i of arr){
    console.log(i)
}

// задание 2


let list=document.getElementsByClassName("list__item");

let arr=[];
for(var i=0;i<=list.length-1; i++){
    var item=list[i].innerHTML;
    
    arr.push(item)
    
}


console.log(arr)

let newArr=[];
for(let b of arr ){
    let a= `${b}+${arr.indexOf(b)}`
    newArr.push(a)
} 
console.log(newArr)


// задание 3

let obj={
    apple:300,
    orange:200,
    grapes:700,
}

let sum=0
for(i in obj){
    sum+=obj[i]
}

console.log(sum)



// задание 4


let product={
    name:"john",
    priec:30,
    sold:false,
}

let{name:a,priec:b,sold:c}=product;
console.log(a, b,c)


// задание 5

let arr=["tony","stark",3,5,8,6,999,55]

let[a,b,...rest]=["tony","stark",3,5,8,6,999,55]
let sum=0;
rest.forEach(i=>{sum+=i})
console.log(sum)