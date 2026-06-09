/* ══════════════════════════════════════════
   LUMINA GALLERY — js/script.js
   Horizon TechX Internship — Task 1
   ══════════════════════════════════════════ */

/* ──────────────────────────────────────────
   IMAGE DATA
   Each object: { id, title, category, src }
   
   HOW TO ADD YOUR OWN IMAGES:
   1. Put your image file in the images/ folder
   2. Add a new object below like:
      { id: 25, title: "My Photo", category: "Nature", src: "images/myphoto.jpg" }
   ────────────────────────────────────────── */
const IMAGES = [
  { id:1,  title:"Mountain lion",        category:"Animals",  src:"images/animal2.jpg"  },
  { id:2,  title:"Lion",                 category:"Animals",  src:"images/animal3.jpg" },
  { id:3,  title:"Garden Flowers",       category:"Flowers",  src:"images/flower1.jpg"  },
  { id:4,  title:"Ocean Adventure",       category:"Travel",   src:"images/travel1.jpg" },
  { id:5,  title:"Vetables of Protein",  category:"Food",     src:"images/food1.jpg" },
  { id:6,  title:"Golden Valley Sunrise",category:"Nature",  src:"images/nature1.jpg"  },
  { id:7,  title:"Deer",                 category:"Animals", src:"images/animal4.jpg" },
  { id:8,  title:"Lilac pink",           category:"Flowers", src:"images/flower2.jpg"  },
  { id:9,  title:"Tropical Paradise",    category:"Travel",  src:"images/travel2.jpg" },
  { id:10, title:"Veg Morning Food",     category:"Food",    src:"images/food2.jpg" },
  { id:11, title:"Mountain Lake Reflection",category:"Nature",src:"images/nature2.jpg"  },
  { id:12, title:"Bear Cub",             category:"Animals", src:"images/animal5.jpg" },
  { id:13, title:"Allium",               category:"Flowers", src:"images/flower3.jpg"  },
  { id:14, title:"Mountain Explorer",    category:"Travel",  src:"images/travel3.jpg" },
  { id:15, title:"Fruits & Nuts",                     category:"Food",    src:"images/food3.jpg" },
  { id:16, title:"Green  Mountain Valley", category:"Nature",  src:"images/nature3.jpg"  },
  { id:17, title:"Elephant",             category:"Animals", src:"images/animal6.jpg" },
  { id:18, title:"Red Rose",             category:"Flowers", src:"images/flower4.jpg"  },
  { id:19, title:"Sky Journey",          category:"Travel",  src:"images/travel4.jpg" },
  { id:20, title:"Vegetables",                     category:"Food",    src:"images/food4.jpg" },
  { id:21, title:"Forest Stream",        category:"Nature",  src:"images/nature4.jpg" },
  { id:22, title:"Elephent Herd",        category:"Animals", src:"images/animal8.jpg" },
  { id:23, title:"Garder flowers",       category:"Flowers", src:"images/flower5.jpg"  },
  { id:24, title:"Beach Sunset Escape",  category:"Travel",  src:"images/travel5.jpg" },
  { id:25, title:"Lion",                 category:"Animals",  src:"images/animal9.jpg"  },
  { id:26, title:"Parrot",               category:"Animals", src:"images/animal10.jpg" },
  { id:27, title:"Yellow sunshine flowers", category:"Flowers", src:"images/flower6.jpg"  },
  { id:28, title:"Camping Adventure",    category:"Travel",  src:"images/travel6.jpg" },
  { id:29, title:"Burder & French Fries", category:"Food",    src:"images/food5.jpg" },
  { id:30, title:"Waterfall Cave",       category:"Nature",  src:"images/nature5.jpg"  },
  { id:31, title:"Zibraa",               category:"Animals", src:"images/animal11.jpg" },
  { id:32, title:"Lotus",                category:"Flowers", src:"images/flower7.jpg"  },
  { id:33, title:"Beach Walk",           category:"Travel",  src:"images/travel11.jpg" },
  { id:34, title:"Frech fries with coco",category:"Food",    src:"images/food6.jpg" },
  { id:35, title:"Enchanted Forest Path",category:"Nature",  src:"images/nature6.jpg"  },
  { id:36, title:"Polar Bear",           category:"Animals", src:"images/animal12.jpg" },
  { id:37, title:"White pink flowers",   category:"Flowers", src:"images/flower8.jpg"  },
  { id:38, title:"Island Getaway",       category:"Travel",  src:"images/travel8.jpg" },
  { id:39, title:"French Fries",         category:"Food",    src:"images/food7.jpg" },
  { id:40, title:"Dark Woodland",        category:"Nature",  src:"images/nature7.jpg"  },
  { id:41, title:"Banda",                category:"Animals", src:"images/animal13.jpg" },
  { id:42, title:"Blue flowers",         category:"Flowers", src:"images/flower9.jpg"  },
  { id:43, title:"Hot air Balloon Ride", category:"Travel",  src:"images/travel9.jpg" },
  { id:44, title:"Pasta",                category:"Food",    src:"images/food8.jpg" },
  { id:45, title:"Blue Ocean Horizon",   category:"Nature",  src:"images/nature8.jpg" },
  { id:46, title:"Banda",                category:"Animals", src:"images/animal14.jpg" },
  { id:47, title:"White Malli",          category:"Flowers", src:"images/flower10.jpg"  },
  { id:48, title:"Snow Mountain Trek",   category:"Travel",  src:"images/travel10.jpg" },
  { id:50, title:"Veg Pullav",           category:"Food",    src:"images/food9.jpg" },
  { id:51, title:"Misty Hills",          category:"Nature",  src:"images/nature9.jpg"  },
  { id:52, title:"Wolf",                 category:"Animals", src:"images/animal15.jpg" },
  { id:53, title:"White Tulips",         category:"Flowers", src:"images/flower11.jpg"  },
  { id:54, title:"Freedom By Sea",       category:"Travel",  src:"images/travel13.jpg" },
  { id:55, title:"Veg Burger",           category:"Food",    src:"images/food10.jpg" },
  { id:56, title:"Iceberg Waterfall",    category:"Nature",  src:"images/nature10.jpg" },
  { id:57, title:" Panda",               category:"Animals", src:"images/animal14.jpg" },
  { id:58, title:"Blue Hydrangea",       category:"Flowers", src:"images/flower12.jpg"  },
  { id:59, title:"Lakeside Relaxation",  category:"Travel",  src:"images/travel15.jpg" },
  { id:60, title:"Winter Wonderland",    category:"Travel", src:"images/travel14.jpg" },
  { id:61, title:"Black Lake Reflection", category:"Nature", src:"images/nature11.jpg" },
  { id:62, title:"Rocky River Landscape", category:"Nature",  src:"images/nature12.jpg" },
  { id:63, title:"Foggy Mountain Range", category:"Nature", src:"images/nature13.jpg" },
  { id:64, title:"Tropical Forest Canopy", category:"Nature", src:"images/nature14.jpg" },
  { id:65, title:"Snowy Mountain Lake",  category:"Nature", src:"images/nature15.jpg" },
  { id:66, title:"Waffer",               category:"Food", src:"images/food11.jpg" },
  { id:67, title:"Parotta with salna",   category:"Food", src:"images/food12.jpg" },
  { id:68, title:"Indian native virunthu",category:"Food", src:"images/food13.jpg" },



];

