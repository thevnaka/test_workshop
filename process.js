
let user_input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('find');

async function process() {
    try{
        const response = await fetch('/directory.json');

        if (!response.ok){
            throw new Error('HTTP error, status = ' + response.status);
        }

        const database = await response.json();

        const country = user_input.value.trim();
        const result = database.find(entry => entry.name.toLowerCase() === country.toLowerCase());

        if (result){
            const processed = `The country is ${result.country}`
            output.textContent = processed;
        }

        else{
            output.textContent = "Country not found";
        }
    }


    catch (error){
        console.log("Error fetching data: ", error);
        output.innerHTML = "Error fetching data";
}
}

button.addEventListener('click', process);