console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(obj => obj.message.forEach(img => {
        const image = document.createElement("img");
        image.src = img;
        image.alt = "Picture of a Dog"

        document.getElementById("dog-image-container").append(image);
    })
    )
    .catch(error => alert(error));

    fetch(breedUrl)
    .then(resp => {
        if (!resp.ok) {
            alert("Faulty response");
        } 
        return resp.json();
    })
    .then(obj => { 
        breeds = Object.keys(obj.message);
        // for (let breed in obj.message) {
        //     const li = document.createElement("li");
        //     li.textContent = breed;
        //     li.addEventListener("click", () => {
        //         li.style.color = "red";
        //     })
            
        //     document.getElementById("dog-breeds").append(li);
        // }
        // const dropdown = document.getElementById("breed-dropdown");
        // dropdown.addEventListener("click", (event, obj) => {

        //     if (event.target.value !== "default") {

        //     }
        // })
    })
    .catch(error => alert(error));
    //     .forEach(breed => {
    //     debugger;

    // })
    // )
})