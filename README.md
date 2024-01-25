# Web Application Readme Documentation

Forex Trading App

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Components](#components)
- [Configuration](#configuration)
- [Pages](#pages)

## Overview

The web application is a Forex Trading App that provides a platform for users to engage with cryptocurrency-related information. 
It includes various components for displaying banner content, trending cryptocurrency data in a carousel, comparative line charts for historical prices, 
and detailed historical price information for individual cryptocurrencies. The application also features a header with app title, navigation links, 
and currency selection dropdown. It utilizes React, Material-UI, axios, react-chartjs-2, react-alice-carousel, and CanvasJS for charting, with state management through React Context API.

## Technologies Used

#### Libraries and Frameworks
  - React
  - Material-UI
  - react-router-dom
  - axios
  - react-chartjs-2
  - react-alice-carousel,

#### Styling and Theming
  - @material-ui/core

#### State Management
  - React Context API

#### Charting Library
  - CanvasJS

#### Development Tools
  - Babel
  - Webpack
  - Create React App
  - Git
  - npm (Node Package Manager)

## Components

### Banner

  - ### Banner.js:
    The Banner.js file defines a React component named Banner that represents the main banner section of the web application. 
    It uses Material-UI components and a Carousel component to create an engaging visual display. 
    The banner includes a background image, a tagline, and a carousel displaying trending cryptocurrency information

    - **Dependencies:**
        - Container, makeStyles, and Typography from @material-ui/core for styling.
        - Carousel component for displaying trending cryptocurrency information.

    - **Styles:**
        - banner: Sets the background image and styling for the banner.
        - bannerContent: Styles for the content within the banner, including height, flex layout, and padding.
        - tagline: Styles for the tagline section, including text alignment and centering.
        - carousel: Styles for the carousel section, including height and alignment.

    - **Functionality:**
        - **Styling:**
            - Uses makeStyles to define styles for different sections of the banner, such as the background, content, tagline, and carousel.
    
        - **Content Structure:**
            - Consists of a div with the class banner, representing the entire banner section.
            - Contains a Container with the class bannerContent that holds the tagline and the Carousel component.
    
        - **Tagline:**
            - Displays a tagline section with a title (Typography variant "h2") and a subtitle (Typography variant "subtitle2").
    
        - **Carousel:**
            - Includes the Carousel component, which is imported and rendered within the banner.
      
  - ### Carousel.js:
    The Carousel.js file defines a carousel component using the react-alice-carousel library. 
    It fetches and displays trending cryptocurrency data using Axios for API calls. 
    The component dynamically adjusts the number of items displayed based on the screen width.

    - **Functionality:**
      - Fetches trending cryptocurrency data from the specified API endpoint.
      - Dynamically adjusts the number of items displayed in the carousel based on screen width.
      - Displays each cryptocurrency item with an image, symbol, price change percentage, and current price.
      - Links each item to the detailed page for that cryptocurrency.
  
    - **Dependencies:**
      - Material-UI for styling.
      - Axios for making API calls.
      - react-alice-carousel for creating a responsive carousel. 

 ### CoinCompare.js:
  The CoinCompare.js file defines a React component named CoinCompare that displays a comparative line chart for the historical prices of a cryptocurrency from two exchanges, Kraken and Binance.
  The component fetches live price data from both exchanges at regular intervals and updates the chart accordingly.

  - **Dependencies:**
    - axios for making API requests.
    - useEffect and useState from React for handling side effects and managing state.
    - Line from react-chartjs-2 for rendering the line chart.
    - CircularProgress, createTheme, makeStyles, ThemeProvider from @material-ui/core for styling.
    - SelectButton component for selecting chart time duration.
    - chartDays from config/data for predefined chart duration options.
    - CryptoState from CryptoContext for managing the selected currency.

 - **Functionality:**
    - **State Initialization**:
      Initializes state variables using useState for Kraken data (krakenData), Binance data (binanceData), the list of exchanges (exchanges), the selected currency (currency), a flag (flag), and the selected time duration in days (days).

    - **Styling**:
      Defines styles using makeStyles for the container.

    - **Data Fetching**:
      Utilizes useEffect to set up an interval that fetches live price data for both Kraken and Binance exchanges from a local server (http://localhost:5000/getData). The data is then stored in the corresponding state variables (krakenData and binanceData).

    - **Chart Rendering**:
      Utilizes the Line component from react-chartjs-2 to render a line chart.
      Configures the chart with labels based on the time of each data point and datasets for Kraken and Binance prices.

    - **Date Formatting**:
      Formats the x-axis labels with the time of each data point.

    - **Dynamic Theming**:
      Applies a dark theme using createTheme and ThemeProvider from @material-ui/core.

### CoinInfo.js:
  The CoinInfo.js file defines a React component named CoinInfo that displays historical price information for a cryptocurrency. 
  It uses the react-chartjs-2 library to render a line chart based on the selected time duration. 
  The component fetches historical price data from an external API and allows users to switch between different time durations using a SelectButton component.

  - **Dependencies:**
    - axios for making API requests.
    - useEffect and useState from React for handling side effects and managing state.
    - Line from react-chartjs-2 for rendering the line chart.
    - CircularProgress, createTheme, makeStyles, ThemeProvider from @material-ui/core for styling.
    - SelectButton for selecting different time durations.
    - chartDays from config/data for predefined time duration options.
    - CryptoState from CryptoContext for managing the selected currency.
    - Chart and registerables from chart.js for configuring chart options.

   - **Functionality:**
      - **State Initialization:**
          Initializes state variables using useState for historical data (historicData), the selected time duration in days (days), the selected currency (currency), and a flag (flag) for conditional rendering.
  
      - **Styling:**
          Defines styles using makeStyles for the container.
  
      - **Data Fetching:**
          Defines a function (fetchHistoricData) that fetches historical price data for the specified cryptocurrency, time duration, and currency. It sets the retrieved data in the state.
  
      - **UseEffect Hook:**
          Utilizes useEffect to fetch historical data when the component mounts or when the selected time duration (days) changes.
  
      - **Chart Rendering:**
          Utilizes the Line component from react-chartjs-2 to render a line chart.
          Configures the chart with labels based on the time of each data point and datasets for the historical prices.
  
      - **Date Formatting:**
          Formats the x-axis labels differently based on whether the selected time duration is 1 day or more.
  
      - **Dynamic Theming:**
          Applies a dark theme using createTheme and ThemeProvider from @material-ui/core.
  
      - **Loading Indicator:**
          Displays a circular progress indicator while the data is being fetched.
  
      - **Time Duration Selection:**
          Allows users to select different time durations using SelectButton. The component updates the chart and fetches data accordingly.

### Header.js: 
  The Header.js file defines a React component named Header that represents the header of the web application. 
  It includes an app title, a navigation link to the home page, and a currency selection dropdown. The header is styled using Material-UI components and a dark theme.

  - **Dependencies:**
    - AppBar, Container, MenuItem, Select, Toolbar, and Typography from @material-ui/core for building the header.
    - createTheme and makeStyles from @material-ui/core/styles for styling.
    - useNavigate from react-router-dom for programmatic navigation.
    - CryptoState from CryptoContext for managing the selected currency.
  
  - **Functionality:**
      - **Styling:**
          - Defines styles using makeStyles for the title, specifying color, font family, and cursor.
  
      - **Theme Configuration:**
          - Applies a dark theme using createTheme and ThemeProvider from @material-ui/core.
  
      - **Currency Selection:**
          - Provides a currency selection dropdown (Select) allowing users to choose between USD and INR.
          - Updates the selected currency in the global state (CryptoState) on selection change.
  
      - **Navigation:**
          - Uses useNavigate for programmatic navigation to the home page ('/') when clicking on the app title.
  
      - **Header Structure:**
          - Consists of an AppBar with a transparent background positioned statically.
          - Contains a Container with a Toolbar inside.
          - Includes the app title (Typography) and the currency selection dropdown (Select) in the Toolbar.

### SelectButton.js:
  The SelectButton.js file defines a React component named SelectButton that represents a clickable button with customizable styles.
  This component is designed to be used for selecting options, and its appearance can be adjusted based on whether it is currently selected or hovered.

  - **Dependencies:**
      makeStyles from @material-ui/core for defining styles.

  - **Functionality:**
      - **Styles:**
          Uses makeStyles to define styles for the SelectButton component.
          Styles include border, border radius, padding, font family, cursor, background color, text color, font weight, and hover effects.
          Width is set to 22% for consistent button sizes.
  
      - **Component Structure:**
          Consists of a span element with the class selectbutton.
          The button's appearance is determined by the provided selected prop.
  
      - **Event Handling:**
          Executes the onClick function when the button is clicked.
  
      - **Dynamic Styling:**
          The button background, text color, and font weight change based on whether the button is selected or hovered.

## Configuration

### data.js
  The data.js file exports an array named chartDays, which contains objects representing different time duration options for a chart. 
  Each object has a label indicating the time duration (e.g., "24 Hours", "30 Days") and a corresponding value representing the number of days for that duration.

## Pages

### App.js
  The App.js file defines the main entry point for the React application.
  It sets up the application structure, includes the header, and defines routes using react-router-dom for navigation between pages. 
  Additionally, it applies styling using Material-UI.
  - **Dependencies:**
      - Header component for the application header.
      - BrowserRouter, Route, Routes from react-router-dom for handling navigation.
      - makeStyles from @material-ui/core for defining styles.
      - HomePage and CoinPage components for rendering the respective pages.

  - **Functionality:**
    - **Styling:**
        - Uses makeStyles to define styles for the entire application (App class).
        - Sets background color, text color, and minimum height for the application.

    - **Routing:**
        - Utilizes BrowserRouter to enable client-side routing.
        - Defines routes using Route and Routes components. The routes correspond to the home page (/) and individual coin pages (/coins/:id).

    - **Page Components:**
        - Imports and renders the Header, HomePage, and CoinPage components.
        - Configures routes to render the appropriate component when the URL matches.

    - **Application Structure:**
        - The main structure includes a div with the class App that wraps the entire application.
        - The Header component is rendered at the top.
        - The Routes component handles rendering different pages based on the current route.

 - **Usage:**
     - This component serves as the top-level structure for the entire React application.
     - It includes the header and sets up routes for navigating between the home page and individual coin pages.

### CryptoContext.js
  The CryptoContext.js file defines a React context named Crypto and a context provider component named CryptoContext. 
  Additionally, it exports a custom hook named CryptoState for accessing the context values.

  - **Components**
      - **Crypto Context**
        - Creates a React context named Crypto for managing global state related to cryptocurrency information.
      - **CryptoContext Component**
        - Defines a context provider component (CryptoContext) that manages the global state related to currency and its symbol.
        - Initializes state variables for currency and symbol using useState.
        - Uses useEffect to update the symbol based on the selected currency.
        - Provides the context value to its children using Crypto.Provider.
      - **CryptoState Hook**
        - Exports a custom hook (CryptoState) that uses useContext to access the values from the Crypto context.
        - This hook can be used in functional components to retrieve and interact with the global cryptocurrency state.

### CanvasJSReact.js
  The CanvasJSReact.js file defines a React wrapper component for the CanvasJS charts library. 
  It provides a React class component named CanvasJSChart that encapsulates the functionality of rendering CanvasJS charts in a React environment.
  
  - **Components**
      - **CanvasJSChart Component**
        - The CanvasJSChart class is a React component that manages the lifecycle of the CanvasJS chart.
        - It uses the CanvasJS library to create and render charts.
        - Handles the creation, rendering, updating, and destruction of the chart based on React component lifecycle methods.
      - **CanvasJSReact Object**
        - Exports an object containing the CanvasJSChart component and the CanvasJS object from the CanvasJS library.
        - This object can be imported in other files to use the CanvasJS chart component in a React application.

### index.js
The index.js file serves as the entry point for the React application. 
It initializes the application, rendering the root component (App) within the DOM and provides the CryptoContext to manage global state related to cryptocurrency information.
    
  - **React and ReactDOM:**
      Imports React and ReactDOM for building and rendering the React application.

  - **Styling:**
      Imports the index.css file for applying global styles to the application.

  - **App Component:**
      Imports the App component, which represents the main structure of the React application.

  - **CryptoContext:**
      Imports the CryptoContext component, which provides a context for managing global state related to cryptocurrency information.

  - **Carousel Styling:**
      Imports the necessary styles for the react-alice-carousel component.

  - **Rendering:**
    - Uses ReactDOM.render to render the application.
    - Wraps the App component with the CryptoContext component to make global cryptocurrency state available to the entire application.
    - Renders the application inside the HTML element with the id root.
