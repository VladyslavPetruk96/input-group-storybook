import { CSSProperties } from "react";

type InputAnnotationProps = {
	hint?: boolean;
	text?: string;
};

const InputAnnotation = ({
	hint = true,
	text = "This is a hint text to help user.",
}: InputAnnotationProps) => {
	const textStyles: CSSProperties = hint
		? { display: "block" }
		: { display: "none" };

	return <p style={{ ...textStyles }}>{text}</p>;
};

export default InputAnnotation;
