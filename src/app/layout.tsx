import { Navbar } from "@/features/navbar";
import "./styles/layout.scss";
import NextTopLoader from "nextjs-toploader";
import { Sidebar } from "@/features/sidebar";
import { Aside } from "@/features/aside";
import AuthFlow from "@/features/auth/components/auth-flow";
import ErrorBoundaryProvider from "@/provider/ErrorBoundaryProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundaryProvider>
          <NextTopLoader />
        </ErrorBoundaryProvider>
        <div className="layout">
          <ErrorBoundaryProvider>
            <Sidebar />
          </ErrorBoundaryProvider>
          <div className="content">
            <ErrorBoundaryProvider>{children}</ErrorBoundaryProvider>
          </div>
          <ErrorBoundaryProvider>
            <Aside />
          </ErrorBoundaryProvider>
        </div>
      </body>
    </html>
  );
}
