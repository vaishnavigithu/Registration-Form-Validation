// function validate(){      //define the function
//     let x=5+7;
//     console.log(x);
//     //console.log('submitted successfully');
// }
//validate()             call the function in Event handler="onclick" bcz when clicking the code it will running


function validate(){
    let firstName=document.getElementById('first-name').value

    let LastName=document.getElementById('last-name').value

    let email=document.getElementById('email').value
    
    let city=document.getElementById('city').value

    let zip=document.getElementById('zip-code').value
    let state=document.getElementById('state').value
    let tnC= document.getElementById('t-and-c').checked     //when right mark or clicked on checkbox print true  if not clicked give false
    console.log(firstName,LastName,email,city,zip, tnC);
    //console.log(firstName.length);

    // if(firstName.length >= 2){
    //     console.log('first name is valid');     bcoz user not seeing the console part only developers can see it 
    // }
    // else{
    //     console.log('first name is invalid');
    // }
    // if(LastName.length >= 2){
    //     console.log('last name is valid');
    // }
    // else{
    //     console.log('last name is invalid');
    // }

    if(firstName.length >=2){
        document.getElementById('first-name-valid').style.display= 'block';
        document.getElementById('first-name-invalid').style.display="none";
    }else{
        document.getElementById('first-name-invalid').style.display= 'block';
        document.getElementById('first-name-valid').style.display="none";
    }
    if(LastName.length >=2){
        document.getElementById('last-name-valid').style.display= 'block';
        document.getElementById('last-name-invalid').style.display="none";
    }else{
        document.getElementById('last-name-invalid').style.display= 'block';
        document.getElementById('last-name-valid').style.display="none";
    }
    // Email :
    // 1. Must include '@'
    // 2. Must include '.'
    // 3. atlaest one char before' @'
    // 4. At least 2 char after last '.'
    

    // let lastIndex = email.lastIndexOf('.');
    // let lastChar =  email.substr(lastIndex + 1);
    // console.log(lastChar.length);

    
    if(email.includes('@') && 
       email.includes('.') && 
       email.indexOf("@") > 0 &&
       email.substr(email.lastIndexOf('.')+1).length >=2 ) {
        document.getElementById('email-valid').style.display= 'block';
        document.getElementById('email-invalid').style.display="none";
    }else{
        document.getElementById('email-invalid').style.display= 'block';
        document.getElementById('email-valid').style.display="none";
    }
    if(city.length >=3){
        document.getElementById('city-valid').style.display= 'block';
        document.getElementById('city-invalid').style.display="none";
    }else{
        document.getElementById('city-invalid').style.display= 'block';
        document.getElementById('city-valid').style.display="none";
    }

    // zip:
    // 1.it should have exact 6 chracters
    // 2.only numbers are allowed

    if(zip.length === 6 && !isNaN(parseInt(zip))){
        document.getElementById('zip-valid').style.display= 'block';
        document.getElementById('zip-invalid').style.display="none";
    }else{
        document.getElementById('zip-invalid').style.display= 'block';
        document.getElementById('zip-valid').style.display="none";
    }
    if(state !='None'){
        document.getElementById('state-valid').style.display= 'block';
        document.getElementById('state-invalid').style.display="none";
    }else{
        document.getElementById('state-invalid').style.display= 'block';
        document.getElementById('state-valid').style.display="none";
    }
}






