let divTag = document.createElement("div");
divTag.setAttribute("id","screen");

let spanTag = document.createElement("span");

divTag.append(spanTag);

let imageTag = document.createElement("img");
imageTag.setAttribute("id","india");
imageTag.setAttribute("src","flag-of-india-trees.jpg");

document.body.append(divTag,imageTag);

const screenOn = document.getElementById("screen");
const imageShow = document.getElementById("india");

let count = 10;

function display(){
    if(count > 0){
        screenOn.innerHTML = count;
        count--;
        setTimeout(display,1000);
    }else{
        screenOn.innerHTML = "Happy Independence Day!";
        imageShow.style.display = "block";
    }
}

setTimeout(display,1000);