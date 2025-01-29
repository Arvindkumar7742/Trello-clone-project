# Trello Clone

A Trello-inspired project built using React and the official [Trello API](https://developer.atlassian.com/cloud/trello/rest/). This project showcases a simplified implementation of Trello features, including boards, lists, cards, checklists, and checkitems.

## Deployed link

`https://trello-react-arvind.vercel.app/`

## Features

### Boards

- Display all boards.
- Create a new board.

### Lists

- Display all lists in a board.
- Create a new list.
- Delete/archive a list.

### Cards

- Display all cards in a list.
- Create a new card in a list.
- Delete a card.

### Checklists

- Display all checklists in a card.
- Create a new checklist in a card.
- Delete a checklist.

### Checkitems

- Display all checkitems in a checklist.
- Create a new checkitem in a checklist.
- Delete a checkitem.
- Check/uncheck a checkitem.

## Project Setup

### Prerequisites

- Node.js (v14+ recommended)
- A Trello account
- API Key and Token from Trello ([guide](https://developer.atlassian.com/cloud/trello/guides/rest-api/api-introduction/))

### Installation

1. Clone the repository:

   ```bash
   git clone https://gitlab.com/arvindkumar31.1/trello-react-arvind.git
   cd trello-react-arvind
   ```

2. Install dependencies:

```bash
  npm install
```

3.  Create a .env file in the root directory and add the following:

```bash
VITE_BASE_URL = "https://api.trello.com/1"

VITE_API_KEY = your_api_key
VITE_API_TOKEN = your_token
```

4. Start the development server:

```bash
npm run dev
```

### Technologies Used

- **Frontend Framework:** React.js with vite
- **UI Library:** Material UI
- **Routing:** React Router
- **API Requests:** Axios
- **For success and error toast:** React-toastify
- **For all the react spinners and loaders:** React-spinner.

### Folder Structure

```
src/
├── components/        # React components (Board, List, Card, etc.)
├── services/          # API service functions (axios-based)
├── pages/             # Route-specific pages
├── App.jsx            # Main application component
└── main.jsx           # Application entry point
```

### Routing

- All Boards View: `/boards`
- Single Board View: `/boards/:boardId`

### Trello API

- This project uses the Trello REST API to interact with boards, lists, cards, checklists, and checkitems.

### Future Enhancements

- Add drag-and-drop functionality for cards and lists.
- Implement user authentication for personal boards.
- Integrate real-time updates with WebSockets.
