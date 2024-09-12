import { CSSProperties } from "react";

type InputAnnotationProps = {
	hint?: boolean;
	text: string;
};

export const InputAnnotation = ({
	hint = true,
	text,
}: InputAnnotationProps) => {
	const textStyles: CSSProperties = hint
		? { display: "block" }
		: { display: "none" };

	return <p style={{ ...textStyles }}>{text}</p>;
};
