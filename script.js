// function validate (){
//     let name = document.getElementbyId('name');
//     (local let) name:   
//     if (user name.value.trim() ==""  ||password.value.trim()=="")
//     { 
//         //alert("Blank Name");
//        // name.style.border = "solid 3px red";
//         //document.getElementbyId("1b1user")
//        // .style.visuability="visible";
//         // alert("no blank values allowed");
//        // return false;
//     }
//     //else
//     {
//         true;
//    }
//  }

let form = document.querySelector('#parking-form')
form.addEventListener("submit", e => {
  e.preventDefault();
  valid()
})

function valid() {
  let name = document.querySelector('#name');
  let nameField = document.querySelector("#name-field")
  //console.log(name.value);
  if (name.value.trim() === '') {
    nameField.classList.add("input-invalid")
  }
  let car = document.querySelector('#car-year');
  //console.log(car);
  let form = document.querySelector('#parking-form');
  let date = document.querySelector('#start-date');
  let days = document.querySelector('#days');
  let creditcard = document.querySelector('#credit-card');
  let cvv = document.querySelector('#cvv');
  let expiration = document.querySelector('#expiration');
  

}


// console.log('Add validation!');
// function validateCardNumber(number) {
//     var regex = new RegExp("^[0-9]{16}$");
//     if (!regex.test(number))
//         return false;

//     return luhnCheck(number);
// }

// function luhnCheck(val) {
//     var sum = 0;
//     for (var i = 0; i < val.length; i++) {
//         var intVal = parseInt(val.substr(i, 1));
//         if (i % 2 == 0) {
//             intVal *= 2;
//             if (intVal > 9) {
//                 intVal = 1 + (intVal % 10);
//             }
//         }
//         sum += intVal;
//     }
//     return (sum % 10) == 0;
// }