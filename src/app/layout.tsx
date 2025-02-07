import React from "react";
import "../styles/soul-styles.css";
export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
            import { applyPolyfills, defineCustomElements } from '/assets/soul/soul-web-components/loader/index.es2017.js';
            applyPolyfills().then(() => {
              defineCustomElements();
            });`,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
