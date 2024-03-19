
var divTag = document.createElement("div");
divTag.setAttribute("class","container");

var divTag1 = document.createElement("div");
divTag1.setAttribute("class","form-container");

var formTag = document.createElement("form");
formTag.setAttribute("id","form");

var h1Tag = document.createElement('h1');
h1Tag.setAttribute("id","title");
h1Tag.innerHTML = "Personal Form";

var divTag2 = document.createElement("div");
divTag2.setAttribute("id","errorMessages");

//   label tag

function label(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,labelName){
    var label = document.createElement(tagName);
    label.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        label.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        label.setAttribute(attributeName3,attributeValue3);
    }
    label.innerHTML = labelName; // content
    return label;
}

// input tag

function input(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,
    attributeName4,attributeValue4,attributeName5,attributeValue5,attributeName6,attributeValue6,requiredName){
    var input = document.createElement(tagName);
    input.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        input.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        input.setAttribute(attributeName3,attributeValue3);
    }
    if(attributeName4 !== "" && attributeValue4 !== ""){
        input.setAttribute(attributeName4,attributeValue4);
    }   
    if(attributeName5 !== "" && attributeValue5 !== ""){
        input.setAttribute(attributeName5,attributeValue5);
    }
    if(attributeName6 !== "" && attributeValue6 !== ""){
        input.setAttribute(attributeName6,attributeValue6);
    }      
    input.required = requiredName;
    return input;
}

//  button tag

function button(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,attributeName4,attributeValue4,buttonName){
    var button = document.createElement(tagName);
    button.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        button.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        button.setAttribute(attributeName3,attributeValue3);
    }   
    if(attributeName4 !== "" && attributeValue4 !== ""){
        button.setAttribute(attributeName4,attributeValue4);
    }  
    button.innerHTML = buttonName; // content
    return button;
}

// text area tag

function textArea(tagName,attributeName1,attributeValue1,attributeName2,attributeValue2,attributeName3,attributeValue3,
    attributeName4,attributeValue4,attributeName5,attributeValue5,requiredName){
    var textArea = document.createElement(tagName);
    textArea.setAttribute(attributeName1,attributeValue1);
    if(attributeName2 !== "" && attributeValue2 !== ""){
        textArea.setAttribute(attributeName2,attributeValue2);
    }
    if(attributeName3 !== "" && attributeValue3 !== ""){
        textArea.setAttribute(attributeName3,attributeValue3);
    }   
    if(attributeName4 !== "" && attributeValue4 !== ""){
        textArea.setAttribute(attributeName4,attributeValue4);
    }   
    if(attributeName5 !== "" && attributeValue5 !== ""){
        textArea.setAttribute(attributeName5,attributeValue5);
    }  
    textArea.required = requiredName; 
    return textArea;
}

//  break tag

function breakLine(tagName){
    var breakLine = document.createElement(tagName);
    return breakLine;
}

// multi select drpdown 

function multiSelect(tagName,idName,multipleName,arrayName,requiredName){

const selectElement = document.createElement(tagName);
selectElement.id = idName;
selectElement.multiple = multipleName;
selectElement.required = requiredName;    
arrayName.forEach((item) => {
    let option = document.createElement('option'); // Create a new option element for each item
    option.value = item.value;
    option.textContent = item.text; // Use textContent to set the option's text, not innerHTML
    selectElement.appendChild(option);
  });

  return selectElement;
}

//  creating html tags using dom tree structure

var labelFristName = label("label","for","firstName","","","","","Frist Name : ");

var inputFristName = input("input","type","text","id","first-name","placeholder","Enter Your firstName here!","","","","","","","true");

var br1 = breakLine("br");

var labelLastName = label("label","for","lastName","","","","","Last Name : ");

var inputLastName = input("input","type","text","id","last-name","placeholder","Enter Your lastName here!","","","","","","","true");

var br2 = breakLine("br");

var labelAddress = label("label","for","address","","","","","Address : ");

var inputAddress = textArea("textArea","name","address","id","address","placeholder","Enter Your Address here!","rows","3","cols","35"
,"true");

var br3 = breakLine("br");

var labelPincode = label("label","for","pincode","","","","","Pincode : ");

var inputPincode = input("input","type","text","id","pincode","placeholder","Enter Your Pincode here!","minlength","6",
"maxlength","6","oninput","this.value = this.value.replace(/[^0-9]/g, '').slice(0, 6);","true");

var br4 = breakLine("br");

var labelGender = label("label","for","gender","","","","","Gender : ");

var br5 = breakLine("br");

var labelGenderMale = label("label","for","male","","","","","Male : ");

var inputGenderMale = input("input","type","radio","name","gender","value","male","","","","","","","true");

var labelGenderFemale = label("label","for","female","","","","","Female : ");

var inputGenderFemale = input("input","type","radio","name","gender","value","female","","","","","","","true");

var labelTransgender = label("label","for","transgender","","","","","Transgender : ");

var inputTransgender = input("input","type","radio","name","gender","value","transgender","","","","","","","true");

var br6 = breakLine("br");

let food = [{ value: 'cheese', text: 'Cheese' },
{ value: 'tomatoes', text: 'Tomatoes' },
{ value: 'mozarella', text: 'Mozzarella' },
{ value: 'mushrooms', text: 'Mushrooms' },
{ value: 'pepperoni', text: 'Pepperoni' },
{ value: 'onions', text: 'Onions' }];

var labelForCondition = label("label","for","condition","id","condition","","","*Choose atleast two options in Food Items*");

var br7 = breakLine("br");

var labelMultiselect = label("label","for","foodItem","","","","","Food Items : ")

