import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	/** マウスをホバーすることで型推論による型を確認できる */
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

	/** 関数宣言 (引数の型, 引数の型) : [リターン値の型] */
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
	/** USER 型は、age、city、username、password プロパティを持つオブジェクトを表します。 */
	type USER = PROFILE & LOGIN;
	const userA: USER = {
		age: 30,
		city: "sapporo",
		username: "tanaka taro",
		password: "password",
	};

	/**
	 * UnionTypes
	 * 変数、パラメーター、または関数の戻り値の型を 2つ以上の型の組み合わせとして定義できる機能
	 */
	let value: boolean | number;
	value = true;
	value = 1;
	// 配列にも適用可能
	let arrayUni: (number | string)[];
	arrayUni = [1, 2, 3, "hello"];

	/**
	 * LiteralTypes
	 * リテラル型は、文字列、数値、真偽値などの具体的な値を型として指定することができます。
	 * リテラル型を使用することで、特定の値のみを受け入れるような厳密な型チェックが可能になります。
	 * これにより、意図しない値の代入や渡し忘れなどのミスを防ぐことができます。
	 */
	let company: "Facebook" | "Google" | "Amazon";
	// company = ""; // error
	company = "Amazon"; // normal

	let memory: 256 | 512 | 1024;
	// memory = 128; // error
	memory = 256; // normal

	/**
	 * typeof
	 * typeof で型を取得し、そのまま別の変数に型を定義することができる
	 * オブジェクトが複雑な構造属性を保有している場合でも継承してくれる。
	 * 開発者が属性をいちいち定義する必要がなくなるというのが一番強力な武器となる。
	 */
	let msg: string = "Hello,World";
	let msg2: typeof msg = "バルス、世界"; // string型を定義しているのと一緒

	let animal = { cat: "mikeneko" };
	// let animal2: typeof animal = { dog: "innu" }; // error
	let animal3: typeof animal = { cat: "BigNeko" }; // nomal

	/**
	 * keyof
	 * 
	 */

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
