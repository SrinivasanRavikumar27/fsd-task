
var res1 = fetch("https://restcountries.com/v3.1/all");

function divTag(tagName,nameOfClass){
    var divTag = document.createElement(tagName);
    divTag.className = nameOfClass;
    return divTag;
}

function wheather(lat,lng){

    var res =  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ab2ab4da0b428455856fa670fedd631a`);
    res.then((data) => data.json()).then((data1) => groot(data1));

    var temp = "";
    var humidity = "";
    var lat1 = "";
    var lng1 = "";
    var climate = ""; 

    function groot(data1){
        for (var i in data1) {

            if(i == "coord"){
                lat1 = data1[i].lat;
                lng1 = data1[i].lon;
            }

            if(i == "main"){
                temp = data1[i].temp;
                humidity = data1[i].humidity;
            }

            if(i == "weather"){
            data1[i].forEach((data2) => climate = data2.description);
            }

}   
window.alert(`

   Wheather Details
    
Latitude    : ${lat1};
Longitude   : ${lng1};
Humidity    : ${humidity};
Temperature : ${temp};  
Climate     : ${climate};  


`);
  
    }

}
  

res1.then((data) => data.json()).then((data1) => {

    var rowDiv = divTag("div", "row"); // Create a row div
    data1.forEach((countryData, index) => {
        var lat = countryData.latlng[0];
        var lng = countryData.latlng[1];

        let divtag1 = divTag("div", "col-lg-4 col-sm-12"); // Create a column div
        let divtag2 = divTag("div", "card");
        let divtag3 = divTag("div", "card-header");

   divtag3.innerHTML = `${countryData.name.common}`;
   
   let divtag4 = divTag("div","card-body","","");

   let imgTag = document.createElement("img");
   imgTag.src = `${countryData.flags.svg}`;

   let ptag = document.createElement("p");
   ptag.innerHTML = `Capital : ${countryData.capital}`;

   let ptag1 = document.createElement("p");
   ptag1.innerHTML = `Region : ${countryData.region}`;

   let ptag2 = document.createElement("p");
   ptag2.innerHTML = `Country Code : ${countryData.idd.root}`;
   
   let buttonTag = document.createElement("button");
   buttonTag.setAttribute("type","button");
   buttonTag.setAttribute("onclick",`wheather(${lat},${lng})`);
   buttonTag.innerHTML = "Click for Wheather"

   divtag4.append(imgTag, ptag, ptag1, ptag2, buttonTag);
        divtag2.append(divtag3, divtag4);
        divtag1.appendChild(divtag2);

        if (index % 3 === 0) {
            // Close the current row and start a new one every 3 cards
            document.body.appendChild(rowDiv);
            rowDiv = divTag("div", "row");
        }

        rowDiv.appendChild(divtag1);
    });

    // Append any remaining cards in the last row
    document.body.appendChild(rowDiv);

});

