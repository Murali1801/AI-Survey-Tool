# AI Survey Tool

A modern, AI-powered survey tool for efficient data collection and analysis. Built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## Features

-   **User Authentication**: Secure user authentication with Firebase, supporting both email/password and Google accounts.
-   **Survey Management**: Easily create, manage, and view your surveys.
-   **Survey Taking**: A user-friendly interface for taking surveys and submitting responses.
-   **Dashboard**: An intuitive dashboard with survey statistics and recent activity.
-   **Responsive Design**: A fully responsive design that works on both mobile and desktop devices.

## Tech Stack

-   [Next.js](https://nextjs.org/) - The React framework for production.
-   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript.
-   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
-   [Shadcn/ui](https://ui.shadcn.com/) - A collection of re-usable components built with Radix UI and Tailwind CSS.
-   [Firebase](https://firebase.google.com/) - Used for authentication and database (Firestore).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   pnpm

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username_/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    pnpm install
    ```
3.  Set up Firebase:
    -   Create a new project on [Firebase](https://console.firebase.google.com/).
    -   Create a `.env.local` file in the root of your project and add your Firebase configuration:
        ```env
        NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
        NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
        NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
        ```
    -   Set up your Firestore security rules. You can use the rules in the `firestore.rules` file as a starting point.

### Running the Application

```sh
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This application is ready to be deployed to [Vercel](https://vercel.com/).
Follow the deployment instructions provided in the previous turn to deploy your application.
