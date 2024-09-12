import { CSSProperties, ReactNode } from "react";
import infoImage from "../../assets/info.svg";
import styles from "./InputLabel.module.css";

type InputLabelProps = {
	labelName: string;
	iconInfo?: ReactNode;
};

const InputLabel = ({
	labelName = "email",
	iconInfo = true,
}: InputLabelProps) => {
	const iconInfoStyles: CSSProperties = iconInfo
		? { display: "block" }
		: { display: "none" };

	return (
		<div className={styles.wrapper}>
			<label>{labelName}</label>
			{iconInfo && (
				<div className={styles.icon__wrapper}>
					<img src={infoImage} alt="info" style={{ ...iconInfoStyles }} />

					<div className={styles.tooltip}>This is tooltip</div>
				</div>
			)}
		</div>
	);
};

export default InputLabel;
