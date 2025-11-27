# 🌤️ WEATHER-FORECAST-APP

A beautiful, modern weather application that provides real-time weather information for cities worldwide using the OpenWeatherMap API. Built with vanilla JavaScript featuring an animated glassmorphism UI and seamless user experience.

![Weather App Banner](https://img.shields.io/badge/Weather-Forecast-blue?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![API](https://img.shields.io/badge/OpenWeatherMap-API-orange?style=for-the-badge)

## 🌟 Features

### Core Functionality
- **Real-time Weather Data** - Get current weather information for any city worldwide
- **Temperature Display** - Shows temperature in Celsius with large, readable format
- **Weather Details** - Displays humidity, weather conditions, and descriptive text
- **Weather Icons** - Dynamic icons representing current weather conditions
- **City Search** - Instant search with form validation
- **Error Handling** - User-friendly error messages for invalid city names
- **Responsive Design** - Works flawlessly on desktop, tablet, and mobile devices

### Technical Highlights
- **OpenWeatherMap API Integration** - RESTful API calls for weather data
- **Async/Await Pattern** - Modern JavaScript for API handling
- **Dynamic DOM Manipulation** - Efficient content rendering without page reloads
- **Glassmorphism Design** - Frosted glass effect with backdrop blur
- **Animated Background** - Smooth gradient transitions with floating orbs
- **Form Validation** - Ensures valid city input before API calls
- **Clean Architecture** - Modular, maintainable code structure

## 🚀 Demo

### User Flow
1. **Enter City Name** → Type any city name in the search box
2. **Get Weather** → Click button or press Enter to fetch weather data
3. **View Results** → See temperature, humidity, weather condition, and icon
4. **Error Handling** → Invalid cities show friendly error message

## 📸 Screenshots

<!-- Add your screenshots here -->
<p align="center">
  <img width="2120" height="1230" alt="screely-1764049809396" src="https://github.com/user-attachments/assets/20e2e46d-dc1f-4181-88ea-42d5815267db" />
  ``
 <img width="2120" height="1230" alt="screely-1764050293428" src="https://github.com/user-attachments/assets/39b8bff6-7798-4d5a-8277-7954f3710aab" />
  ``
  <img width="2120" height="1230" alt="screely-1764050348029" src="https://github.com/user-attachments/assets/15db0b05-3351-401a-a1a1-5b8bae6d063b" />

</p>

## 🛠️ Tech Stack

- **HTML5** - Semantic markup structure
- **CSS3** - Custom animations and Tailwind utility classes
- **JavaScript (ES6+)** - Vanilla JS with async/await
- **Tailwind CSS** - Utility-first CSS framework
- **OpenWeatherMap API** - Weather data provider
- **Fetch API** - Modern HTTP requests

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- OpenWeatherMap API key (free tier available)
- Internet connection for API calls

### Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/rudra2609-06/WEATHER-FORECAST-APP.git
cd WEATHER-FORECAST-APP
```

2. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Generate a new API key

3. **Configure API key**
   - Open `script.js`
   - Locate the `API_KEY` constant
   - Replace with your personal API key

4. **Launch the application**
```bash
# Option 1: Direct file open
open index.html

# Option 2: Using Python server (recommended)
python -m http.server 8000

# Option 3: Using Node.js
npx http-server

# Option 4: VS Code Live Server
# Right-click index.html → Open with Live Server
```

5. **Access the app**
```
http://localhost:8000
```

That's it! No build process or npm packages required. 🎉

## 📂 Project Structure


WEATHER-FORECAST-APP/
│
├── index.html          # Main HTML structure
├── script.js           # Application logic and API calls
├── README.md           # Project documentation
└── screenshots/        # App screenshots (optional)


### File Overview

**index.html**
- Glassmorphism card design
- Input form for city search
- Weather result container
- Error message display
- Animated gradient background

**script.js**
- Event listener setup
- Form submission handler
- API fetch function
- Weather data display logic
- Error handling
- Dynamic DOM manipulation

## 🎯 Usage

### For Users

1. **Search for Weather**
   - Enter any city name (e.g., "London", "New York", "Tokyo")
   - Click "Get Weather" button or press Enter
   - View real-time weather information

2. **Understanding the Display**
   - **City Name** - Large gradient text at top
   - **Temperature** - Big number in Celsius
   - **Weather Icon** - Visual representation of conditions
   - **Description** - Text description (e.g., "clear sky", "light rain")
   - **Humidity** - Percentage of atmospheric moisture

3. **Error Handling**
   - If city not found, error message displays
   - Submit button hides to prevent multiple failed requests
   - Refresh page or reload to search again

## 🔧 Configuration

### API Settings

**Free Tier Limits:**
- 60 calls per minute
- 1,000,000 calls per month
- Current weather data only

**Available Units:**
- Standard (Kelvin) - Default
- Metric (Celsius, meter/sec)
- Imperial (Fahrenheit, miles/hour)

### Weather Data Provided

The app displays the following information:
- City name
- Current temperature
- Weather condition description
- Weather icon
- Humidity percentage

## 🎨 Customization

### Color Scheme

Current theme uses dark purple/blue gradients:
- **Background**: Deep purple to dark blue gradient with animation
- **Card**: Glassmorphism effect with white/10 opacity and backdrop blur
- **Title**: Purple to pink gradient text
- **Button**: Purple to pink gradient background
- **Text**: White and light gray tones

### Animation Features

- **Background Animation**: Smooth gradient shifts creating dynamic atmosphere
- **Card Float Effect**: Subtle floating animation on the main card
- **Hover Effects**: Button scale and color transitions
- **Focus States**: Input field highlights with purple ring

### Responsive Design

- Mobile-optimized layout (< 640px)
- Tablet-friendly interface (640px - 1024px)
- Desktop full experience (> 1024px)
- Touch-friendly buttons and inputs

## 🐛 Known Issues

- Temperature displayed in Kelvin (needs conversion or API unit parameter)
- No temperature unit toggle (Celsius/Fahrenheit)
- Error state requires page refresh to search again
- No loading indicator during API calls
- No search history or recent searches
- Limited to current weather (no forecast)
- API key exposed in client-side code (okay for free tier, but not production)

## 🚀 Future Enhancements

- [ ] **5-Day Forecast** - Extended weather predictions
- [ ] **Geolocation Support** - Auto-detect user location
- [ ] **Temperature Unit Toggle** - Switch between °C and °F
- [ ] **Search History** - Save recent searches
- [ ] **Favorite Cities** - Quick access to saved locations
- [ ] **Weather Maps** - Interactive weather visualization
- [ ] **Hourly Forecast** - Hour-by-hour predictions
- [ ] **Weather Alerts** - Severe weather notifications
- [ ] **Multiple Locations** - Compare weather across cities
- [ ] **Dark/Light Mode** - Theme toggle
- [ ] **Loading Indicators** - Better UX during API calls
- [ ] **Offline Support** - Cache last fetched data
- [ ] **Weather Graphs** - Temperature trends visualization
- [ ] **Social Sharing** - Share weather on social media
- [ ] **Voice Search** - Search cities by voice
- [ ] **Backend Proxy** - Secure API key storage
- [ ] **PWA Support** - Installable web app
- [ ] **Multiple Languages** - Internationalization
- [ ] **Air Quality Index** - Pollution data
- [ ] **UV Index** - Sun exposure information

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow existing code style and structure
- Add comments for complex logic
- Test on multiple browsers and devices
- Update README for new features
- Use semantic commit messages
- Ensure responsive design works
- Test with valid and invalid city names

### Commit Message Format

```
feat: add temperature unit toggle
fix: resolve API error handling issue
docs: update installation instructions
style: improve glassmorphism effects
refactor: optimize API call function
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rudra Thakkar**
- GitHub: [@rudra2609-06](https://github.com/rudra2609-06)
- LinkedIn: [Rudra Thakkar](https://www.linkedin.com/in/rudranthakkar)
- Email: rudra22822@gmail.com

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - For providing the weather API
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [MDN Web Docs](https://developer.mozilla.org/) - For JavaScript documentation
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - For modern HTTP requests
- Community contributors and testers

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Send an email to rudra22822@gmail.com
- Reach out on LinkedIn
- Check the [OpenWeatherMap API Documentation](https://openweathermap.org/api)

## 🔗 Useful Links

- [OpenWeatherMap API Docs](https://openweathermap.org/current)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [JavaScript Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Async/Await Tutorial](https://javascript.info/async-await)

---

<div align="center">

**Made with ❤️ and JavaScript**

⭐ Star this repo if you found it helpful!

[Report Bug](https://github.com/rudra2609-06/WEATHER-FORECAST-APP/issues) · [Request Feature](https://github.com/rudra2609-06/WEATHER-FORECAST-APP/issues)

</div>
```

I've removed all the code examples while keeping the comprehensive documentation style. The README now focuses on descriptions and explanations rather than code snippets.
