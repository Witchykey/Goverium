
# goverium

A modern civic transparency platform built with Next.js and Tailwind CSS, focused on making public meetings, agendas, and government information accessible to everyone.

tiny changes
## Features

- 🏛️ **Public Meetings Calendar** - Browse and track upcoming civic meetings
- 📋 **Agendas & Documents** - Access meeting agendas, minutes, and related documents
- 🔔 **Stay Informed** - Get real-time updates on topics that matter to you
- 🌓 **Dark Mode** - Automatic dark mode support
- 📱 **Responsive Design** - Works seamlessly on all devices

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **UI Components**: Custom reusable components (Button, Card, Layout)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
goverium/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles with Tailwind
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   └── Layout.tsx      # Page layout wrapper
│   └── ui/
│       ├── Button.tsx      # Reusable button component
│       └── Card.tsx        # Reusable card component
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Development

The project uses:
- **App Router** for file-based routing
- **TypeScript** for type safety
- **Tailwind CSS** for styling with utility classes
- **Component-based architecture** for reusability

## Contributing

This is a civic technology project aimed at improving transparency and public engagement. Contributions are welcome!

## License

ISC
