# Future Banks Summit & Awards 2023

A modern, responsive conference website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**.

![Future Banks Summit](https://via.placeholder.com/1200x630/0F172A/D4A853?text=Future+Banks+Summit+2023)

## 🎯 Event Details

- **Event:** 4th Annual Future Banks Summit & Awards
- **Date:** September 11–12, 2023
- **Venue:** Riyadh Marriott Hotel, Saudi Arabia
- **Tagline:** Digital Innovations Transforming the Kingdom's Banking Landscape

## ✨ Features

### Design
- **Hybrid Modern Theme** — Alternating light cream and dark slate sections
- **Golden Accent Color** — Premium, sophisticated visual identity
- **Glassmorphism Effects** — Modern card designs with blur effects
- **Fully Responsive** — Mobile-first approach, works on all devices
- **Smooth Animations** — Fade-ins, hover effects, and animated counters

### Sections
1. **Hero** — Gradient background with countdown timer and CTAs
2. **Event Overview** — Split layout with key statistics
3. **Who Will You Meet** — Role cards with hover effects
4. **Topic Highlights** — Bento grid layout with 10 conference topics
5. **Speakers** — Carousel with gradient placeholder cards
6. **Agenda** — Interactive timeline with Day 1/Day 2 tabs
7. **Why Attend** — 3-column benefits with icons
8. **Industry Breakdown** — 18 industry icons grid
9. **Statistics** — Animated pie chart and counters
10. **Registration Form** — Fully validated with API integration
11. **FAQ** — Expandable accordion
12. **Footer** — Map embed, newsletter signup, social links

### Functionality
- ✅ Client-side form validation
- ✅ Registration API route (`/api/register`)
- ✅ JSON data storage for registrations
- ✅ Newsletter subscription (UI ready)
- ✅ Smooth scroll navigation
- ✅ Mobile responsive menu

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd fbs_website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
fbs_website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── register/
│   │   │       └── route.ts      # Registration API endpoint
│   │   ├── globals.css           # Global styles & design tokens
│   │   ├── layout.tsx            # Root layout with SEO metadata
│   │   └── page.tsx              # Main page composition
│   └── components/
│       ├── index.ts              # Barrel export file
│       ├── Header.tsx            # Navigation component
│       ├── Hero.tsx              # Hero section with countdown
│       ├── EventOverview.tsx     # About section
│       ├── WhoWillYouMeet.tsx    # Attendee roles
│       ├── TopicHighlights.tsx   # Conference topics
│       ├── Speakers.tsx          # Speaker cards
│       ├── Agenda.tsx            # Interactive timeline
│       ├── WhyAttend.tsx         # Benefits section
│       ├── IndustryBreakdown.tsx # Industry icons
│       ├── Statistics.tsx        # Animated stats
│       ├── RegistrationForm.tsx  # Registration form
│       ├── FAQ.tsx               # FAQ accordion
│       └── Footer.tsx            # Footer with map
├── data/
│   └── registrations.json        # Registration data (auto-created)
├── public/                       # Static assets
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Primary Gold | `#D4A853` | Accents, CTAs, highlights |
| Slate 900 | `#0F172A` | Dark backgrounds |
| Cream 50 | `#FFFBF5` | Light backgrounds |

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, tight letter-spacing
- **Body:** Regular weight, comfortable line-height

### Components
- `btn-primary` — Golden gradient button
- `btn-secondary` — Outline button
- `card` — Light mode card
- `card-dark` — Dark mode card
- `card-glass` — Glassmorphism card

## 🔌 API Reference

### POST /api/register

Register a new delegate, sponsor, or partner.

**Request Body:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "jobTitle": "string",
  "company": "string",
  "email": "string",
  "phone": "string",
  "attendanceType": "delegate" | "sponsor" | "partner",
  "message": "string (optional)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Registration successful",
  "registrationId": "REG-1702000000000-ABC123XYZ"
}
```

### GET /api/register

Retrieve all registrations (admin endpoint).

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Font:** Inter (via next/font)
- **Icons:** Custom SVG icons

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

This project is proprietary and confidential.

---

**Built for the 4th Annual Future Banks Summit & Awards 2023**

*Digital Innovations Transforming the Kingdom's Banking Landscape*
