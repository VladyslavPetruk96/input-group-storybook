import { CSSProperties, ReactNode } from "react";
import helpIcon from "../../assets/help.svg";
import helpError from "../../assets/helpError.svg";
import searchIcon from "../../assets/search.svg";
import searchError from "../../assets/searchError.svg";
import shortkeyIcon from "../../assets/shortkey.svg";
import styles from "./Input.module.css";

type InputProps = {
	size?: "sm" | "md" | "lg" | "xl";
	alignment?: "left" | "right";
	border?: boolean;
	iconBefore?: ReactNode;
	iconAfter?: ReactNode;
	shortkey?: ReactNode;
	placeholder?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	inputValue: string;
	error: boolean;
	disabled: boolean;
};

export const Input = ({
	size = "md",
	alignment = "left",
	border = true,
	iconBefore = true,
	iconAfter = true,
	shortkey = true,
	placeholder = "Input...",
	error,
	onChange,
	inputValue,
	disabled,
}: InputProps) => {
	const sizeStyles: Record<NonNullable<InputProps["size"]>, CSSProperties> = {
		sm: {
			lineHeight: "20px",
			fontSize: "12px",
			padding: `${iconBefore ? "2px 70px 2px 34px" : "2px 12px"}`,
		},
		md: {
			lineHeight: "20px",
			fontSize: "12px",
			padding: `${iconBefore ? "8px 70px 8px 34px" : "8px 12px"}`,
		},
		lg: {
			lineHeight: "24px",
			fontSize: "14px",
			padding: `${iconBefore ? "8px 70px 8px 34px" : "8px 12px"}`,
		},
		xl: {
			lineHeight: "24px",
			fontSize: "14px",
			padding: `${iconBefore ? "12px 70px 12px 34px" : "12px"}`,
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

	const iconBeforeStyles: CSSProperties = iconBefore
		? { display: "block" }
		: { display: "none" };

	const iconAfterStyles: CSSProperties = iconAfter
		? { display: "block" }
		: { display: "none" };

	const shortkeyStyles: CSSProperties = shortkey
		? { display: "block" }
		: { display: "none" };

	return (
		<div className={styles.wrapper}>
			<input
				type="text"
				onChange={onChange}
				value={inputValue}
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
			{iconBefore && (
				<img
					src={!error ? searchIcon : searchError}
					className={`${styles.icon} ${styles.search__icon}`}
					alt="search"
					style={{ ...iconBeforeStyles }}
				/>
			)}
			<div className={`${styles.wrapper__icons__right}`}>
				{iconAfter && (
					<img
						src={!error ? helpIcon : helpError}
						className={`${styles.icon} ${styles.help__icon} ${
							shortkey ? "" : styles.no__shortkey
						}`}
						alt="help"
						style={{ ...iconAfterStyles }}
					/>
				)}

				{shortkey && (
					<img
						src={shortkeyIcon}
						className={`${styles.icon} ${styles.shortkey__icon}`}
						alt="shortkey"
						style={{ ...shortkeyStyles }}
					/>
				)}
			</div>
		</div>
	);
};
