const resultsContainer = document.querySelector("#canonicalPeopleResults");
const statusBox = document.getElementById("create-result");
const createForm = document.getElementById("createForm")

const getCanonicalPeople = async () => {
    // Fetch records from the API
    // Convert the response into JSON
    // Display the records
    const response = await fetch("/api/canonical-people/")

    if (!response.ok){
        throw new Error("Failed to retrieve canonical people")
    }

    const data = await response.json();

    data.forEach(result => {
        const row = document.createElement("tr")

        let id = document.createElement("td")
        let firstName = document.createElement("td")
        let middleName = document.createElement("td")
        let lastName = document.createElement("td")

        id.textContent = result.canonical_person_id
        firstName.textContent = result.first_name
        middleName.textContent = result.middle_name
        lastName.textContent = result.last_name

        row.appendChild(id);
        row.appendChild(firstName);
        row.appendChild(middleName);
        row.appendChild(lastName);

        resultsContainer.appendChild(row)
    });

};


createForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(createForm);
    
    const personData = {
        fname : formData.get("fname"),
        mname : formData.get("mname"),
        lname : formData.get("lname"),
        pfx : formData.get("pfx"),
        sfx : formData.get("sfx")
    }

    const response = await fetch("/api/canonical-people/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(personData)
    })

    if(!response.ok){
        throw new Error("Failed to create canonical person record");
    }
    const createdPerson = await response.json()
    statusBox.textContent = JSON.stringify(createdPerson)
})

getCanonicalPeople()
