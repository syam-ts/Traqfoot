<h2>📊 Traqfoot Frontend</h2>
<p>Traqfoot is a footfall monitoring application built with the MERN stack. This repository contains the frontend built using React.js with Vite, enabling infrastructure admins to monitor real-time sensor data, view sensor analytics, and manage profiles.</p>

<h2>🔧 Tech Stack</h2>
<ul>
  <li>React.js (with TypeScript)</li>
  <li>Vite (React build tool)</li>
  <li>Redux Toolkit for global state management</li>
  <li>Axios for HTTP requests</li>
  <li>Tailwind CSS v4 for styling</li>
  <li>Formik for form validation</li>
  <li>Framer Motion (UI animation)</li>
  <li>Sonner (modern toast notifications)</li>
</ul>

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
├── <b>vite.config.ts</b>        # Vite + Tailwind config
├── <b>vercel.json</b>           # Vercel routing config
├── <b>.env</b>                  # Environment variables
├── <b>tsconfig.json</b>
├── <b>package.json</b>
└── <b>README.md</b>
</pre>

<h2>🔑 Features</h2>
<ul>
  <li>🛡️ Protected Routing using Redux + HOCs</li>
  <li>📊 Real-time Footfall Dashboard (Sensor data updates hourly)</li>
  <li>📍 Sensor Details Page with live count and last update</li>
  <li>👤 Infrastructure Profile Management</li>
  <li>🔒 JWT-based authentication with persistent login</li>
  <li>📱 Fully responsive layout with modern UI</li>
</ul>

<hr />

<h2>🚀 Getting Started</h2>

<h3>📋 Prerequisites</h3>
<ul>
  <li>Node.js (v18+)</li>
  <li>Backend server running (Render, localhost, etc.)</li>
</ul>

<h3>📥 1. Clone the Repository</h3>
<pre><code>git clone https://github.com/syam-ts/Traqfoot-Frontend.git
cd Traqfoot-Frontend
</code></pre>

<h3>📦 2. Install Dependencies</h3>
<pre><code>
yarn install
</code></pre>

<h3>⚙️ 3. Create .env File</h3>
<pre><code>touch .env</code></pre>
<p>Add the following variable:</p>
<pre><code>
VITE_BACKEND_URL=https://your-backend-url.onrender.com
</code></pre>

<h3>▶️ 4. Start the Development Server</h3>
<pre><code>yarn dev</code></pre>

<p>The app will be available at <code>http://localhost:5173</code> by default.</p>

<hr />

<h2>📚 Important Libraries</h2>
<ul>
  <li>axios, redux, @reduxjs/toolkit</li>
  <li>formik</li>
  <li>tailwindcss v4, framer-motion</li>
  <li>sonner, jwt-decode</li>
  <li>react-router-dom</li>
</ul>
