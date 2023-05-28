import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TestComponet from "./TestComponent";

const App: React.FC = () => {
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
	let msg2: typeof msg = "見ろ、人がゴミのようだ"; // string型を定義しているのと一緒

	let animal = { cat: "mikeneko" };
	// let animal2: typeof animal = { dog: "innu" }; // error
	let animal3: typeof animal = { cat: "BigNeko" }; // nomal

	/**
	 * keyof
	 * keyofキーワードは、オブジェクト型のプロパティキーを取得するために使用される。
	 * keyofを使用すると、指定したオブジェクト型のプロパティ名のユニオン型が得られます。
	 * ユニオン型は、58行目を参照。
	 */
	type KEYS = {
		primary: string;
		secondary: string;
	};
	let key: keyof KEYS;
	key = "primary";
	key = "secondary";
	// key = "failed"; //error

	/**
	 * typeof + keyof
	 * keyof typeofの組み合わせは、型の安全性を高めるために役立ちます。
	 * また、オブジェクトのプロパティキーの列挙や反復処理など、動的な操作を行う場合にも便利です
	 * 1. typeof でデータ構造を取得
	 * 2. その後 keyof で 1 で取得したオブジェクトのプロパティ名のユニオン型を取得
	 * 下記のkeySportsには, SPORTS オブジェクトの正しいプロパティが代入される。
	 */
	const SPORTS = {
		soccoer: "Soccer",
		baseball: "Baseboll",
	};
	let keySports: keyof typeof SPORTS;
	keySports = "soccoer";
	keySports = "baseball";
	// keySports = "tennis"; //error

	/**
	 * enum
	 * 連番をつけてくれる機能
	 * 列挙型を使うことで以下のメリットが有る
	 * 1.特定の変数がとり得る値を明示的に示すことができる
	 * 2.型チェックを厳密に行うことが可能になる。定義外の値を入れようとするとコンパイルエラーになる
	 * 3.コーディング中に自動補完してくれる
	 */
	enum OS {
		Windows,
		Mac,
		Linux,
	}
	interface PC {
		id: number;
		OSType: OS;
	}
	const PC1: PC = {
		id: 1,
		OSType: OS.Windows,
	};
	const PC2: PC = {
		id: 2,
		OSType: OS.Mac,
	};
	// const PC3: PC = {
	// 	id: 2,
	// 	// OSType: OS.Linu, // error
	// };

	/**
	 * 型の互換性
	 * リテラル型
	 * リテラル型は、その名の通り「値そのものが型になる」という特殊な型。
	 * "test" リテラル型は "test" という値のみを取る。
	 * comp3 が "test" の値を持っているといっても、その型は stringである。
	 * そのため、コメントアウトされた comp4 は型チェックが厳格である場合、エラーを引き起こす可能性がある
	 */
	const comp1 = "test";
	let comp2: string = comp1;
	let comp3: string = "test";
	// let comp4: "test" = comp3; //error
	let comp4: "test" = "test";
	let comp5: "test" = comp4;
	// 関数
	let funcComp1 = (x: number) => {};
	let funcComp2 = (x: string) => {};
	// funcComp1 = funcComp2; // error  どちらも関数のデータ型が異なるのでエラー戸なsる
	// funcComp2 = funcComp1; // error

	/**
	 * Generics ジェネリクス
	 * さまざまな型で動作するように関数やクラスを作成する際に役立つ。
	 * 型が不確定な状況で、型の安全性を保証するために使用される。
	 * ジェネリクスを使うと、関数やクラスが操作する型を決定するのは、関数が呼び出されるか
	 * クラスがインスタンス化されるときとなる。
	 * それにより、再利用性が高まり、型安全性も確保できます。
	 */
	interface GEN<T> {
		item: T;
	}
	const genA: GEN<string> = { item: "string型" };
	const genB: GEN<number> = { item: 1 };
	// const gen2: GEN<string> = { item: 2 }; // error

	// ジェネリクスの初期値を指定
	interface GEN01<T = string> {
		item: T;
	}
	// 初期値がある場合、ジェネリクスを指定しなくてもエラーが出ない。
	const gen01: GEN01 = { item: "string" };

	// extendsで定義された制約条件を満たさないとエラー
	interface GEN02<T extends string | number> {
		item: T;
	}
	const gen02_01: GEN02<string> = { item: "string型" };
	const gen02_02: GEN02<number> = { item: 1 };
	// const gen02_03: GEN02<boolean> = { item: true }; // error

	// 関数に対するジェネリクスの適用の仕方 **(return値に定義したinterfaceで型定義することもできる)**
	function funcGen<T>(props: T): GEN<T> {
		return { item: props };
	}
	const gen03 = funcGen<string>("string");
	const gen04 = funcGen<string | null>("string"); //ユニオンタイプ指定することも可能

	// 関数の場合のジェネリクスのextends **(return値を定義していなくてもエラーは起きない)**
	function funcGen1<T extends string | null>(props: T) {
		return { item: props };
	}

	const gen05 = funcGen1<string>("string");
	const gen06 = funcGen1<null>(null);
	// const gen07 = funcGen1<number>(1); // error

	// この関数は引数として何らかの型 T を受け取り、同じ型 T を返す
	// この関数を呼び出すときには、具体的な型（この例では string）を指定する
	function identity<T>(arg: T): T {
		return arg;
	}
	let output = identity<string>("myString");

	interface Props {
		price: number;
	}
	// 関数の型パラメータTは、Propsインターフェースを拡張した何らかの型であることが期待される
	// この関数はpriceプロパティを持つ任意のオブジェクトを受け取ることができる
	function funcGen2<T extends Props>(props: T) {
		return { value: props.price };
	}
	//
	const gen07 = funcGen2({ price: 10 });
	// const gen07 = funcGen2({ tax: 10 }); // error

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
				<TestComponet text="string" />
			</header>
		</div>
	);
};

export default App;
