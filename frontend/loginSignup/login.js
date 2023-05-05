let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = form.email.value;
  let password = form.password.value;
  let payload = { email, password };
  login(payload);
});
async function login(payload) {
  const fetchedData = await fetch("http://localhost:4500/user/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await fetchedData.json();
  if (fetchedData.status == 200) {
    console.log(data);
    Swal.fire({
      icon: "success",
      title: "Yay! Login Successful 😍",
      showConfirmButton: false,
      timer: 2000,
    });
    localStorage.setItem("userID", data.userID);
    localStorage.setItem("username", data.username);
    localStorage.setItem("token", data.token);
    setTimeout(() => {
      window.location.href = "../index.html";
    }, "2000");
  } else {
    Swal.fire("Wrong Credentials ❌");
  }
}