/* ──────────────────────────────────────────
   STATE VARIABLES
   ────────────────────────────────────────── */
let activeFilter  = "All";
let searchQuery   = "";
let favorites     = new Set();
let lbIndex       = 0;
let filteredList  = [];
let ssInterval    = null;
let isDark        = false; // Default to Light Mode

/* ──────────────────────────────────────────
   GET ALL UNIQUE CATEGORIES
   ────────────────────────────────────────── */
const categories = ["All", ...new Set(IMAGES.map(img => img.category))];

/* ══════════════════════════════════════════
   RENDER FILTER BUTTONS
   ══════════════════════════════════════════ */
function renderFilters() {
  const bar = document.getElementById("filtersBar");
  bar.innerHTML = categories
    .map(cat => `
      <button 
        class="filter-btn ${cat === activeFilter ? 'active' : ''}" 
        onclick="setFilter('${cat}')">
        ${cat}
      </button>
    `)
    .join("");
}

function setFilter(cat) {
  activeFilter = cat;
  renderFilters();
  renderGallery();
}

/* ══════════════════════════════════════════
   RENDER STATS ROW
   ══════════════════════════════════════════ */
function renderStats() {
  // Count images per category
  const catCounts = {};
  IMAGES.forEach(img => {
    catCounts[img.category] = (catCounts[img.category] || 0) + 1;
  });
  const topCat = Object.entries(catCounts).sort((a, b) => b[1] - a[1])[0];

  document.getElementById("statsRow").innerHTML = `
    <div class="stat-card">
      <span class="stat-icon">🖼️</span>
      <div>
        <div class="stat-label">Total Images</div>
        <div class="stat-value">${IMAGES.length}</div>
      </div>
    </div>
    <div class="stat-card">
      <span class="stat-icon">★</span>
      <div>
        <div class="stat-label">Favorites</div>
        <div class="stat-value" id="statFav">${favorites.size}</div>
      </div>
    </div>
    <div class="stat-card">
      <span class="stat-icon">🏷️</span>
      <div>
        <div class="stat-label">Categories</div>
        <div class="stat-value">${categories.length - 1}</div>
      </div>
    </div>
    <div class="stat-card">
      <span class="stat-icon">🔥</span>
      <div>
        <div class="stat-label">Top Category</div>
        <div class="stat-value">${topCat[0]}</div>
      </div>
    </div>
  `;
}

