# Next.js-Admin-Dashboard

## Overview
This is a **Next.js Admin Dashboard** with authentication features, including **Login** and **Register** pages. The frontend is built with **Next.js**, while the backend is connected to **MongoDB** for user management.

## Features
- User Authentication (Login & Register)
- Protected Routes for Admin Dashboard
- API Integration with MongoDB
- Responsive UI
- Modern Design with Tailwind CSS 

## Tech Stack
### Frontend:
- Next.js
- React
- Tailwind CSS
- TypeSript

### Backend:
- Node.js with Express.js
- MongoDB with Mongoose
- bcrypt for Password Hashing

## Installation
### Prerequisites
Make sure you have the following installed:
- Node.js (v18+ recommended)
- MongoDB (local or cloud instance like MongoDB Atlas)

### Clone the Repository
```sh
git clone https://github.com/GavinHemsada/nextjs-admin-dashboard.git
cd nextjs-admin-dashboard
```

### Install Dependencies
```sh
npm install
```

### Configure Environment Variables
Create a `.env.local` file in the root directory and add the following:
```
MONGODB_URI=your-mongodb-connection-string
```

### Run the Development Server
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure
```
nextjs-admin-dashboard/
│── public/
│── src/
│   ├── components/
|   ├── hooks/
|   ├── icons/
|   ├── (backend)/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── (View)
│   │   │   ├── dashboard/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   ├── api/
│── styles/
│── .env.local
│── package.json
│── next.config.js
│── tsconfig.json
│── README.md
```

## Contact
For issues or contributions, reach out via GitHub Issues.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
