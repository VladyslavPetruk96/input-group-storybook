import { CSSProperties, ReactNode } from "react";
import infoImage from "../../assets/info.svg";
import styles from "./InputLabel.module.css";

type InputLabelProps = {
	labelName: string;
	iconInfo?: ReactNode;
	size?: "sm" | "md" | "lg" | "xl";
};

export const InputLabel = ({
	labelName = "email",
	iconInfo = true,
	size = "md",
}: InputLabelProps) => {
	const iconInfoStyles: CSSProperties = iconInfo
		? { display: "block" }
		: { display: "none" };

	const sizeStyles: Record<
		NonNullable<InputLabelProps["size"]>,
		CSSProperties
	> = {
		sm: {
			fontSize: "12px",
		},
		md: {
			fontSize: "12px",
		},
		lg: {
			fontSize: "14px",
		},
		xl: {
			fontSize: "14px",
		},
	};

	return (
		<div className={styles.wrapper}>
			<label style={{ ...sizeStyles[size] }}>{labelName}</label>
			{iconInfo && (
				<div className={styles.icon__wrapper}>
					<img src={infoImage} alt="info" style={{ ...iconInfoStyles }} />

					<div className={styles.tooltip}>This is tooltip</div>
				</div>
			)}
		</div>
	);
};
