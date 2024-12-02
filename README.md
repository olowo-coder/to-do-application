# To-Do Application

This project is a simple To-Do list application built with:
- **Node.js** (v18)
- **Next.js** (v13)
- **TypeScript**
- **Material-UI**
- **Docker**

## Features
- Add, Edit, Delete To-Do items
- Toggle status between Done and Unfinished
- Server-side data fetching and file-based data storage



## Explanation of the Directories and Files:

- **app**: This directory contains the main app components, including the backend API routes and frontend pages.
  - **api**: Contains the backend API routes for handling CRUD operations for the To-Do app.
  - **todos**: Pages for managing the To-Do items, including creating and editing tasks.
  - **page.tsx**: The main entry point for rendering the app's root page.

- **public**: Stores static files like images, fonts, and other assets that are publicly accessible.

- **components**: Houses reusable React components that can be shared across different pages (e.g., TodoList).

- **types**: Contains TypeScript type definitions used throughout the app (e.g., `Todo` interface).

- **utils**: Utility functions that help with common operations across the app, such as reading and writing to `data.json`.

- **data**: A simple file used for local storage (`data.json`) to store the todos data.

- **Dockerfile**: The configuration file for creating a Docker container to run the app in an isolated environment.

- **package.json**: Contains the project's dependencies, scripts, and metadata.

- **tsconfig.json**: The TypeScript configuration file for setting up the TypeScript compiler options.



## Running Locally

Clone the repository:

   ```bash
   git clone https://github.com/olowo-coder/to-do-application.git
   cd to-do-application
   ```


## API Endpoints

### **GET `/api/todos`**
Fetches the list of all To-Do tasks.  
**Response Example**:  
```json
[
  {
    "id": "08a6d952-0d39-4f16-80f3-92d2d1bc0e11",
    "content": "Add Features to application",
    "dueDate": "2024-12-19",
    "status": "unfinished"
  },
  {
    "id": "2a4b2066-a7c1-4cd7-8b22-33bd34384dac",
    "content": "Dockerize the app when done",
    "dueDate": "2024-12-02",
    "status": "done"
  }
]
```

### **POST `/api/todos`**
Creates a new task.  
**Payload Example**:  
```json
{
  "content": "Learn Docker",
  "dueDate": "2024-12-15",
  "status": "unfinished"
}
```

### **PUT `/api/todos/:id`**
Edit a new task.  
**Payload Example**:  
```json
{
  "content": "Learn Docker",
  "dueDate": "2024-12-15",
  "status": "unfinished"
}
```

### **PATCH `/api/todos/:id`**
Updates an existing To-Do task by changing its status.  
You need to provide the `id` of the task in the URL and send the new status in the request body.  
**Payload Example**:  
```json
{
  "status": "done"
}
```

### **DELETE `/api/todos/:id`**
Deletes a To-Do task by its `id`.  
You need to provide the `id` of the task in the URL.  
**Response Example**:  
```json
{
  "message": "Task deleted successfully"
}
```


## How to Dockerize and Run the Application

Follow the steps below to build and run the application in a Docker container.

### 1. Build the Docker Image

To build the Docker image for the application, run the following command in the root directory of the project:

```bash
docker build -t todo-app .
```

### 2. Run the Docker Container

```bash
docker run -p 3000:3000 todo-app
```

### 3. Access the Application

```bash
http://localhost:3000
```
