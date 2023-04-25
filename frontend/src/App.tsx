import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	/** マウスをホーバーすることで型推論による型を確認できる */
	let usrName = "name";
	let dummyNum = 2;
	let bool = true;
	/** 型の定義は変数宣言の後に:で付与する */
	let arry: boolean[] = [true, false, true];

	/** オブジェクトの型定義 */
	interface Name {
		first: string;
		//疑問符を付与することで、ない場合はないものとして扱う
		middle?: string;
		// | で許容する型を追加することができる。
		last: string | null;
	}
	const name1: Name = {
		first: "taro",
		last: "yamada",
	};
	const name2: Name = {
		first: "tanaka",
		middle: "Tom",
		last: "taro",
	};

	/** 関数宣言 () : [リターン値の型を定義する事ができる] */
	const func1 = (x: number, y: number): number => {
		return x + y;
	};

	/**
	 * Intersection Types
	 * Intersection Types（交差型）は、TypeScriptで複数の型を結合するために使用される型の1つです。
	 */
	type PROFILE = {
		age: number;
		city: string;
	};
	type LOGIN = {
		username: string;
		password: string;
	};
	/** USER 型は、age プロパティ、city プロパティ、username プロパティ、および password プロパティを持つオブジェクトを表します。 */
	type USER = PROFILE & LOGIN;
	const userA: USER = {
		age: 30,
		city: "sapporo",
		username: "tanaka taro",
		password: "password",
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
