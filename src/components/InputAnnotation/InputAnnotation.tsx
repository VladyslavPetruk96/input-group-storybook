import { CSSProperties } from "react";
import styles from "./InputAnnotation.module.css";

type InputAnnotationProps = {
	hint?: boolean;
	text: string;
	error: boolean;
};

export const InputAnnotation = ({
	hint = true,
	text,
	error,
}: InputAnnotationProps) => {
	const textStyles: CSSProperties = hint
		? { display: "block" }
		: { display: "none" };

	return (
		<p style={{ ...textStyles }} className={error ? styles.error : ""}>
			{text}
		</p>
	);
};
