/*
    Name: Thinh Nguyen
    Name of file: homework3.js
    Date created: 09/09/2024
    Date last edited: 10/07/2024
    Description: Assignment 3 Javascript
*/

 //display Today Date on screen
 document.getElementById("today").innerHTML = 'Today date is: '+new Date().toLocaleDateString();
 
 
 //code for slider
 let slider = document.getElementById("healthBar");
 let output = document.getElementById("healthBarVal");
	output.innerHTML = slider.value;
	slider.oninput = function() {output.innerHTML = this.value;}	 
	 
//don't allow dates in the future or more than 120 years ago
function checkDate(){
	
	let inputDate = document.getElementById("DOB").value;
	
	let [year, month, day] = inputDate.split('-');
	let myDate = new Date(year, month - 1, day);  // Month is zero-based in JS Date
	
	const currentDate = new Date();		
    let minDate = new Date();	
	minDate.setFullYear(minDate.getFullYear() - 120);	
	
	const msgLabel = document.getElementById("dobError");
	
	if(myDate > currentDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. Date in future.";
	
	}
	else if( myDate < minDate){		
		msgLabel.className = 'errorMsg';
		msgLabel.innerHTML = "Invalid Date. The date is older than 120 years.";
	
	}
	else{
		msgLabel.className = 'validMsg';
		msgLabel.innerHTML = "pass";		
	}		
}



function checkZip() {
    let zipCode = document.getElementById("Zip").value;
    const zipError = document.getElementById("zipError");
    zipError.className = 'validMsg';
    
    // Regular expression for validating 5-digit or 5-4 digit format
    const zipPattern = /^\d{5}(-\d{4})?$/;
    
    if (zipPattern.test(zipCode)) {
        // If the full 10-digit format is entered, return only the first 5 digits
        if (zipCode.length === 10) {
            zipCode = zipCode.substring(0, 5);
        }
        zipError.innerHTML = "Pass";
        zipError.className = 'validMsg';
    } else {
        zipError.innerHTML = "Invalid zip code";
        zipError.className = 'errorMsg';
    }

}

function checkUserID() {
	let userID = document.getElementById("userID").value;
	const useridError = document.getElementById("useridError");
    // Convert the input to lowercase
    userID = userID.toLowerCase();    
    const idPattern = /^[a-z][a-z0-9_-]{4,29}$/;
	
    // Check if the userID matches the criteria
    if (idPattern.test(userID)) {        
		useridError.innerHTML = "Pass";
        useridError.className = 'validMsg';
    } else {
		useridError.innerHTML = "Invalid userID format";
        useridError.className = 'errorMsg';       
    }
}


function checkPasswordMatch() {
	let p = document.getElementById("pwd").value;
	let rp = document.getElementById("rePwd").value;
	let msg = document.getElementById("rePwdError");
	if ( p==rp ){
		msg.innerHTML = "Passwords match!";
		msg.className = 'validMsg';	 
	} else{
		msg.innerHTML = "Passwords DO NOT match!";	
		msg.className = 'errorMsg';	 		
	}
}