var foodMultiSelect = multiSelect("select","foodItem","multiple",food,"true");

var br8 = breakLine("br");

var labelState = label("label","for","state","","","","","State : ");

var inpuState = input("input","type","text","id","state","placeholder",
"Enter the State Name!","","","","","","","true");

var br9 = breakLine("br");

var labelCountry = label("label","for","country","","","","","Country : ");

var inpuCountry = input("input","type","text","id","country","placeholder",
"Enter the Country Name!","","","","","","","true");

var br10 = breakLine("br");

var sumbitButton = button("button", "type", "button",  "id", "submit", "class", "btn btn-primary","","", "Submit");
sumbitButton.addEventListener("click", click1); 

var pTag = document.createElement("p");
pTag.setAttribute("id","description");
pTag.innerHTML = "This sample form based on user details";

var divTag3 = document.createElement("div");
divTag3.setAttribute("class","table-container");

var h1Tag1 = document.createElement('h1');
h1Tag1.setAttribute("id","tittle");
h1Tag1.innerHTML = "Data Table";

const table = document.createElement("table");
  table.setAttribute("id", "dataTable");
  table.setAttribute("class","table");

  const thead = document.createElement("thead");
  const theadRow = document.createElement("tr");
  const columns = ["First Name", "Last Name", "Address", "Pincode", "Gender", "Food", "State", "Country"];

  columns.forEach(column => {
    const th = document.createElement("th");
    th.textContent = column;
    theadRow.appendChild(th);
  });

  thead.appendChild(theadRow);
      table.appendChild(thead);

      const tbody = document.createElement("tbody");

      table.appendChild(tbody);

formTag.append(h1Tag,labelFristName,inputFristName,br1,labelLastName,inputLastName,br2,labelAddress,
    inputAddress,br3,labelPincode,inputPincode,br4,labelGender,br5,labelGenderMale,inputGenderMale,
    labelGenderFemale,inputGenderFemale,labelTransgender,inputTransgender,br6,labelForCondition,
    br7,labelMultiselect,foodMultiSelect,br8,labelState,inpuState,br9,labelCountry,inpuCountry,br10,
    sumbitButton,pTag);
    divTag1.append(formTag);
divTag3.append(h1Tag1,table);
divTag.append(divTag1,divTag3);
    document.body.append(divTag);
   

    // multi select function to work from bootstrap 

$(document).ready(function() {
    $('#foodItem').multiselect({
      enableFiltering: true,
      includeSelectAllOption: true,
      maxHeight: 200,
      buttonWidth: '200px',
      nSelectedText: 'selected',
      delimiterText: ',',
      selectAllJustVisible: false,
      includeResetOption: true,
      selectedClass: "active multiselect-active-item-fallback"
    });
  });

  
  
  function click1() {

    const myForm = document.getElementById('form');

    // Get the values from the form fields
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const genderRadioButton = document.querySelector('input[name="gender"]:checked');
  const gender = genderRadioButton ? genderRadioButton.value : " ";
  const foodItems = Array.from(document.getElementById('foodItem').selectedOptions).map(option => option.value);
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;

  
  const errorMessages = [];

  // Validate each field and add error messages to the array if needed
  if (firstName.trim() === "") {
    errorMessages.push("First Name field is Required!!");
  }

  if (lastName.trim() === "") {
    errorMessages.push("Last Name field is Required!!");
  }

  if (address.trim() === "") {
    errorMessages.push("Address field is Required!!");
  }

  const pincodeValue = pincode.trim();
  if (pincodeValue === "") {
    errorMessages.push("Pincode field is Required!!");
  } else if (!/^[0-9]{6}$/.test(pincodeValue)) {
    errorMessages.push("Pincode should be a six-digit number.");
  }

  if (gender === "") {
    errorMessages.push("Gender field is Required!!");
  }

  if (foodItems.length === 0) {
    errorMessages.push("Food Items field is Required!!");
  } else if (foodItems.length < 2) {
    errorMessages.push("Food Items should be minimum two or greater than that.");
  }

  if (state.trim() === "") {
    errorMessages.push("State field is Required!!");
  }

  if (country.trim() === "") {
    errorMessages.push("Country field is Required!!");
  }

  // Display the accumulated error messages
  if (errorMessages.length > 0) {
    const errorMessageString = errorMessages.join('\n');
    alert("\u26A0 Error:\n\n" +errorMessageString);
  } else {
    dataDisplay();
  }

  }

  function dataDisplay(){

    const myForm = document.getElementById('form');

    // Get the values from the form fields
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const genderRadioButton = document.querySelector('input[name="gender"]:checked');
  const gender = genderRadioButton ? genderRadioButton.value : " ";
  const foodItems = Array.from(document.getElementById('foodItem').selectedOptions).map(option => option.value);
  const state = document.getElementById('state').value;
  const country = document.getElementById('country').value;


    const formDataArray = [];
    var foodString = "";

    if (foodItems.length !== 0) {
        foodString = foodItems.join(", "); // Join the food items with a comma separator
      }

    const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${gender}</td>
        <td>${foodString}</td>
        <td>${state}</td>
        <td>${country}</td>
      `;

      document.getElementById('dataTable').getElementsByTagName('tbody')[0].appendChild(newRow);

      // Clear the form fields
    //   myForm.reset();

    document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('address').value = '';
  document.getElementById('pincode').value = '';
  document.querySelector('input[name="gender"]:checked').checked = false;
  resetMultiselect();
  document.getElementById('state').value = '';
  document.getElementById('country').value = '';

  }

  function resetMultiselect() {
    const multiselect = $('#foodItem');
  multiselect.multiselect('clearSelection');
  
  }