function updateFavStat() {
  const el = document.getElementById("statFav");
  if (el) el.textContent = favorites.size;
}

/* ══════════════════════════════════════════
   FILTER + SEARCH LOGIC
   ══════════════════════════════════════════ */
function getFiltered() {
  return IMAGES.filter(img => {
    const matchCat    = activeFilter === "All" || img.category === activeFilter;
    const matchSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        img.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });
}

/* ══════════════════════════════════════════
   RENDER GALLERY GRID
   ══════════════════════════════════════════ */
function renderGallery() {
  filteredList = getFiltered();
  const grid   = document.getElementById("gallery");

  // Update badge
  document.getElementById("countBadge").textContent = `${filteredList.length} images`;

  // No results
  if (filteredList.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="emoji">🔍</div>
        <p style="margin-top:16px; font-size:1.1rem;">No images found</p>
        <p style="margin-top:8px; color:var(--muted);">Try a different search or filter</p>
      </div>`;
    return;
  }

  // Build gallery cards
  grid.innerHTML = filteredList.map((img, idx) => {
    const isFav = favorites.has(img.id);
    return `
      <div 
        class="gallery-item" 
        style="animation-delay: ${idx * 0.05}s"
        onclick="openLightbox(${idx})">

        <img src="${img.src}" alt="${img.title}" loading="lazy">

        <div class="item-overlay">
          <div class="item-title">${img.title}</div>
          <span class="item-cat">${img.category}</span>
        </div>

        <div class="item-actions" onclick="event.stopPropagation()">
          <button 
            class="action-btn ${isFav ? 'fav-active' : ''}"
            title="${isFav ? 'Remove favorite' : 'Add to favorites'}"
            onclick="toggleFav(${img.id}, this)">★</button>
          <a 
            class="action-btn" 
            href="${img.src}" 
            download="${img.title}.jpg" 
            title="Download">⬇</a>
        </div>

      </div>`;
  }).join("");
}

/* ══════════════════════════════════════════
   LIGHTBOX
   ══════════════════════════════════════════ */
function openLightbox(idx) {
  lbIndex = idx;
  updateLightbox();
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
  stopSlideshow();
}

function updateLightbox() {
  const img = filteredList[lbIndex];
  if (!img) return;

  const lbImg = document.getElementById("lbImg");

  // Smooth transition
  lbImg.style.transform = "scale(0.95)";
  setTimeout(() => {
    // Use higher resolution for lightbox
    const hiResSrc = img.src.replace(/\/600\/\d+$/, "/1200/800");
    lbImg.src       = hiResSrc;
    lbImg.alt       = img.title;
    lbImg.style.transform = "scale(1)";
  }, 150);

  document.getElementById("lbTitle").textContent   = img.title;
  document.getElementById("lbCat").textContent     = img.category;
  document.getElementById("lbCounter").textContent = `${lbIndex + 1} / ${filteredList.length}`;

  const dlBtn = document.getElementById("lbDownload");
  dlBtn.href     = img.src;
  dlBtn.download = img.title + ".jpg";
}

function lbNavigate(direction) {
  lbIndex = (lbIndex + direction + filteredList.length) % filteredList.length;
  updateLightbox();
}

/* ══════════════════════════════════════════
   SLIDESHOW
   ══════════════════════════════════════════ */
function toggleSlideshow() {
  if (ssInterval) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
}

function startSlideshow() {
  const btn = document.getElementById("slideshowBtn");
  if (btn) btn.textContent = "⏹ Stop Slideshow";
  ssInterval = setInterval(() => lbNavigate(1), 2500);
}

function stopSlideshow() {
  clearInterval(ssInterval);
  ssInterval = null;
  const btn = document.getElementById("slideshowBtn");
  if (btn) btn.textContent = "⏵ Start Slideshow";
}

/* ══════════════════════════════════════════
   FAVORITES
   ══════════════════════════════════════════ */
function toggleFav(id, btn) {
  if (favorites.has(id)) {
    favorites.delete(id);
    btn.classList.remove("fav-active");
    btn.title = "Add to favorites";
  } else {
    favorites.add(id);
    btn.classList.add("fav-active");
    btn.title = "Remove favorite";
  }
  updateFavCount();
  updateFavStat();

  // Refresh panel if open
  if (document.getElementById("favPanel").classList.contains("open")) {
    renderFavPanel();
  }
}

function updateFavCount() {
  document.getElementById("favCount").textContent = favorites.size;
}

function renderFavPanel() {
  const grid    = document.getElementById("favGrid");
  const favImgs = IMAGES.filter(img => favorites.has(img.id));

  if (favImgs.length === 0) {
    grid.innerHTML = `
      <div class="fav-empty">
        No favorites yet.<br>Click ★ on any image to add.
      </div>`;
    return;
  }

  grid.innerHTML = favImgs.map(img => `
    <div class="fav-card" onclick="openFavLightbox(${img.id})">
      <img src="${img.src}" alt="${img.title}">
      <div class="fav-card-name">${img.title}</div>
    </div>
  `).join("");
}

function openFavLightbox(id) {
  // Find this image in current filteredList; if not present, reset filter
  let idx = filteredList.findIndex(img => img.id === id);
  if (idx === -1) {
    setFilter("All");
    idx = filteredList.findIndex(img => img.id === id);
  }
  if (idx !== -1) openLightbox(idx);
}

/* ══════════════════════════════════════════
   THEME TOGGLE
   ══════════════════════════════════════════ */
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    isDark = true;
  } else if (savedTheme === "light") {
    isDark = false;
  } else {
    isDark = false; // default to light theme (white background)
  }
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.getElementById("themeBtn").textContent = isDark ? "🌙" : "☀️";
}

function toggleTheme() {
  isDark = !isDark;
  document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  document.getElementById("themeBtn").textContent = isDark ? "🌙" : "☀️";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

/* ══════════════════════════════════════════
   EVENT LISTENERS
   ══════════════════════════════════════════ */

// Search — real-time
document.getElementById("searchInput").addEventListener("input", function () {
  searchQuery = this.value;
  renderGallery();
});

// Theme
document.getElementById("themeBtn").addEventListener("click", toggleTheme);

// Lightbox controls
document.getElementById("lbClose").addEventListener("click", closeLightbox);
document.getElementById("lbPrev").addEventListener("click",  () => lbNavigate(-1));
document.getElementById("lbNext").addEventListener("click",  () => lbNavigate(1));
document.getElementById("slideshowBtn").addEventListener("click", toggleSlideshow);

// Click outside lightbox image to close
document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) closeLightbox();
});

// Slideshow start button (header)
document.getElementById("slideshowStartBtn").addEventListener("click", function () {
  if (filteredList.length === 0) return;
  openLightbox(0);
  setTimeout(startSlideshow, 400);
});

// Favorites tab + panel
document.getElementById("favTab").addEventListener("click", function () {
  document.getElementById("favPanel").classList.toggle("open");
  renderFavPanel();
});

document.getElementById("favClose").addEventListener("click", function () {
  document.getElementById("favPanel").classList.remove("open");
});

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  const lb = document.getElementById("lightbox");
  if (!lb.classList.contains("open")) return;

  if (e.key === "ArrowRight" || e.key === "ArrowDown")  lbNavigate(1);
  if (e.key === "ArrowLeft"  || e.key === "ArrowUp")    lbNavigate(-1);
  if (e.key === "Escape")  closeLightbox();
  if (e.key === " ")       { e.preventDefault(); toggleSlideshow(); }
});

/* ══════════════════════════════════════════
   INITIALISE
   ══════════════════════════════════════════ */
initTheme();
renderFilters();
renderStats();
renderGallery();
