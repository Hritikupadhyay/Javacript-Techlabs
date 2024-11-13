const pets = [
    {
        id: 1,
        name: "Buddy",
        type: "Dog",
        age: "Adult",
        image: "https://placekitten.com/300/200",
        description: "Friendly and playful dog looking for a loving home."
    },
    {
        id: 2,
        name: "Whiskers",
        type: "Cat",
        age: "Kitten",
        image: "https://placekitten.com/300/201",
        description: "Adorable kitten who loves to snuggle."
    },
    {
        id: 3,
        name: "Bella",
        type: "Dog",
        age: "Senior",
        image: "https://placekitten.com/300/202",
        description: "Gentle and calm senior dog."
    },
   
];


function displayPets(filteredPets) {
    const petCardsContainer = document.getElementById("pet-listings");
    petCardsContainer.innerHTML = ""; 

    filteredPets.forEach(pet => {
        const petCard = document.createElement("div");
        petCard.classList.add("col-md-4"); 
        petCard.innerHTML = `
            <div class="pet-card">
                <img src="${pet.image}" alt="${pet.name}">
                <h3>${pet.name}</h3>
                <p>${pet.description}</p>
                <p><strong>Type:</strong> ${pet.type}</p>
                <p><strong>Age:</strong> ${pet.age}</p>
                <button onclick="viewDetails(${pet.id})" class="btn btn-primary">View Details</button>
            </div>
        `;
        petCardsContainer.appendChild(petCard);
    });
}


function searchPets() {
    const animalType = document.getElementById("animal-type").value;
    const age = document.getElementById("age").value;

    const filteredPets = pets.filter(pet => {
        const matchesType = animalType === "all" || pet.type.toLowerCase() === animalType.toLowerCase();
        const matchesAge = age === "all" || pet.age.toLowerCase() === age.toLowerCase();
        return matchesType && matchesAge;
    });

    displayPets(filteredPets);
}


displayPets(pets[1]);

