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
	/** カウント増やす処理 */
	const onClick = () => {
		if(count !== null){	
			setCount(count + 1);
		} else {
			// countがnullの場合、何らかの処理を行う。
			// 例えば,setCountを１で初期化するなど。
			setCount(1)
		}
	};

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
			<button onClick={onClick}>カウントを増やす</button>
		</div>
	);
};

export default TestComponet;
