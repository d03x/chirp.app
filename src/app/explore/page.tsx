import { Metadata } from "next";
import ExploreClientComponent from "./_components/client";

export default function Page() {
	return <ExploreClientComponent />;
}

export const metadata: Metadata = {
	title: "Explore",
	description: "Explore chirp",
};
