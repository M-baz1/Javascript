let films = [
    "batman",
    "ironman",
    "superman",
    "spiderman",
    "hulk"
]
films.push("jhon wick", "avengers")

for ( i = 0; i < films.length ; i++) {
    console.log(films[i]);
}
const filmcheck = (film) => {
    if (film == "superman"){
        console.log("yes its the correct film");        
    }
    else if (film !== "superman"){
        console.log("this is the incorrect film");
    }
}
filmcheck(films[2])