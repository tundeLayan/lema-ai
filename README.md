# How to Run the Project

This project consists of two main parts:

1. **Backend**: Node.js server located in the \`backend\` folder.
2. **Frontend**: React application located in the \`lema-ai\` folder.

---

## Prerequisites

Ensure you have the following installed on your system:

-   [Node.js](https://nodejs.org/) (v20 or higher recommended)
-   [Yarn](https://classic.yarnpkg.com/) (v1.x)

---

## Folder Structure

```
root
├── backend       # Backend Node.js server
│   ├── package.json
│   └── ...
└── lema-ai       # Frontend React app
    ├── package.json
    └── ...
```

---

## Setup and Run Instructions

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/tundeLayan/lema-ai.git
cd web-developer-assignment-Public
```

---

### 2. Install Dependencies

#### For Backend

Navigate to the \`backend\` folder and install dependencies:

```bash
cd backend
yarn install
```

#### For Frontend

Navigate to the \`lema-ai\` folder and install dependencies:

```bash
cd ../lema-ai
yarn install
```

---

### 3. Start the Development Servers

#### Running the Backend

Start the backend server by running the following commands:

```bash
cd backend
yarn dev
```

This will start the server on \`http://localhost:3001\`.

#### Running the Frontend

Start the frontend application by running the following commands:

```bash
cd ../lema-ai
yarn dev
```

This will start the React application on \`http://localhost:5173\`.

---

## Access the Application

### If you want to run this locally please follow these steps

1. Open your browser and navigate to \`http://localhost:5173\` to access the frontend.
2. The frontend communicates with the backend running on \`http://localhost:3001\`.

### If you want to access the site by the deployed URL, please follow these steps

1. Go to https://lema-ai.vercel.app/

---

## Limitations

-   Pagination on the backend was not implemented completely, but the frontend is handling it statically
-   The live backend API might be slow because it is a free plan
-   On the posts page, the user data is not coming so I am using a static data for the user name

---

## Troubleshooting

-   Ensure both the backend and frontend servers are running simultaneously.
-   Check that the \`yarn install\` command completes successfully in both \`backend\` and \`lema-ai\` directories.
-   If you encounter issues with ports, ensure that ports \`3001\` (backend) and \`5173\` (frontend) are not in use by other applications.

---

## Notes

-   Backend scripts are defined in the \`package.json\` file in the \`backend\` folder. The development server uses \`nodemon\` for live reloading.
-   Frontend scripts are defined in the \`package.json\` file in the \`lema-ai\` folder. The development server uses \`vite\` for fast builds and hot reloading.

```

```
