document.addEventListener("DOMContentLoaded", () => {
	const displayWeatherResult = document.getElementById("weatherResult");
	const inputCityForm = document.querySelector("#inputCity");
	const displayError = document.querySelector(".display-error");

	const API_KEY = `9c9ad430b5b5e3fc27b1c46b05fc9718`;

	inputCityForm.addEventListener('submit',async(e) => {
		e.preventDefault();
		handleSubmit();
	});
	
	async function handleSubmit(){
		const enteredData = inputCityForm.querySelector("input").value.trim();
		if(!enteredData) return;
		const fetchedData = await fetchData(enteredData);
		try {
			if (!fetchedData) {
				showError();
			}
			displayWeatherData(fetchedData);
		} catch (error) {
			showError();
		}
	}

	async function fetchData(cityName) {
		const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
		const response = await fetch(API_URL);
		if(!response.ok) return;
		const actualFetchedData = await response.json();
		console.log(actualFetchedData);
		return actualFetchedData;
	}

	function displayWeatherData(data){
		inputCityForm.querySelector("button").classList.add("hidden");
		const { name, main, weather } = data;

		const wrapperDiv = document.createElement('div');
		wrapperDiv.className = "text-center mt-10";

		const title = document.createElement('h2');
		title.innerText = name;
		title.className = "text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg";

		const temperature = document.createElement('h3');
		const celsius = Math.round(main.temp - 273.15);
		temperature.innerHTML = `${celsius}<span class="text-5xl font-light">°C</span>`;
		temperature.className = "text-8xl font-extralight text-white my-4 tracking-tighter";

		const humidity = document.createElement('p');
		humidity.innerHTML = `<span class="text-gray-400 text-sm">Humidity • </span><span class="text-2xl font-medium">${main.humidity}%</span>`;
		humidity.className = "text-gray-300";

		const weatherDescription = document.createElement("p");
		weatherDescription.innerText = weather[0].description;
		weatherDescription.className = "text-xl capitalize text-gray-200 mt-2 tracking-wide";

		const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
		const icon = document.createElement('img');
		icon.src = iconUrl;
		icon.alt = weather[0].description;
		icon.className = "w-24 h-24 mx-auto mb-4 drop-shadow-2xl";

		// Append in order
		wrapperDiv.appendChild(icon);
		wrapperDiv.appendChild(title);
		wrapperDiv.appendChild(temperature);
		wrapperDiv.appendChild(weatherDescription);
		wrapperDiv.appendChild(humidity);
		displayWeatherResult.classList.remove("hidden");
		displayWeatherResult.appendChild(wrapperDiv);
	}
	
	function showError(){
		inputCityForm.querySelector("button").classList.add("hidden");
		displayError.classList.remove("hidden");
	}













});