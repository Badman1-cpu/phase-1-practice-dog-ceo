console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1: Fetch and render dog images
    const dogImagesContainer = document.getElementById("dog-images");
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            data.message.forEach(imageUrl => {
                const imgElement = document.createElement("img");
                imgElement.src = imageUrl;
                dogImagesContainer.appendChild(imgElement);
            });
        })
        .catch(error => console.error("Error fetching dog images:", error));

    // Challenge 2: Fetch and render dog breeds
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            breeds.forEach(breed => {
                const liElement = document.createElement("li");
                liElement.textContent = breed;
                dogBreedsList.appendChild(liElement);
            });
        })
        .catch(error => console.error("Error fetching dog breeds:", error));

    // Challenge 3: Change font color on click
    dogBreedsList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
            event.target.style.color = "blue"; // Change color to blue on click
        }
    });

    // Challenge 4: Filter dog breeds by selected letter
    const breedFilterSelect = document.getElementById("breed-filter");

    breedFilterSelect.addEventListener("change", () => {
        const selectedLetter = breedFilterSelect.value.toLowerCase();
        const breedItems = dogBreedsList.getElementsByTagName("li");

        for (let item of breedItems) {
            if (selectedLetter === "" || item.textContent.toLowerCase().startsWith(selectedLetter)) {
                item.style.display = ""; // Show the item if it matches the filter
            } else {
                item.style.display = "none"; // Hide the item if it doesn't match the filter
            }
        }
    });
});
