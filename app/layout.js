export default function RootLayout({ children }) {
  return (
      <html lang="en">
          <body style={{ fontFamily: 'Arial, sans-serif' }}>{children}</body>
      </html>
  );
}
