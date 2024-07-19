const password = document.querySelector(".password");
const revealPass = document.querySelector(".open");
const hidePass = document.querySelector(".close");

function hideShow() {
  if (password.type === "password") {
    password.type = "text";
    revealPass.style.display = "flex";
    hidePass.style.display = "none";
  } else {
    password.type = "password";
    revealPass.style.display = "none";
    hidePass.style.display = "flex";
  }
}

const imageInput = document.getElementById("profile-pics-input");
const profilePreview = document.querySelector(".profile-pics");

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      profilePreview.src = reader.result;
      profilePreview.style.cssText = `
      opacity: 1;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      object-fit: cover;
      `;
    });
    reader.readAsDataURL(file);
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
