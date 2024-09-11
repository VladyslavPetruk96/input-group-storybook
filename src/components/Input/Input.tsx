import { CSSProperties, useState } from "react";
import styles from "./Input.module.css";

type InputProps = {
	size?: "sm" | "md" | "lg" | "xl";
	alignment?: "left" | "right";
	border?: boolean;
	// iconBefore?: React.ReactNode;
	// iconAfter?: React.ReactNode;
	// shortkey?: React.ReactNode;
	placeholder?: string;
	// onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	// inputValue: string;
};

export const Input = ({
	size = "md",
	alignment = "left",
	border = true,
	// iconBefore = false,
	// iconAfter = false,
	// shortkey = false,
	placeholder = "Input...",
}: // onChange,
// inputValue,
InputProps) => {
	const [disabled, setDisabled] = useState(false);
	const [error, setError] = useState(false);

	const sizeStyles: Record<NonNullable<InputProps["size"]>, CSSProperties> = {
		sm: {
			lineHeight: "20px",
			fontSize: "12px",
			padding: "2px 12px",
		},
		md: {
			lineHeight: "20px",
			fontSize: "12px",
			padding: "8px 12px",
		},
		lg: {
			lineHeight: "24px",
			fontSize: "14px",
			padding: "8px 12px",
		},
		xl: {
			lineHeight: "24px",
			fontSize: "14px",
			padding: "12px 12px",
		},
	};

	const alignmentStyles: Record<
		NonNullable<InputProps["alignment"]>,
		CSSProperties
	> = {
		left: {
			textAlign: "left",
		},
		right: {
			textAlign: "right",
		},
	};

	const borderStyles: CSSProperties = border
		? { borderWidth: "1px" }
		: { borderColor: "transparent" };

	return (
		<input
			type="text"
			// onChange={onChange}
			// value={value}
			disabled={disabled}
			className={`${styles.input} ${error ? styles.error : ""} ${
				disabled ? styles.disabled : ""
			}`}
			style={{
				...sizeStyles[size],
				...alignmentStyles[alignment],
				...borderStyles,
			}}
			placeholder={placeholder}
		/>
	);
};
