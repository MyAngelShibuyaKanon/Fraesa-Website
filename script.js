const hamMenu = document.querySelector(".hamMenu");
const offHamMenu = document.querySelector(".offHamMenu");

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offHamMenu.classList.toggle('active');
});

let form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let fullname = document.getElementById("fullName");
    let email = document.getElementById("email");
    let company = document.getElementById("company");
    let message = document.getElementById("message");

    console.log(
        `This form has a name of ${fullname.value}, 
        an email of ${email.value}, a company name of ${company.value}, and a message of ${message.value}`
      );

    fetch("https://f565-124-217-83-118.ngrok-free.app/sendFormDiscord/", {
        method: "POST",
        body: JSON.stringify({
          fullname: fullname.value,
          email: email.value,
          company: company.value,
          message: message.value
        }),

        headers: {
          "content-type": "application/json; charset=UTF-8"
        }
      })
    .then((response) => response.json())
    .then((json) => console.log(json));
});


  