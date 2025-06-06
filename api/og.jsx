import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 20,
            textAlign: 'center',
            textShadow: '3px 3px 6px rgba(0,0,0,0.3)',
          }}
        >
          Built from an iPhone 📱
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            marginBottom: 40,
            textAlign: 'center',
          }}
        >
          Yes, this entire React app was created from a phone!
        </div>
        <div
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['WebSSH', 'Tailscale', 'Claude Code', 'Vite + React', 'Vercel'].map((tech) => (
            <div
              key={tech}
              style={{
                background: 'rgba(255,255,255,0.2)',
                padding: '15px 30px',
                borderRadius: 50,
                fontSize: 24,
                backdropFilter: 'blur(10px)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div
          style={{
            fontSize: 20,
            opacity: 0.7,
            marginTop: 60,
          }}
        >
          Powered by Claude Code • Deployed on Vercel
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}