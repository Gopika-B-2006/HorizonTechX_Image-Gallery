# ✦ Lumina Image Gallery
**Horizon TechX Internship — Task 1**

---

## 📁 Folder Structure

```
HorizonTechX_ImageGallery/
│
├── index.html          ← Main HTML file (open this in browser)
│
├── css/
│   └── style.css       ← All styles (theme, layout, animations)
│
├── js/
│   └── script.js       ← All JavaScript (gallery, lightbox, favorites)
│
├── images/             ← Put YOUR photos here
│   └── (your images go here)
│
└── README.md           ← This file
```

---

## 🚀 How to Run

1. Download / clone this folder
2. Open `index.html` in any browser — that's it!

---

## 🖼️ How to Add Your Own Images

1. Copy your image files into the `images/` folder
2. Open `js/script.js`
3. Find the `IMAGES` array at the top
4. Add a new entry like this:

```js
{ id: 25, title: "My Photo", category: "Nature", src: "images/myphoto.jpg" }
```

### Available Categories
- Nature
- Animals
- Flowers
- Travel
- Food
- *(Add your own category names freely!)*

---

## ✅ Features

| Feature | Details |
|---|---|
| Responsive Grid | Works on mobile, tablet, desktop |
| Real-time Search | Search by title or category |
| Category Filter | Filter buttons at top |
| Lightbox Preview | Click image → full screen view |
| Prev / Next Nav | Buttons + Arrow keys |
| Slideshow Mode | Auto-plays every 2.5s (Space to toggle) |
| Dark / Light Mode | Toggle button in header |
| Favorite Images | ★ button per image |
| Favorites Panel | Side panel shows all favorites |
| Download Option | Download button per image |
| Stats Dashboard | Total, Favorites, Categories count |
| Hover Effects | Zoom + overlay on hover |

---

## ⌨️ Keyboard Shortcuts (in Lightbox)

| Key | Action |
|---|---|
| `→` / `↓` | Next image |
| `←` / `↑` | Previous image |
| `Space` | Start / Stop slideshow |
| `Escape` | Close lightbox |

---

## 📤 Submission

- GitHub repo name: `HorizonTechX_ImageGallery`
- Upload all files keeping the folder structure intact

---

*Built for Horizon TechX Frontend Internship*
