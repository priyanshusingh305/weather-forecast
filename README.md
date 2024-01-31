# Weather App

## Introduction

This Weather App is a simple web application built with React.js that allows users to fetch current weather and 5-day forecast data for a specified city. The app utilizes the OpenWeatherMap API to retrieve weather information and offers users the option to view temperatures in either Celsius or Fahrenheit.

## Features

- Fetches current weather data including temperature, humidity, wind speed, and weather description.
- Displays a 5-day forecast with date, weather icon, temperature, and description.
- Allows users to input a city name and select temperature units (Celsius or Fahrenheit).
- Provides dynamically updating weather icons based on the current weather conditions.
- Responsive design for use on desktop and mobile devices.

## Technologies Used

- React.js
- Axios
- OpenWeatherMap API

## Installation and Usage

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd weather-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/) and set it as an environment variable:
   ```
   REACT_APP_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```
   npm start
   ```

6. Access the application in your browser at `http://localhost:3000`.

## How to Contribute

If you'd like to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new Pull Request.

## Credits

This project was created by [Your Name]. It is inspired by various weather applications and tutorials available online.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
