# HTU Clinic Appointment System – Backend

This is the **Express.js backend** for the HTU Clinic Appointment System. It provides a RESTful API for managing appointments and connects to a PostgreSQL database.

## ⚙️ Features

- 📥 Create new appointment records.
- ✏️ Update appointment date/time.
- ❌ Delete appointments.
- 📤 Fetch all appointments.

## 🔧 Tech Stack

- Node.js + Express.js
- PostgreSQL
- dotenv (for environment config)
- pg (PostgreSQL client)

## 📂 Folder Structure

```
clinic-backend/
├── controllers/
│   └── appointmentControllers.js
├── routes/
│   └── appointments.js
├── db.js
├── server.js
├── schema.sql
├── .env
├── package.json
└── README.md
```

## 🛠 Setup & Run

```bash
node server.js
```

Ensure PostgreSQL is running and `.env` contains:
```
PORT=3001
DATABASE_URL=postgres://postgres:0000@localhost:5432/appointment
```

## 🧪 API Endpoints

| Method | Endpoint               | Description            |
|--------|------------------------|------------------------|
| GET    | `/api/appointments`    | Fetch all appointments |
| POST   | `/api/appointments`    | Add a new appointment  |
| PUT    | `/api/appointments/:id`| Update appointment     |
| DELETE | `/api/appointments/:id`| Delete appointment     |