function checkPassword() {
    let passOutput = "";
	let passMsg = document.getElementById("pwdError");
    let passInput = document.getElementById("pwd").value;	
	let userID = document.getElementById("userID").value;
    let error_flag = 0;

    // Validate lowercase letters
    if (passInput.search(/[a-z]/) < 0) {
        passOutput += "Enter at least 1 lowercase letter.<br>";
        error_flag = 1;
    }

    // Validate capital letters
    if (passInput.search(/[A-Z]/) < 0) {
        passOutput += "Enter at least 1 uppercase letter.<br>";
        error_flag = 1;
    }

    // Validate numbers
    if (passInput.search(/[0-9]/) < 0) {
        passOutput += "Enter at least 1 number.<br>";
        error_flag = 1;
    }

    // Validate special characters
    if (passInput.search(/[!\@#\$%&*\-_\\.+\(\)]/) < 0) {
        passOutput += "Enter at least 1 special character.<br>";
        error_flag = 1;
    }

    // Validate length
    if (passInput.length < 8) {
        passOutput += "Password must be at least 8 characters long.<br>";
        error_flag = 1;
    }
	
	 if (passInput.toLowerCase().includes(userID)) {
        passOutput += "Password cannot contain your userID.<br>";
        error_flag = 1;
    }

    // If no errors, show success message
    if (!error_flag) {
        passOutput = "Password is valid!";
		passMsg.className = 'validMsg';	
    }else{
		passMsg.className = 'errorMsg';		
	}

    // Display all messages in a single element
    passMsg.innerHTML = passOutput;
}

//MODAL POP UP 
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the Review button, open the modal 
function reviewData() {
  modal.style.display = "block";
   
  let fname = document.getElementById("FirstName").value;
  let mname = document.getElementById("MidName").value;
  let lname = document.getElementById("LastName").value;
  let dob = document.getElementById("DOB").value;
  let dobMsg =  document.getElementById("dobError");  
  
  let ssn = document.getElementById("SSN").value;

  let genderElement = document.querySelector('input[name="gender"]:checked');
  if (genderElement){
	 let gender = genderElement.value;	 
  }
  let addr1 = document.getElementById("Address1").value;
  let addr2 = document.getElementById("Address2").value;
  let city = document.getElementById("City").value;
  let state = document.getElementById("State").value;
  
  let zipCode = document.getElementById("Zip").value;
  const zipError = document.getElementById("zipError");
  const zipPattern = /^\d{5}(-\d{4})?$/;
  if (zipPattern.test(zipCode)) {
       // If the full 10-digit format is entered, return only the first 5 digits
        if (zipCode.length === 10) {
            zipCode = zipCode.substring(0, 5);
        }      
  } 
    
   
  let phone = document.getElementById("Phone").value;
  let email = document.getElementById("Email").value;
  let symptom = document.getElementById("Symptom").value;
   
  let chicken = "N";  	
  if(document.getElementById("vaccine1").checked){
	  chicken = "Y"; 
  }
  
  let measles = "N";  	
  if(document.getElementById("vaccine2").checked){
	  measles = "Y"; 
  } 
  
  let covid = "N";
  if(document.getElementById("vaccine3").checked){
	  covid = "Y"; 
  } 

  let smallpox = "N";
  if(document.getElementById("vaccine4").checked){
	  smallpox = "Y"; 
  } 
 
  let tetanus = "N";
  if(document.getElementById("vaccine5").checked){
	  tetanus = "Y"; 
  } 
  let flu = "";
  let fluElement = document.querySelector('input[name="flushot"]:checked');
  if (fluElement){
	 flu = fluElement.value;	 
  }
  
  let insurance = "";
  let insuranceElement = document.querySelector('input[name="insurance"]:checked');
  if (insuranceElement){
	 insurance = insuranceElement.value;	 
  }
  
  let userID = document.getElementById("userID").value;
  let useridError = document.getElementById("useridError");
  userID = userID.toLowerCase();    
  const idPattern = /^[a-z][a-z0-9_-]{4,29}$/;	
  if (idPattern.test(userID)) {        
		userID = userID;
  } 
    
  let pwd = document.getElementById("pwd").value;
  let passMsg = document.getElementById("pwdError");
      
  let outText = "";  
  outText = `<table id="reviewForm" style="width: 100%">
   <colgroup>
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 30%;">
       <col span="1" style="width: 40%;">
    </colgroup>
     <tbody>
	   <tr><th colspan="3">Please Review Your Information: </th></tr>
      <tr> <td align="right"><br/> Name (First, MI, Last):</td><td>${fname} ${mname} ${lname}</td> <td></td></tr>
      <tr><td align="right">Date of Birth:</td><td>${dob}</td><td>${dobMsg.innerHTML}</td></tr>
      <tr><td align="right">Address:</td><td>${addr1} <br> ${addr2} <br> ${city}, ${state} ${zipCode}</td><td>${zipError.innerHTML}</td></tr>
      <tr><td align="right">Email:</td><td>${email}</td><td></td></tr>
      <tr><td align="right">Phone:</td><td>${phone}</td><td></td></tr>
	  <tr><td align="right">My Current Symptoms:</td><td>${symptom}</td><td></td></tr>
      <tr><td align="right">Chicken Pox:</td><td>${chicken}</td><td></td></tr>
	  <tr><td align="right">Measles:</td><td>${measles}</td><td></td></tr>
	  <tr><td align="right">Covid-19:</td><td>${covid}</td><td></td></tr>
	  <tr><td align="right">Small Pox:</td><td>${smallpox}</td><td></td></tr>
	  <tr><td align="right">Tetanus:</td><td>${tetanus}</td><td></td></tr>
	  <tr><td align="right">My Health Score:</td><td>${slider.value}</td><td></td></tr>
      <tr><td align="right">Flushot today?</td><td>${flu}</td><td></td></tr>
	  <tr><td align="right">Has insurance?</td><td>${insurance}</td><td></td></tr>
	  <tr><td align="right">UserID</td><td>${userID}</td><td>${useridError.innerHTML}</td></tr>
	  <tr><td align="right">Password</td><td>${pwd}</td><td>${passMsg.innerHTML}</td></tr>
	 <tbody>
    </table>`;
 
  let content = document.getElementById("content");   
  content.innerHTML = outText; 
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





 