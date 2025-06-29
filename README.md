# 🎮 Game Hub

Game Hub is a modern and responsive video game discovery platform. It allows users to explore and filter games by genre, platform, and rating using data fetched from the [RAWG Video Games Database API](https://rawg.io/apidocs).

Live Demo: [game-hub-puce-rho.vercel.app](https://game-hub-puce-rho.vercel.app)

---

## 🧩 Features

- ✅ Browse thousands of games by title
- 🎮 Filter games by genre and platform
- ⭐ Sort games by relevance, rating, and release date
- 🌙 Light and dark mode toggle for a sleek UI
- 🔍 Search functionality
- ⚡ Optimized and responsive design for all devices
- 🖼️ Game cards with cover art, ratings, and meta information

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Chakra UI
- **HTTP Client**: Axios
- **Deployment**: Vercel
- **Data Source**: [RAWG.io API](https://rawg.io/apidocs)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/symon9/game-hub.git

# Navigate into the project
cd game-hub

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 🔑 Environment Variables

To run this project locally, you'll need a `.env` file with the following:

```env
VITE_RAWG_API_KEY=your_rawg_api_key
```

Get your API key from [RAWG.io](https://rawg.io/apidocs).

---

## 📁 Folder Structure

```
src/
├── components/       # Reusable UI components
├── pages/            # Page-level components
├── hooks/            # Custom React hooks
├── services/         # API calls and service logic
├── theme/            # Chakra UI theme customizations
└── App.tsx           # Root component
```

---

## 🚀 Deployment

This project is deployed using [Vercel](https://vercel.com). Push to the `main` branch to trigger redeployment.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

- [RAWG.io API](https://rawg.io/apidocs)
- [Chakra UI](https://chakra-ui.com)
- [Vercel](https://vercel.com)
