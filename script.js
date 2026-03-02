// ================= FORM VALIDATION =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const message = document.getElementById("message");

    let valid = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        valid = false;
    }

    if (email.value.trim() === "") {
        email.nextElementSibling.textContent = "Email is required";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.nextElementSibling.textContent = "Invalid email format";
        valid = false;
    }

    if (phone.value.trim() === "") {
        phone.nextElementSibling.textContent = "Phone is required";
        valid = false;
    }

    if (message.value.trim() === "") {
        message.nextElementSibling.textContent = "Message is required";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});


// ================= IMAGE GALLERY =================

const addImageBtn = document.getElementById("addImage");
const imageInput = document.getElementById("imageInput");
const gallery = document.getElementById("gallery");

addImageBtn.addEventListener("click", function() {

    const file = imageInput.files[0];

    if (!file) {
        alert("Please select an image.");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        const div = document.createElement("div");
        div.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = e.target.result;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = function() {
            div.remove();
        };

        div.appendChild(img);
        div.appendChild(deleteBtn);
        gallery.appendChild(div);
    };

    reader.readAsDataURL(file);

    imageInput.value = "";
});