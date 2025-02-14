import { Navbar } from "@/features/navbar";
import "./styles/layout.scss";
import NextTopLoader from "nextjs-toploader";
import { Sidebar } from "@/features/sidebar";
import { Aside } from "@/features/aside";
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NextTopLoader />
				<div className="layout">
					<Sidebar />
					<div className="content">{children}</div>
					<Aside />
				</div>
			</body>
		</html>
	);
}
