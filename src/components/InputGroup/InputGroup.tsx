import { useState } from "react";
import { Input } from "../Input/Input";
import { InputAnnotation } from "../InputAnnotation/InputAnnotation";
import { InputLabel } from "../InputLabel/InputLabel";

const InputGroup = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState(false);
	const [disabled, setDisabled] = useState(false);

	//approx error state change
	const handleValidationInput = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		const elem = event.target;
		setEmail(elem.value);
		if (email != "" && elem.value.length <= 4) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<div>
			<InputLabel labelName="Thats a label name" />
			<Input
				onChange={handleValidationInput}
				inputValue={email}
				error={error}
				disabled={disabled}
			/>
			<InputAnnotation text="This is a hint text to help user" error={error} />
		</div>
	);
};

export default InputGroup;
