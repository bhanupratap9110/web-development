document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const fn = document.getElementById("FullName").value;
  const em = document.getElementById("email").value;
  const ps = document.getElementById("password").value;

  const dataPacket = {
    FullName: fn,
    Email: em,
    Password: ps,
  };

  console.log(dataPacket);

  document.getElementById("FullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});

// Reset
document.querySelector("form").addEventListener("reset", (event) => {
  event.preventDefault();

  // Confirmenation
  confirm("Are Your Sure") && window.location.reload();
});

// KeyPress
document.addEventListener("keydown", (event) => {
  let keyPress = event.key;
  keyPress === "Escape" && window.Location.reload();
  console.log(keyPress);
});