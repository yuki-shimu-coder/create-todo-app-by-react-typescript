import React from "react";

interface Props {
	text: string;
}

/**
 * TypeScriptを使用したプロップスの型定義
 * 型を使用することで、開発者が意図しない値がコンポーネントに渡されるのを防ぐことができる
 * @param props text以外のpropsを受け取らない
 * @returns 
 */
const TestComponet: React.FC<Props> = (props) => {
	return (
		<div>
			<p>{props.text}</p>
		</div>
	);
};

export default TestComponet;
