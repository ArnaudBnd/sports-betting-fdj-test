# Sports League Management Application

This project is a full-stack application to manage sports leagues, teams, and players. It includes:
- **Backend**: Built with NestJS, handles API requests, and interacts with a MongoDB database.
- **Frontend**: Developed with Angular, provides an intuitive user interface for league, team, and player management.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd project-root
```

### 2. Database Setup

The application uses a MongoDB database. You can spin up a MongoDB instance using Docker.

You must have Docker installed on your machine.

Start MongoDB with Docker

```bash
docker-compose up -d
```

MongoDB Configuration
The database runs on port 27017.
Default database: sportsdb.

### 3. Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Start the backend server:

```bash
npm run start
```
The backend will be available at http://localhost:3000.


### 4. Frontend Setup

1. Navigate to the frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend server:

```bash
npm run start
```
The frontend will be available at http://localhost:4200.


### 4. Testing the Application

Backend Endpoints.
Swagger documentation is available at:

```bash
http://localhost:3000/api-docs
```

Frontend Workflow.
Navigate to: 

```bash
http://localhost:4200
```

Search for leagues using the autocomplete input.
Select a league to view associated teams.
Click on a team to view players.