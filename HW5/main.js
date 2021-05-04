let arr=[];
for(let i=0;i<10;i++){
    let passport ={
        name:"Ivan"+((10-i)/2),
        lastname:"Ivanov"+i,
        fatherName:"Ivanovich"+i,
        birdhdate:"01.01.1970",
        registrationCountry:"Belarus",
        registrationCity:"Minsk",
        registrationAddress:"Lenina st.,21",
        issuedByDepartment:"Leninsky district police department",
        dateOfIssue:`${i+1}.${i+1}.${1970+i}`,
        validBefore:"01.01.01010"
    };
    arr[i]=passport;
}
console.log(arr);


function sortByParam(passportList, paramName){
    function param(paramName){
        return (a, b) => a[paramName] > b[paramName] ? 1 : -1;
    }
    return passportList.sort(param(paramName));
}
sortByParam(arr,"name");


let div = document.getElementById("passport");
let num=Math.floor((Math.random()*10)); 
let description=arr[num];
function displayPassport(passport){ 
    let i = 0;
    for(key in passport){
        div.appendChild[i].innerHTML = key+": "+passport[key];
        i++;
    }
}
displayPassport(description);


function displayPasportsAsTable(passportList){
    
    var body = document.getElementsByTagName('body')[0];
    var tabl = document.createElement("TABLE");
    tabl.setAttribute("id", "myTable");
    document.body.appendChild(tabl);
    var tbdy = document.createElement('tbody');
    tabl.setAttribute('border', '1');
    for(let i=0;i<passportList.length;i++){
        var tr = document.createElement("TR");
        for (let j = 0; j < passportList.length+1; j++) {
            var td = document.createElement("TD");
            tr.appendChild(td);
            if(j==0){ 
                var text = document.createTextNode(Object.keys(passportList[0])[i]);
                td.appendChild(text);        
            }
            else{
                var text = document.createTextNode(Object.values(passportList[j-1])[i]);
                td.appendChild(text);  
            }
        }
        tbdy.appendChild(tr);
    }
    document.body.appendChild(tr);
    document.body.appendChild(tabl);
    tbdy.appendChild(tr);
    tabl.appendChild(tbdy);
    body.appendChild(tabl)
}
displayPasportsAsTable(arr);


