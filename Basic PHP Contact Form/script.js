// JavaScript Documentation

// Select the form and status text elements
const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

// Prevent the form from submitting and handle form submission
form.onsubmit = (e) => {
  e.preventDefault();

  // Set status text style and content while processing
  statusTxt.style.color = "#0D6EFD";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";

  // Disable the form during submission
  form.classList.add("disabled");

  // Create a new XMLHttpRequest object
  let xhr = new XMLHttpRequest();

  // Configure the request (method, URL, and asynchronous flag)
  xhr.open("POST", "message.php", true);

  // Define what to do when the request loads
  xhr.onload = () => {
    // Check if the request is complete and successful (status code 200)
    if (xhr.readyState == 4 && xhr.status == 200) {
      // Get the response from the server
      let response = xhr.response;

      // Check the response for specific keywords to determine success or failure
      if (
        response.indexOf("required") != -1 ||
        response.indexOf("valid") != -1 ||
        response.indexOf("failed") != -1
      ) {
        // If an error occurred, set the status text color to red
        statusTxt.style.color = "red";
      } else {
        // If successful, reset the form and hide the status text after 3 seconds
        form.reset();
        setTimeout(() => {
          statusTxt.style.display = "none";
        }, 3000);
      }

      // Set the status text content with the response and enable the form
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  };

  // Create a FormData object from the form and send the request
  let formData = new FormData(form);
  xhr.send(formData);
};
