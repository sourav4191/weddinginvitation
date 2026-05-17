# Wedding Invitation Website

A beautiful, animated wedding invitation website built with Next.js, Framer Motion, and Tailwind CSS.

## 🎨 Features

- **Stunning Animations**: Framer Motion powered smooth animations throughout
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Auto-playing Image Carousel**: Gallery with auto-changing images
- **Live Countdown Timer**: Real-time countdown to the wedding day
- **Interactive Elements**: Hover effects, smooth scrolling, and transitions
- **WhatsApp RSVP Integration**: One-click RSVP via WhatsApp
- **Social Media Links**: Direct links to Instagram and other platforms
- **Custom Color Theme**: Matches the original design (teal, sand, rose, yellow, blue)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd wedding-invite
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization Guide

### 1. **Wedding Details** (app/data/weddingData.ts)

Edit this file to customize all wedding information:

```typescript
export const weddingData = {
  couple: {
    bride: {
      name: "Kanika",  // Change bride's name
      parents: "Mrs. Shalini & Mr. Aakash Mittal",  // Change parents
    },
    groom: {
      name: "Abhishek",  // Change groom's name
      parents: "Mrs. Reena & Mr. Rajiv Kapoor",  // Change parents
    },
  },
  
  events: [
    {
      name: "Mehendi",  // Event name
      date: "Friday, March 9th 2026",  // Event date
      time: "6pm Onwards",  // Event time
      venue: "Rambagh, Jaipur",  // Venue
      mapLink: "https://maps.google.com",  // Google Maps link
    },
    // Add or remove events as needed
  ],
  
  weddingDate: "2026-03-12T18:00:00",  // Main wedding date for countdown
};
```

### 2. **Replace Images**

The gallery uses placeholder images from Unsplash. To use your own photos:

In `app/data/weddingData.ts`, replace the image URLs:

```typescript
gallery: {
  images: [
    "/images/photo1.jpg",  // Place images in public/images/
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    // Add more images as needed
  ],
},
```

### 3. **WhatsApp RSVP Number**

Update the WhatsApp number in `weddingData.ts`:

```typescript
rsvp: {
  phoneNumber: "919876543210",  // Your WhatsApp number with country code
  message: "Hello! I would like to confirm my attendance for the wedding.",
},
```

### 4. **Social Media Links**

Update social media links:

```typescript
socialMedia: {
  instagram: "https://instagram.com/yourhandle",
},
```

### 5. **Colors** (tailwind.config.ts)

Customize the color theme:

```typescript
colors: {
  primary: {
    teal: "#5DADA3",
    sand: "#D4C5A0",
    rose: "#E8C9D8",
    yellow: "#E8D89F",
    blue: "#4A6FA5",
  },
},
```

## 📱 Sections Overview

1. **Hero Section**: Animated intro with couple names and floating lanterns
2. **Invitation Section**: Traditional invitation with Om Ganeshaya Namah
3. **Events Section**: All wedding events with dates, times, and venues
4. **Story Section**: Meet the couple with auto-playing photo carousel
5. **RSVP Section**: WhatsApp RSVP button
6. **Things to Know**: Important information for guests
7. **Social Media**: Instagram and social links
8. **Countdown**: Live countdown timer to the wedding

## 🎬 Animation Features

- Floating sky lanterns in hero section
- Smooth fade-in animations on scroll
- Interactive hover effects on event cards
- Auto-rotating image carousel
- Ticking countdown timer
- Vintage car animations
- Palace/monument silhouettes

## 🛠️ Built With

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Project Structure

```
wedding-invite/
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── InvitationSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── RSVPSection.tsx
│   │   ├── ThingsToKnowSection.tsx
│   │   ├── SocialMediaSection.tsx
│   │   └── CountdownSection.tsx
│   ├── data/
│   │   └── weddingData.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/  (place your images here)
├── tailwind.config.ts
└── package.json
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm run start
```

## 📸 Adding Your Photos

1. Create a folder: `public/images/`
2. Add your photos (recommended: 800x800px or larger)
3. Update image paths in `weddingData.ts`

## 🎨 Customization Tips

- **Fonts**: Google Fonts (Playfair Display & Inter) are pre-loaded
- **Animations**: Adjust duration/delay in each component's `transition` prop
- **Colors**: All colors are centralized in Tailwind config
- **Layout**: Each section is a separate component for easy editing

## 🐛 Troubleshooting

**Images not loading?**
- Ensure images are in `public/` directory
- Use correct paths (e.g., `/images/photo.jpg`)

**Animations not smooth?**
- Check browser compatibility with Framer Motion
- Reduce number of animated elements on older devices

**WhatsApp link not working?**
- Verify phone number format (include country code, no + or spaces)
- Test the link: `https://wa.me/919876543210`

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues, please create an issue in the GitHub repository.

---

**Built with ❤️ for your special day**
