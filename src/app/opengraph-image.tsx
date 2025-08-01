import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Y-Be | Engineering Competitive Advantages'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #0F1419 0%, #1a2332 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '80px',
          }}
        >
          {/* Logo placeholder - using Y-Be text since we can't load external images in edge runtime */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '40px',
              padding: '30px',
              background: 'rgba(217, 187, 164, 0.1)',
              borderRadius: '20px',
              width: '140px',
              height: '140px',
            }}
          >
            <div
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#D9BBA4',
                fontFamily: 'serif',
              }}
            >
              Y
            </div>
          </div>
          
          {/* Title */}
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textAlign: 'center',
              margin: '0 0 20px 0',
              fontFamily: 'serif',
            }}
          >
            Y-Be
          </h1>
          
          {/* Subtitle */}
          <p
            style={{
              fontSize: '32px',
              color: '#D9BBA4',
              textAlign: 'center',
              margin: '0',
              maxWidth: '800px',
              lineHeight: '1.2',
            }}
          >
            Engineering Competitive Advantages
          </p>
          
          {/* Description */}
          <p
            style={{
              fontSize: '24px',
              color: 'rgba(217, 187, 164, 0.8)',
              textAlign: 'center',
              margin: '20px 0 0 0',
              maxWidth: '900px',
              lineHeight: '1.3',
            }}
          >
            Data-driven web solutions that turn insights into advantages
          </p>
        </div>
      ),
      {
        ...size,
      }
    )
  } catch (e: unknown) {
    console.log(`Failed to generate Open Graph image: ${e instanceof Error ? e.message : 'Unknown error'}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
