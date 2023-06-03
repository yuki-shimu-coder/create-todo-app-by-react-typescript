import React, { useState } from "react";

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
	/** ジェネリクスで型を指定することもできる */
	const [count, setCount] = useState<number | null>(0);

	/** useStateでオブジェクトの型を指定したい場合 */
	interface UserData {
		id: number;
		name: string;
		age: number;
	}
	const [user, setUser] = useState<UserData>({ id: 1, name: "taro", age: 20 });

	return (
		<div>
			<p>{props.text}</p>
			<p>{count}</p>
		</div>
	);
};

export default TestComponet;
