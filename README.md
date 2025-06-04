# Raven FX Trading Platform

A modern cryptocurrency trading platform built with React, TypeScript, and Vite. Features real-time candlestick charts, order book visualization, and portfolio management.

## 🚀 Features

- Real-time cryptocurrency price tracking
- Interactive candlestick charts using ECharts
- User authentication with Gravatar integration
- Responsive design for desktop and mobile
- Dark mode support
- Order book visualization

## 🛠️ Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/raven-fx.git
cd raven-fx
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_URL=https://api.coingecko.com/api/v3
```

## 🏃‍♂️ Running the Application

To start the development server:

```bash
npm run dev
```

This will start the app at `http://localhost:5173`

For production build:

```bash
npm run build
npm run preview
```

## 🧪 Running Tests

```bash
npm run test
```

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/       # Basic components (Button, Input)
│   ├── molecules/   # Composite components (SearchBar)
│   ├── organisms/   # Complex components (Header, TradingChart)
│   ├── templates/   # Layout components
│   └── pages/       # Page components
├── store/           # State management
├── styles/          # SCSS styles
├── utils/           # Utility functions
└── types/           # TypeScript type definitions
```

## 🎨 Technologies Used

- React 18
- TypeScript
- Vite
- SCSS
- ECharts
- Zustand (State Management)
- React Router
- Zod (Schema Validation)

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | CoinGecko API URL | https://api.coingecko.com/api/v3 |

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.