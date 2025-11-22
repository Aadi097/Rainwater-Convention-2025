# Rainwater Convention 2025 Website

This is a Next.js application for the "Rainwater Convention 2025". It's a platform for a global gathering of experts, policymakers, and enthusiasts dedicated to promoting rainwater harvesting and sustainable water management practices.

## Features

- **Home Page**: A welcoming landing page that provides a summary of the event, including date, time, location, featured speakers, and the importance of rainwater harvesting.
- **Registration Page**: A user-friendly form for attendees to register for the convention. Registration data is stored in the browser's local storage.
- **FAQs Page**: A dedicated section to answer frequently asked questions about the event.
- **Admin Portal**: A secure area for administrators to manage the event.
  - **Login**: A simple login page for admin access.
  - **Dashboard**: A private dashboard where administrators can view, search, and delete attendee registrations.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (with App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for validation.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 20 or later) and npm installed on your computer.

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies**:
    Run the following command to install all the necessary packages:
    ```bash
    npm install
    ```

### Running the Development Server

To start the application in development mode, run:

```bash
npm run dev
```

This will start the development server, typically on port 8000. Open [http://localhost:8000](http://localhost:8000) in your browser to see the website..

The application will automatically reload if you make any changes to the code.

### Admin Credentials

To access the admin dashboard, use the following credentials on the `/admin/login` page:
- **Email**: `admin@rainconv.com`
- **Password**: `admin123`
