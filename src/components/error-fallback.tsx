import React from "react";
import styles from "./styles/error-fallback.module.scss";
import { createPortal } from "react-dom";
import { FallbackProps } from "react-error-boundary";
interface IErrorFallback extends FallbackProps {
	error: Error;
}
export const ErrorFallback: React.FC<IErrorFallback> = ({
	error,
	resetErrorBoundary,
}) => {
	return createPortal(
		<div className={styles.container}>
			<div className={styles.content}>
				<div>
					<p className={styles.type}>{error.name}</p>
					<p>Error: {error.message}</p>
					<p>Stack: {error.stack}</p>
				</div>
				<button onClick={resetErrorBoundary}>Try Again</button>
			</div>
		</div>,
		document.body,
	);
};
