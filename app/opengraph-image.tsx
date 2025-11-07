import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #ecfeff 100%)',
          padding: '64px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: '#0f172a', fontSize: 24 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="#2563eb"><path d="M12 2l3 6 6 .9-4.5 4.4 1.1 6.3L12 16.9 6.4 19.6l1.1-6.3L3 8.9 9 8z"/></svg>
          <strong>MediPro Supply</strong>
        </div>
        <div style={{ fontSize: 54, lineHeight: 1.1, marginTop: 20, color: '#0f172a' }}>
          Material m?dico y quir?rgico B2B
        </div>
        <div style={{ fontSize: 28, marginTop: 12, color: '#334155' }}>
          Calidad certificada ? Entrega ?gil ? Asesor?a experta
        </div>
      </div>
    ),
    size
  );
}
