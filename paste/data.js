let superheroes = [
    
    {
        id:1,
        name:'hari',
        age:15,
        planet:"krypton",
        group:"justice League"

    },

    {
        id:2,
        name:'ram',
        age:18,
        planet:"thimi",
        group:"justice"

    },

    {
        id:1,
        name:'shyam',
        age:22,
        planet:"promo",
        group:"heropanti"

    },

    {
        id:1,
        name:'sita',
        age:33,
        planet:"sympton",
        group:"kerabari"

    },
]

// console.log(superheroes);




function createRows(supes){

    document.getElementById("data").innerHTML="";

    supes.forEach(function(superhero,i){

    
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.append(i+1);
        let td2 = document.createElement('td');
        td2.append(superhero.name);
        let td3 = document.createElement('td');
        td3.append(superhero.age);
        let td4 = document.createElement('td');
        td4.append(superhero.planet);
        let td5 = document.createElement('td');
        td5.append(superhero.group);
        tr.append(td1);
        tr.append(td2);
        tr.append(td3);
        tr.append(td4);
        tr.append(td5);
    
        document.getElementById('data').append(tr);
    
    });

}

createRows(superheroes);

function searchName(sname){

    let filteredArray = superheroes.filter(function(superhero,index){
        return superhero.name.toUpperCase().includes(sname.toUpperCase());
    })

    createRows(filteredArray);

}