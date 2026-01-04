**Estate Agent React Web Application**
A responsive single-page property search application built using React for the 5COSC026W Advanced Client-Side Web Development coursework.

**Live Demo & Repository**

Live Site: https://react-cw-bz3o.vercel.app/ 
GitHub: https://github.com/Gangulyy/React-CW 

**Overview**

The application allows users to search and browse properties using multiple filters, view detailed property information, and manage a favourites list. All functionality is implemented on the client side using React.


**Key Features**


# Property Search & Filtering
-Filter properties by type, price range, number of bedrooms, postcode area, and date added
-Real-time filtering using React state and controlled inputs
-Works with any combination of 1–5 filter criteria simultaneously

# Enhanced React UI Widgets
-Dropdown filters implemented using **react-select** (property type, min/max bedrooms)
-Date selection implemented using **react-datepicker** (date from/to)
-Range sliders for min/max price selection

# Property Listings
-Responsive grid layout using CSS Grid (auto-fill, minmax)
-Property cards display image, type, price, bedrooms, location, and "View More" button
-Hover effects for visual feedback

# Property Details View
-Large image gallery with thumbnail navigation (7 images per property)
-Tabbed interface (React-controlled state) for Description, Floor Plan, and Google Maps
-Embedded Google Maps using `encodeURIComponent()` for safe location encoding
-Dynamic image switching with visual highlight on selected thumbnail

# Favourites Management
-Add or remove properties from favourites
-Individual removal and clear-all functionality
-Favourites persist during the session using React state
-Properties cannot be added twice to the list
-Favourites list displays on the search page with count and real-time updates

# Responsive Design
-Desktop layout (>968px): 3-column grid (Search | Results | Favourites)
-Tablet/Mobile (<968px): Single-column layout; sticky search disabled
-CSS Grid and Flexbox; media queries for layout adjustments

# Testing
-5 meaningful unit tests implemented using **Jest** and **React Testing Library**
-All tests passing; coverage includes core application logic


**Technologies Used**

- **React** 19.2.0 - Component-based UI framework
- **React DOM** 19.2.0 - DOM rendering for React
- **React Select** 5.10.2 - Enhanced dropdown UI widgets
- **React DatePicker** 9.1.0- Date selection widget
- **Vite** 7.2.4 - Development server and build tool
- **Jest** 30.2.0 - Unit testing framework
- **React Testing Library** - Component testing utilities
- **CSS3** - Responsive layout using Flexbox and Grid
- **HTML5** - Semantic markup
- **Vercel** - for deployment


**Running the Project**

npm install
npm run dev
npm test


**Author**

Name: Ganguli Hettiarachchi
Student ID: w2120296 / 20231948
ACS Final CW 