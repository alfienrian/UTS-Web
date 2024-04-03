"use strict";

// ambil elemen form dan password untuk validasi
const forms = document.querySelectorAll(".needs-validation");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// validasi konfirmasi password
password.addEventListener("input", event => {
  confirmPassword.setAttribute("pattern", password.value);
});

// tambahkan event submit pada form
Array.from(forms).forEach(form => {
  form.addEventListener(
    "submit",
    event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (password.value !== confirmPassword.value) {
        event.preventDefault();
        confirmPassword.classList.add("is-invalid");
      } else {
        confirmPassword.classList.remove("is-invalid");
      }

      form.classList.add("was-validated");
    },
    false
  );
});
