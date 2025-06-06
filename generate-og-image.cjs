const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  });

  // Create HTML content with the design
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          width: 1200px;
          height: 630px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: white;
          overflow: hidden;
        }
        h1 {
          font-size: 72px;
          font-weight: 800;
          margin-bottom: 30px;
          text-align: center;
          text-shadow: 3px 3px 6px rgba(0,0,0,0.3);
        }
        .subtitle {
          font-size: 32px;
          margin-bottom: 60px;
          text-align: center;
          opacity: 0.9;
        }
        .tech-stack {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 60px;
        }
        .tech {
          background: rgba(255,255,255,0.2);
          padding: 15px 30px;
          border-radius: 50px;
          font-size: 24px;
          backdrop-filter: blur(10px);
        }
        .footer {
          font-size: 20px;
          opacity: 0.7;
        }
      </style>
    </head>
    <body>
      <h1>Built from an iPhone 📱</h1>
      <p class="subtitle">Yes, this entire React app was created from a phone!</p>
      <div class="tech-stack">
        <div class="tech">WebSSH</div>
        <div class="tech">Tailscale</div>
        <div class="tech">Claude Code</div>
        <div class="tech">Vite + React</div>
        <div class="tech">Vercel</div>
      </div>
      <p class="footer">Powered by Claude Code • Deployed on Vercel</p>
    </body>
    </html>
  `;

  await page.setContent(html);
  
  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  
  // Take screenshot
  await page.screenshot({
    path: path.join(__dirname, 'public', 'og-image.png'),
    type: 'png',
  });

  await browser.close();
  console.log('OG image generated successfully!');
}

generateOGImage().catch(console.error);