let form_contact = document.querySelector(".form_contact")
let contact_btn = document.querySelector(".contact_btn")

contact_btn.addEventListener("click" , function(event) {
    const contact = form_contact.value.trim()
    console.log(contact_btn);
    if (!(/998(9[0123456789]|3[3]|7[1]|8[8])[0-9]{7}$/).test(contact)) {
        event.preventDefault()
      return alert("invalit contact")
    }
    
  })