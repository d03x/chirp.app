"use client";
import { ErrorFallback } from "@/components/error-fallback";
import { ComponentType, ReactNode } from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface IBoundaryProvider {
	children: ReactNode;
	fallback?: ComponentType<FallbackProps>;
}

export default function ErrorBoundaryProvider(props: IBoundaryProvider) {
	return (
		<ErrorBoundary FallbackComponent={props.fallback ?? ErrorFallback}>
			{props.children}
		</ErrorBoundary>
	);
}
