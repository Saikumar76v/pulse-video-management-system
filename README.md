\# Pulse Video Management System



A full-stack video management platform built as part of the Pulse Talent technical assignment.

The system enables secure video upload, streaming, and role-based access control.



\## Tech Stack

Frontend: React (Create React App)  

Backend: Node.js, Express.js  

Database: MongoDB  

Authentication: JWT  

File Uploads: Multer  



\## Authentication \& Authorization

\- JWT-based authentication

\- Role-based access control (RBAC)



Roles:

\- Viewer: Can view videos

\- Editor: Can upload and delete videos

\- Admin: Can upload and delete videos



\## Video Features

Implemented:

\- Secure video upload

\- Video storage using MongoDB

\- Video listing API

\- Video playback in frontend

\- Role-based delete permissions



Known Limitations:

\- Large file uploads are limited by server configuration



\## Real-time Updates (Partial)

Socket.IO setup exists in the backend.

Due to time constraints, real-time UI updates are not fully implemented.

The frontend refreshes video lists using API calls after actions.



\## Assignment Requirement Mapping

\- Video upload \& storage: Completed

\- Secure streaming: Completed

\- Role-based access control: Completed

\- User isolation: Completed

\- Real-time updates: Partial

\- Sensitivity analysis: Not implemented

\- Public deployment: Not implemented



\## Running the Project



Backend:

cd backend  

npm install  

npm run dev  



Frontend:

cd frontend  

npm install  

npm start  



\## Author

Saikumar Vasamsetti  

B.Tech, ECE  

IIT (ISM) Dhanbad



