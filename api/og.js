import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export default function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: 72, fontWeight: 800, margin: 0 }}>
          Built from an iPhone 📱
        </h1>
        <p style={{ fontSize: 32, marginTop: 20 }}>
          Yes, this entire React app was created from a phone!
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}