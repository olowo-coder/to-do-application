# To-Do App

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


## Running Locally

Clone the repository:

   ```bash
   git clone https://github.com/your-repo/nextjs-todo-app.git
   cd nextjs-todo-app
   ```


## API Endpoints

### **GET `/api/todos`**
Fetches the list of all To-Do tasks.  
**Response Example**:  
```json
[
  {
    "id": "1",
    "content": "Learn Docker",
    "dueDate": "2024-12-15",
    "status": "unfinished"
  },
  {
    "id": "2",
    "content": "Build a Next.js App",
    "dueDate": "2024-12-25",
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
