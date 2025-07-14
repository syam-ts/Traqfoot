<h2>📊 Traqfoot Frontend</h2>

<p>
  Traqfoot is a footfall monitoring application built with the MERN stack. This repository contains the frontend built using React.js with Vite, enabling infrastructure admins to monitor real-time sensor data, view analytics, and manage device status.
</p>

---

<h2>🔧 Tech Stack</h2>

<ul>
  <li>⚛️ React.js (with TypeScript)</li>
  <li>⚡ Vite (build tool)</li>
  <li>🧠 Redux Toolkit (state management)</li>
  <li>🌐 Axios (HTTP requests)</li>
  <li>🎨 Tailwind CSS v4 (styling)</li>
  <li>✅ Formik (form validation)</li>
  <li>🎞️ Framer Motion (UI animation)</li>
  <li>🔔 Sonner (toast notifications)</li>
  <li>🐳 Docker (containerized deployment)</li>
</ul>

---

<h2>📁 Folder Structure</h2>

<pre>
/traqfoot-frontend
│
├── <b>public/</b>               # Static files (logo, favicon)
├── <b>src/</b>
│   ├── <b>assets/</b>           # Logos, icons
│   ├── <b>components/</b>       # Reusable UI components
│   ├── <b>configs/</b>          # App-wide constants & interfaces
│   ├── <b>Formik/</b>           # Form validation logic
│   ├── <b>HOC/</b>              # Protected and guest routes
│   ├── <b>pages/</b>            # Page-level components (Login, Dashboard, etc.)
│   ├── <b>redux/</b>            # Redux slices and store
│   ├── <b>services/</b>         # Axios API requests
│   ├── <b>style/</b>            # Tailwind and global styles
│   ├── <b>App.tsx</b>           # Root app with router
│   ├── <b>main.tsx</b>          # React app entry point
│   └── <b>vite-env.d.ts</b>
│
├── <b>Dockerfile</b>            # Docker config for production build
├── <b>docker-compose.yml</b>    # Docker Compose config (optional multi-service setup)
├── <b>.dockerignore</b>         # Files excluded from Docker image
├── <b>.env</b>                  # Environment variables
├── <b>.gitignore</b>            # Git ignored files
├── <b>eslint.config.js</b>      # ESLint configuration
├── <b>index.html</b>            # HTML entry point
├── <b>vite.config.ts</b>        # Vite + Tailwind config
├── <b>vercel.json</b>           # Vercel routing config
│
├── <b>tsconfig.json</b>         # TypeScript base config
├── <b>tsconfig.app.json</b>     # App-specific TypeScript config
├── <b>tsconfig.node.json</b>    # Node-specific TypeScript config
│
├── <b>package.json</b>          # Dependencies and scripts
├── <b>yarn.lock</b>             # Yarn lockfile
└── <b>README.md</b>             # Project documentation
</pre>


---

<h2>🔑 Features</h2>

<ul>
  <li>🛡️ Protected Routing using Redux + HOCs</li>
  <li>📊 Real-time Footfall Dashboard (Sensor data updates hourly)</li>
  <li>📍 Sensor Details Page with live count and status</li>
  <li>👤 Infrastructure Profile Management</li>
  <li>🔒 JWT-based authentication with persistent login</li>
  <li>📱 Fully responsive layout with modern UI</li>
  <li>🐳 Docker support for seamless deployment</li>
</ul>

---
<h2>🚀 Getting Started</h2>

<h3>📋 Prerequisites</h3>
<ul>
  <li>Node.js (v18+)</li>
  <li>Yarn</li>
  <li>Backend server running (e.g., Render)</li>
  <li>Docker (for containerized setup, optional)</li>
</ul>

<h3>📥 1. Clone the Repository</h3>
<pre><code>git clone https://github.com/syam-ts/Traqfoot-Frontend.git
cd Traqfoot-Frontend
</code></pre>

<h3>📦 2. Install Dependencies</h3>
<pre><code>yarn install
</code></pre>

<h3>⚙️ 3. Create .env File</h3>
<pre><code>touch .env
</code></pre>
<p>Add the following variable:</p>
<pre><code>VITE_FRONTEND_URL=https://traqfoot.yourUrl.app
VITE_BACKEND_URL=https://traqfoot-backend.yourUrl.com
</code></pre>

<h3>▶️ 4. Run the Development Server (Non-Docker)</h3>
<pre><code>yarn dev
</code></pre>
<p>App will be available at <code>http://localhost:5173</code></p>

<hr />

<h2>🐳 Running with Docker</h2>
<p>Make sure your <code>.env</code> file is correctly set up before building the image.</p>

<h3>1. Build the Docker Image</h3>
<pre><code>docker build -t traqfoot-frontend .
</code></pre>

<h3>2. Run the Container</h3>
<pre><code>docker run -d -p 5173:80 traqfoot-frontend
</code></pre>
<p>App will be running at <code>http://localhost:5173</code></p>

<h3>⚙️ Optional: Using Docker Compose</h3>
<p>Add the following <code>docker-compose.yml</code>:</p>
<pre><code class="language-yaml">version: '3.8'

services:
  traqfoot-frontend:
    build: .
    ports:
      - '5173:80'
    env_file:
      - .env
    restart: unless-stopped
</code></pre>

<p>Then run:</p>
<pre><code>docker-compose up --build
</code></pre>

<p><strong>Note:</strong> Ensure your backend is reachable via <code>VITE_BACKEND_URL</code> when running inside Docker.</p>
