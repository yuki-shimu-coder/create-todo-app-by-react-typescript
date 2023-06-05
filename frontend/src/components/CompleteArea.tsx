import React from "react";

interface Props {
	completeTodos: string[];
	onClickBack: (index: number) => void;
}

export const CompleteArea: React.FC<Props> = ({
	completeTodos,
	onClickBack,
}) => {
	return (
		<div className="complete-area">
			<p className="title">完了のTODO</p>
			<ul>
				{completeTodos.map((completeTodo, index) => {
					return (
						<li key={completeTodo}>
							<div className="list-row">
								<span>{completeTodo}</span>
								<button
									onClick={() => {
										onClickBack(index);
									}}
								>
									戻す
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
