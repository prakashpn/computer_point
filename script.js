function scrollToCourses() {
    document.getElementById("courses").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("enquiryForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;

    // let data = {
    //     name: document.getElementById("name").value,
    //     email: document.getElementById("email").value,
    //     message: document.getElementById("message").value
    // };

    let data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    const status = document.getElementById("status");
    status.innerText = "Sending...";

    try {
        // const response = await fetch("API_GATEWAY_URL_HERE", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(data)
        // });

        // const result = await response.json();
        // status.innerText = result.message || "Enquiry sent successfully!";
        status.innerText = "✅ Enquiry sent successfully!";
        form.reset();
    } catch (err) {
        status.innerText = "Something went wrong. Try again.";
        console.log("Error:", err);

    }
});


