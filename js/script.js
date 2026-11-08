
const dogImage = document.getElementById("dogImage");
const dogBtn = document.getElementById("dogBtn");

async function getDog() {
    try {
        const response = await fetch(
            "https://dog.ceo/api/breeds/image/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch dog");
        }

        const data = await response.json();
        dogImage.src = data.message;

        const parts = data.message.split("/");
        const breed = parts[4].replace("breeds-", "");

        const breedName = breed
         .split("-")
        .reverse()
         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

        const names = ["Mochi", "Cookie", "Luna", "Biscuit", "Coco", "Milo", "Ace", "Cooper", "Seven", "Bella", "Willow", "Maverick","Serena"];
        const randomName = names[Math.floor(Math.random() * names.length)];

        document.getElementById("dogName").textContent =
         "Hi, I'm " + randomName + "!";

        document.getElementById("dogBreed").textContent =
        "Breed: " + breedName;

        } catch (error) {
        console.error(error);
        alert("Could not load a dog. Please try again.");
    }
}

dogBtn.addEventListener("click", getDog);