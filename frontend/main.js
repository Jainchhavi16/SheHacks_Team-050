document.getElementById("sub").addEventListener("click", loginf);

function loginf(e) {
  e.preventDefault();
  let msg = document.getElementById("msg").value;
  console.log(msg);
  fetch("http://127.0.0.1:5000/", {
    method: "POST",
    headers: {
      Accept: "application/json,*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      msg: msg,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      let diiv = document.getElementById("diiv");
      diiv.innerHTML = res.data.message;
      //res.message if we do .send(data)
    })
    .catch((error) => console.log(error));
}
