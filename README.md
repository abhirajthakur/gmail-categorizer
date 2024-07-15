## Gmail Categorizer

Gmail Categorizer enables users to log in using Google OAuth, fetch their emails from Gmail, and classify them into different categories.

## Preview:

> **Important**:
> In the video, the classify button is not working for real. It's just a dummy button that assigns the random label to each email to show the working of the frontend. I have a added the real function to classify emails.

https://github.com/user-attachments/assets/b0fb855e-5796-4540-b4f6-ec5e66e0bdbe

### Technologies Used:

- Next.js - Frontend framework
- Typescript as the language
- NextAuth - Authentication
- Langchain.js - Building applications with LLMs
- Tailwind CSS - Styling framework
- zod - Input validation, type inference for the frontend types
- shadcn - Beautifully designed components

## Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/abhirajthakur/gmail-categorizer
```

### 2. Navigate to the project directory:

```bash
cd gmail-categorizer
```

### 3. Get OAuth credentials

- Get your Google OAuth id and secret from [Google Cloud Console](https://console.cloud.google.com)

### 4. Create a .env file based on the .env.example file and configure the given content

```bash

AUTH_URL=http://localhost:3000
AUTH_SECRET= # Enter your auth secret here
AUTH_GOOGLE_ID= # Enter your google OAuth ID here
AUTH_GOOGLE_SECRET= # Enter your google OAuth Secret here
```

### 5. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install

```

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Access the aplication in your browser at `http://localhost:3000`
