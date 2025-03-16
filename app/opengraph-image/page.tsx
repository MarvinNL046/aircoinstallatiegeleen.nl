export default function OpenGraphImage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: '#1e40af',
        color: 'white',
        padding: '48px',
      }}
    >
      <h1
        style={{
          fontSize: '64px',
          fontWeight: 700,
          marginBottom: '24px',
          textAlign: 'center',
        }}
      >
        Airco Offerte Limburg
      </h1>
      <p
        style={{
          fontSize: '32px',
          color: 'rgba(255, 255, 255, 0.9)',
          textAlign: 'center',
        }}
      >
        Professionele Airconditioning Services
      </p>
    </div>
  )
}

export const metadata = {
  openGraph: {
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
    }],
  },
}