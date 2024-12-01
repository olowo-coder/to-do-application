export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "#1976d2", color: "#fff", padding: "10px", textAlign: "center" }}>
          <h1>To-Do Application</h1>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
