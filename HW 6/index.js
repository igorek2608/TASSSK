


let menu__burger=[
    {name:"Mini cheese Burger",
     price: "$9.00",
     description:"Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
     img:'./img/burgerSmall.jpg'                     
    },

    {name:"Double size burger",
     price: "$11.00",
     description:"Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
     img:'./img/burgerSmall.jpg'                              
    },

    {name:"Bacon, EGG and Cheese",
     price: "$13.00",
     description:"Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
     img:'./img/burgerSmall.jpg'                        
    },

    {name:"Pulled porx Burger",
     price: "$18.00",
     description:"Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
     img:'./img/burgerSmall.jpg'                             
    },

    {name:"Fried chicken Burger",
     price: "$22.00",
     description:"Lorem ipsum dolor sit amet elit. Phasel nec preti facil",
     img:'./img/burgerSmall.jpg'                             
    },

]


let creation=function(obj){
    for(let i=0;i<obj.length;i++){
        const memu__item =document.createElement('div');
        const item__img =document.createElement('div');
        const img =document.createElement('img');
        const menuText =document.createElement('div');
        const title= document.createElement('h3');
        const name =document.createElement('span');
        const price = document.createElement('strong');
        const description= document.createElement('p');
        memu__item.classList.add("menu__item");
        item__img.classList.add("item__img");
        img.classList.add("imag");
        img.setAttribute('src', obj[i].img);
        menuText.classList.add("menu-text");
        title.classList.add("name");
        name.classList.add( "name__inner");
        price.classList.add("cost");
        description.classList.add("description");
        name.textContent=obj[i].name;
        price.textContent=obj[i].price;
        description.textContent=obj[i].description;
        item__img.append(img);
        title.append(name,price);
        menuText.append(title,description);
        memu__item.append(item__img,menuText);
        const parent=document.getElementById('wrapper');
        parent.append(memu__item)

            
    }

}

creation(menu__burger);
///////


    





    
