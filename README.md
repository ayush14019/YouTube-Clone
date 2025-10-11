# YouTube Clone 🎥

A fully responsive YouTube clone built with React, Redux, and Tailwind CSS. Features include video browsing, search functionality, watch page, live comments, and a mobile-first responsive design.

![YouTube Clone](https://img.shields.io/badge/React-18.x-blue) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38bdf8) ![Redux](https://img.shields.io/badge/Redux-Toolkit-764abc)

## ✨ Features

### 🏠 Home Page
- **Responsive Video Grid**: Displays popular videos in a responsive grid layout
- **Category Filters**: Filter videos by categories (Gaming, Music, Live, etc.)
- **Shimmer Loading**: Beautiful loading animations while fetching data
- **Infinite Scroll**: Smooth video browsing experience

### 🔍 Search Functionality
- **Real-time Search Suggestions**: Auto-complete suggestions as you type
- **Search Results**: Display search results with video thumbnails, titles, and views
- **Debounced API Calls**: Optimized search with request debouncing
- **Search Caching**: Results cached in Redux for faster subsequent searches
- **Mobile Search**: Dedicated mobile search overlay with suggestions

### 📺 Watch Page
- **Embedded YouTube Player**: Fully functional video player
- **Video Details**: Title, channel info, views, likes, and description
- **Comments Section**: View video comments with proper formatting
- **Live Chat** (Desktop): Real-time chat simulation
- **Responsive Layout**: 
  - Mobile: Stacked vertical layout
  - Desktop: Video on left, live chat on right

### 🎨 Responsive Design
- **Mobile-First Approach**: Optimized for mobile devices (iPhone 14 Pro Max and similar)
- **Tablet Support**: Adaptive layout for tablet screens
- **Desktop Layout**: Full-featured desktop experience
- **Dynamic Sidebar**: Collapsible sidebar with mini-mode
- **Centered Content**: All elements properly centered on mobile

### 🎯 UI/UX Features
- **Smooth Animations**: Transitions and hover effects
- **Modern Design**: Clean, YouTube-inspired interface
- **Touch-Friendly**: Large touch targets for mobile users
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🚀 Technologies Used

- **React 18** - UI library
- **Redux Toolkit** - State management
- **React Router** - Navigation and routing
- **Tailwind CSS** - Styling and responsive design
- **YouTube Data API v3** - Video data and search
- **React Icons** - Icon library
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
src/
├── components/
│   ├── Head.jsx              # Header with search
│   ├── Sidebar.jsx           # Collapsible sidebar
│   ├── Body.jsx              # Main layout wrapper
│   ├── MainContainer.jsx     # Home page container
│   ├── ButtonList.jsx        # Category filters
│   ├── VideoContainer.jsx    # Video grid
│   ├── VideoCard.jsx         # Individual video card
│   ├── ShimmerCard.jsx       # Loading skeleton
│   ├── WatchPage.jsx         # Video watch page
│   ├── VideoDetails.jsx      # Video info section
│   ├── CommentContainer.jsx  # Comments section
│   └── LiveChat.jsx          # Live chat component
├── utils/
│   ├── store.js              # Redux store configuration
│   ├── appSlice.js           # App state slice
│   ├── searchSlice.js        # Search cache slice
│   └── constants.js          # API endpoints and keys
└── App.jsx                   # Root component
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- YouTube Data API v3 key

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/youtube-clone.git
cd youtube-clone
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up YouTube API Key**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable YouTube Data API v3
   - Create credentials (API Key)
   - Copy your API key

4. **Configure API Key**

Open `src/utils/constants.js` and add your API key:
```javascript
const GOOGLE_API_KEY = "YOUR_API_KEY_HERE";
```

5. **Run the development server**
```bash
npm run dev
```

6. **Open in browser**
```
http://localhost:5173
```

## 🔑 API Configuration

The project uses the following YouTube Data API v3 endpoints:

```javascript
// Most Popular Videos
YOUTUBE_VIDEO_KEY = "...videos?part=snippet,contentDetails,statistics&chart=mostPopular..."

// Search Suggestions
YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search..."

// Search Results
YOUTUBE_SEARCH_RESULTS_API = "...search?part=snippet&maxResults=20..."

// Video Details
YOUTUBE_VIDEO_DETAILS_API = "...videos?part=snippet,contentDetails,statistics..."

// Comments
YOUTUBE_COMMENTS_API = "...commentThreads?part=snippet..."
```

## 📱 Responsive Breakpoints

```javascript
// Mobile: 0-767px
// Tablet: 768px-1023px  (md)
// Desktop: 1024px+      (lg, xl)
```

### Mobile Features
- Centered button list
- Full-width video cards
- Stacked watch page layout
- Mobile search overlay
- Collapsible sidebar overlay
- Touch-optimized buttons

### Desktop Features
- Multi-column video grid
- Side-by-side watch page layout
- Live chat sidebar
- Hover effects
- Mini sidebar mode

## 🎨 Color Scheme

```css
Primary: #FF0000 (YouTube Red)
Background: #FFFFFF
Text: #0F0F0F
Secondary Text: #606060
Hover: #F9F9F9
Border: #E5E5E5
```

## 🚧 Known Limitations

- API quota limit: 10,000 units/day (YouTube Data API v3)
- Search costs 100 units per query
- Live chat is simulated (not real-time YouTube chat)
- Subscriber count is static (requires additional API call)
- Some videos may not be embeddable


## 📝 License

This project is for educational purposes only. YouTube and the YouTube logo are trademarks of Google LLC.

## 👨‍💻 Author

Built with ❤️ by [Ayush]

## 🙏 Acknowledgments

- YouTube for design inspiration
- React community
- Tailwind CSS team
- Redux Toolkit maintainers

## 📞 Contact

For questions or feedback:
- Email: your.email@example.com
- GitHub: [@ayush14019](https://github.com/ayush14019)
- LinkedIn: [Ayush Raj](www.linkedin.com/in/ayush-raj-8bb362213)

---

**Note**: This is a clone project for learning purposes. All content is fetched from YouTube's public API and belongs to their respective owners.