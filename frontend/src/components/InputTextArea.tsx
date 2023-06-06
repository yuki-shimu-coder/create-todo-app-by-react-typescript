import React from "react";

interface Props {
	todoText: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onClick: () => void;
}

export const InputTextArea: React.FC<Props> = ({
	todoText,
	onChange,
	onClick,
}) => {
	return (
		<div className="input-area">
			<input
				type="text"
				placeholder="TODOを入力"
				value={todoText}
				onChange={onChange}
			/>
			<button onClick={onClick}>追加</button>
		</div>
	);
};
