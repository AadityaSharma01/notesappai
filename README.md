# NotesAppAI

NotesAppAI is a smart note-taking web application built with the MERN stack. It uses AI to auto-generate **titles and summaries** from the user’s note content — so you focus on your thoughts, not the formatting.

---

## Features

- Create, edit, and delete notes
- AI-powered title & summary generation
- Clean, responsive UI
- Fast state management using Zustand
- Organized notes dashboard

---

## Preview
![Screenshot 2025-07-04 002153](https://github.com/user-attachments/assets/7f9bde92-81fe-400c-81ce-1608d946db5d)
![Screenshot 2025-07-04 002136](https://github.com/user-attachments/assets/ce7dc6d5-e859-42f8-9d59-1bfdfcdc7901)

---

## Tech Stack

**Frontend**
- React
- Zustand
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CerebrasAI API

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/AadityaSharma01/notesappai.git
cd notesappai
```
2. **Install dependencies**

```bash
npm install
``` 
  Or if you're using a client/ and server/ structure:

```bash
cd client && npm install
cd ../server && npm install
```

3. **Create a .env file**

In the server/ directory, create a .env file and add:

```bash
MONGODB_URI=your_mongodb_connection_string
AI_API_KEY=your_cerebras_api_key
```

##  Run the App

If it's a monorepo (full MERN):

```bash
# From root folder
npm run dev
```

Or if you want to run frontend and backend separately:

# In /client
```bash
npm run dev
```

# In /server
```bash
npm run server
```

---

##  Future Enhancements

 - Reminders & notifications
 - Export notes to PDF/Markdown
 - Calendar integration
 - Full-text search
 - AI keyword tagging

---
