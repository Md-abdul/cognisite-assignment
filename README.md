# Construction Time Calculator

This project is a Construction Time Calculator web application that calculates the total number of days required to build a boundary wall around a given area of land. The calculation is based on user inputs including the length and width of the land, the number of workers, and the area that each worker can build.

Deploy Link front-end -: https://landcalcul.netlify.app/

Deploy Link backend -: https://cognisite-assignment-3cpu.onrender.com/

# Features

- User input form to enter land dimensions, worker count, and worker capacity.
- Calculation of total days required for construction based on inputs.
- Display of calculation results using Chart.js for visual representation.
- Backend API to perform calculations and store data in MongoDB.

# Technologies Used

- Frontend: React, Chakra UI, Chart.js
- Backend: Node.js, Express.js, MongoDB, Mongoose
- HTTP Client: Axios

# Images

![Screenshot 2024-07-18 122047](https://github.com/user-attachments/assets/d9ef7e75-df23-4df1-82e5-e03a34696b3f)

# Folder Structure

## Backend
    backend/
    ├── models/
    │   └── Calculation.js
    ├── routes/
    │   └── calculationRoutes.js
    ├── index.js
    ├── package.json
    ├── .env
    └── README.md

## Front-end 
      .
      ├── public
      │   └── index.html
      ├── src
      │   ├── components
      │   │   ├── ChartComponent
      │   │   └── ConstructionForm
      │   ├── App.js
      │   └── index.js
      └── package.json


## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/Md-abdul/cognisite-assignment.git
      
