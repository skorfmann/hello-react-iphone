import './App.css'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1>Built Entirely from an iPhone 📱</h1>
        <p className="subtitle">Yes, you read that right!</p>
      </div>

      <div className="content">
        <section className="tech-stack">
          <h2>The Mobile Dev Setup</h2>
          <div className="tech-cards">
            <div className="tech-card">
              <h3>📱 WebSSH</h3>
              <p>iOS app providing terminal access from my iPhone</p>
            </div>
            <div className="tech-card">
              <h3>🔗 Tailscale</h3>
              <p>Secure connection to my Mac Studio at home</p>
            </div>
            <div className="tech-card">
              <h3>🤖 Claude Code</h3>
              <p>AI pair programmer that wrote this entire app</p>
            </div>
            <div className="tech-card">
              <h3>⚡ Vite + React</h3>
              <p>Lightning fast development with modern tooling</p>
            </div>
            <div className="tech-card">
              <h3>▲ Vercel</h3>
              <p>Deployed instantly from the command line</p>
            </div>
          </div>
        </section>

        <section className="story">
          <h2>The Story</h2>
          <p>
            This entire React application was created without touching a traditional computer. 
            Using WebSSH on my iPhone, I connected to my Mac Studio at home through Tailscale's 
            secure network. Then, with Claude Code as my AI assistant, I built, styled, and 
            deployed this app—all from my phone!
          </p>
          <p>
            It's a testament to how far mobile development has come. With the right tools, 
            you can code from anywhere, even from your pocket.
          </p>
        </section>

        <section className="workflow">
          <h2>The Workflow</h2>
          <ol>
            <li>Open WebSSH on iPhone</li>
            <li>Connect to Mac Studio via Tailscale</li>
            <li>Launch Claude Code in terminal</li>
            <li>Use AI to generate and modify code</li>
            <li>Deploy to Vercel with a single command</li>
          </ol>
        </section>
      </div>

      <footer>
        <p>Built with ❤️ from an iPhone • Powered by Claude Code</p>
      </footer>
    </div>
  )
}

export default App
