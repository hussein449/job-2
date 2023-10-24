
function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const summary = document.getElementById("summary").value;

    const generatedResume = `
        <h2>${name}</h2>
        <p>${email}</p>
        <p>${address}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
    `;

    document.getElementById("generated-resume").innerHTML = generatedResume;
}
