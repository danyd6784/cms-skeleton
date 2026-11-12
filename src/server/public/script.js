const resultsContainer = document.querySelector("#canonicalPeopleResults");
const statusBox = document.getElementById("create-result");
const searchForm = document.getElementById("searchForm");
const createForm = document.getElementById("createForm");
const refreshButton = document.getElementById("refresh");

const generateResultRows = (dataCollection) => {
    resultsContainer.replaceChildren();
    dataCollection.forEach((result) => {
        const row = document.createElement("tr");

        let id = document.createElement("td");
        let firstName = document.createElement("td");
        let middleName = document.createElement("td");
        let lastName = document.createElement("td");
        let prefix = document.createElement("td");
        let suffix = document.createElement("td");
        let createdAt = document.createElement("td");
        let updatedAt = document.createElement("td");

        id.textContent = result.canonical_person_id;
        firstName.textContent = result.first_name;
        middleName.textContent = result.middle_name;
        lastName.textContent = result.last_name;
        prefix.textContent = result.prefix;
        suffix.textContent = result.suffix;
        createdAt.textContent = result.created_at;
        updatedAt.textContent = result.updated_at;

        row.appendChild(id);
        row.appendChild(firstName);
        row.appendChild(middleName);
        row.appendChild(lastName);
        row.appendChild(prefix);
        row.appendChild(suffix);
        row.appendChild(createdAt);
        row.appendChild(updatedAt);

        resultsContainer.appendChild(row);
    });
}

const getCanonicalPeople = async () => {
    // Fetch records from the API
    // Convert the response into JSON
    // Display the records
    const response = await fetch("/api/canonical-people/")

    if (!response.ok){
        throw new Error("Failed to retrieve canonical people")
    }

    const data = await response.json();

    generateResultRows(data);

};


searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const formData = new FormData(searchForm);

        const searchQuery = formData.get("searchQuery");

        const params = new URLSearchParams({
            query: searchQuery,
        });

        const response = await fetch(`/api/canonical-people?${params}`);

        if (!response.ok) {
            throw new Error("Failed to search");
        }

        const searchResults = await response.json();

        generateResultRows(searchResults);
    } catch (error) {
        console.error("Search failed:", error);
    }
});



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

refreshButton.addEventListener("click", async () => {
    getCanonicalPeople()
});

getCanonicalPeople()
