import { ImageResponse } from 'next/og';

export const runtime     = 'edge';
export const size        = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          background:      '#f59e0b',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          gap:             '6px',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            color:         'rgba(255,255,255,0.75)',
            fontSize:      '16px',
            fontWeight:    700,
            fontFamily:    'monospace',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            lineHeight:    1,
          }}
        >
          CONTRACTOR
        </div>
        {/* Main wordmark */}
        <div
          style={{
            color:         '#ffffff',
            fontSize:      '36px',
            fontWeight:    800,
            fontFamily:    'monospace',
            letterSpacing: '0px',
            lineHeight:    1.2,
            textAlign:     'center',
          }}
        >
          JOB COSTING
        </div>
      </div>
    ),
    { ...size }
  );
}
