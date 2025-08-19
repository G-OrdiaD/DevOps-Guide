# 📘 DevOps Guide - Interactive Learning Platform

An interactive, visual guide to understanding and implementing DevOps workflows for containerized applications. Perfect for developers learning Docker, Kubernetes, and Helm.

## 🚀 Features

- **Interactive Navigation**: Smooth section transitions with visual feedback
- **Live HPA Simulation**: Real-time Horizontal Pod Autoscaler visualization
- **Copy-to-Clipboard**: One-click code snippet copying
- **Responsive Design**: Works perfectly on desktop and mobile
- **Visual Workflow**: Step-by-step DevOps process diagram
- **Tooltip Explanations**: Hover explanations for technical terms

## 📁 Project Structure

```
devops-guide/
├── index.html              # Main application file
├── assets/
│   ├── css/
│   │   └── styles.css      # Complete styling
│   └── js/
│       ├── main.js         # Navigation & core functionality
│       ├── chart.js        # HPA simulation chart
│       └── copy.js         # Copy-to-clipboard functionality
└── sections/               # Content sections
    ├── overview.html       # Introduction & workflow diagram
    ├── dockerize.html      # Docker containerization
    ├── build.html          # Local build & testing
    ├── kubernetes.html     # Kubernetes setup
    ├── helm.html           # Helm chart creation
    ├── deploy.html         # Deployment commands
    └── scale.html          # Autoscaling with HPA
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript ES6+** - Interactive functionality
- **Chart.js** - Data visualization for HPA
- **Tailwind CSS CDN** - Utility-first CSS framework
- **Google Fonts** - Inter font family

## 🚀 Quick Start

### Option 1: Live Server (Recommended)
```bash
# Install live-server globally
npm install -g live-server

# Navigate to project directory
cd devops-guide

# Start development server
live-server --port=3000
```

### Option 2: Python HTTP Server
```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

### Option 3: Node.js http-server
```bash
# Install http-server
npm install -g http-server

# Start server
http-server -p 8080 --cors
```

### Option 4: Open Directly
Simply open `index.html` in your web browser (note: some features may not work due to CORS restrictions).

## 🌐 Access the Application

After starting the server, open your browser and navigate to:
- **Local**: `http://localhost:3000` (or your chosen port)
- **Network**: `http://[your-ip-address]:3000` (for mobile testing)

## 📖 How to Use

1. **Navigate**: Use the sidebar to explore different DevOps stages
2. **Interact**: Click code copy buttons to easily use commands
3. **Simulate**: Use the CPU slider in "Scale" section to see autoscaling in action
4. **Learn**: Hover over tooltip icons for detailed explanations

## 🎯 Learning Path

The guide covers the complete DevOps workflow:

1. **📦 Dockerize** - Containerize your application
2. **🔨 Build & Test** - Local development workflow
3. **⚙️ Kubernetes Setup** - Local cluster configuration
4. **🧭 Helm Charts** - Kubernetes package management
5. **🚢 Deploy** - Production deployment
6. **📈 Scale** - Autoscaling and maintenance

## 📦 Dependencies

All dependencies are loaded via CDN:
- **Chart.js** (v3.9.1) - Data visualization
- **Tailwind CSS** - Utility classes
- **Google Fonts** - Inter font family

No local installation or build process required!

## 🐛 Troubleshooting

### Common Issues:

1. **Sections not loading**
   ```bash
   # Ensure you're using a web server (not file:// protocol)
   http-server -p 8080 --cors
   ```

2. **Chart not displaying**
   - Check browser console for errors
   - Ensure internet connection for CDN resources

3. **Copy functionality not working**
   - Modern browsers require secure context (HTTPS or localhost)

### Browser Support:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 📝 GitHub Setup

### 1. Create New Repository
```bash
# Initialize git
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: initial DevOps guide release"

# Add remote origin
git remote add origin https://github.com/your-username/devops-guide.git

# Push to main branch
git push -u origin main
```

### 2. Add GitHub Pages (Optional)
Enable GitHub Pages in repository settings to host it for free at:
`https://your-username.github.io/devops-guide`

### 3. Add .gitignore
Create `.gitignore` file:
```
# Dependencies
node_modules/
npm-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Optional npm cache directory
.npm

# Optional REPL history
.node_repl_history

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👨‍💻 Author

Ordia David Gbakena 
Frontend Developer and DevOps Engineer

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙋‍♂️ Support

If you have any questions or issues:
1. Check the browser console for errors
2. Ensure all file paths are correct
3. Verify you're running a local server

---

**Happy DevOps Learning!** 🚀

This guide provides hands-on experience with real DevOps tools and workflows in a safe, interactive environment. Perfect for beginners and experienced developers alike!