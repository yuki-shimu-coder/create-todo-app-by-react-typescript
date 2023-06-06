import React from "react";

interface Props {
	incompleteTodos: string[];
	onClickComplete: (index: number) => void;
	onClickDelete: (index: number) => void;
}

export const InCompleteArea: React.FC<Props> = ({
	incompleteTodos,
	onClickComplete,
	onClickDelete,
}) => {
	return (
		<div className="incomplete-area">
			<p className="title">未完了のTODO</p>
			<ul>
				{incompleteTodos.map((incompleteTodo, index) => {
					return (
						<li key={incompleteTodo}>
							<div className="list-row">
								<span>{incompleteTodo}</span>
								<button
									onClick={() => {
										onClickComplete(index);
									}}
								>
									完了
								</button>
								<button
									onClick={() => {
										onClickDelete(index);
									}}
								>
									削除
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
