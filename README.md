# Sweet Friend Birthday Website

A beautiful, elegant birthday website with a sweet friendship theme, soft divine aesthetics, animated gradient background, peacock feather decorations, and optional Krishna flute music.

## Quick Start (Local)

1. **Add music (optional):** Download a royalty-free Krishna flute track from [Pixabay](https://pixabay.com/music/search/krishna%20flute/) and save it as `audio/flute.mp3`
2. **Run locally:** Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code/Cursor, or run:
   ```bash
   python -m http.server 5500
   ```
   Then open `http://localhost:5500` in your browser.

## Customization

### Replace {{HER_NAME}}

1. Open `index.html` in a text editor
2. Find `{{HER_NAME}}` (appears near the top)
3. Replace it with your friend's name (e.g., `Priya`, `Sarah`, etc.)

## Deployment

### Deploy to Netlify

**Option A: Drag & Drop**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Sign in or create an account
3. Click **"Add new site"** → **"Deploy manually"**
4. Drag the entire `wbsite` folder into the drop zone
5. Netlify will deploy and give you a URL like `https://random-name-123.netlify.app`

**Option B: Connect Git**
1. Push this project to a GitHub repository
2. Go to [app.netlify.com](https://app.netlify.com) → **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub account and select the repository
4. Netlify will auto-detect the settings (publish directory: `.` or root)
5. Click **Deploy**

### Deploy to GitHub Pages

1. Push this project to a GitHub repository
2. Go to the repo → **Settings** → **Pages**
3. Under "Source", select **Deploy from a branch**
4. Choose the `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Share the Live Link

After deployment:
- **Netlify:** Your site URL appears in the Netlify dashboard (e.g., `https://sweet-birthday-xyz.netlify.app`). You can also set a custom domain.
- **GitHub Pages:** Your site URL is `https://<username>.github.io/<repo-name>/`

Simply copy the URL and share it with your friend!

## File Structure

```
wbsite/
├── index.html      # Main page
├── style.css       # Styles and animations
├── script.js       # Confetti and music
├── audio/
│   └── flute.mp3   # Add your Krishna flute track here
├── .gitignore
├── netlify.toml
└── README.md
```

## Tech Stack

- HTML, CSS, minimal JavaScript
- No frameworks
- Runs with Live Server or any static file server
- Ready for Netlify and GitHub Pages
