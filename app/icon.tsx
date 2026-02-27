import { ImageResponse } from 'next/og';

export const runtime     = 'edge';
export const size        = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          background:      '#f59e0b',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          borderRadius:    '4px',
        }}
      >
        <div
          style={{
            color:       '#ffffff',
            fontSize:    '14px',
            fontWeight:  700,
            fontFamily:  'monospace',
            letterSpacing: '-0.5px',
            lineHeight:  1,
          }}
        >
          JC
        </div>
      </div>
    ),
    { ...size }
  );
}
