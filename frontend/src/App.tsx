import React, { useState } from "react";
import "./App.css";
import "./styles.css";
import { InputTextArea } from "./components/InputTextArea";
import { InCompleteArea } from "./components/InCompleteArea";
import { CompleteArea } from "./components/CompleteArea";

function App() {
	// 入力値のstate string型
	const [todoText, setTodoText] = useState<string>("");

	// 未完了TODOリストのstate string型の配列
	const [incompleteTodos, setIncompleteTodos] = useState<string[]>([
		"aaaa",
		"iiii",
	]);

	// 完了TODOリストのstate string型の配列
	const [completeTodos, setCompleteTodos] = useState<string[]>([
		"uuuu",
		"eeee",
	]);

	//入力イベントを定義 引数に,HTMLのinput要素の変更イベントに対する型を定義
	const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodoText(e.target.value);
	};

	// 追加ボタンのイベントを定義
	const onClickAdd = () => {
		// 未入力の場合は処理を終了
		if (todoText === "") return;
		// 未完了のTODOリストをコピーして、新しいタスクを追加
		const newTodos = [...incompleteTodos, todoText];
		// 生成した配列を未完了TODOリストとしてセット
		setIncompleteTodos(newTodos);
		setTodoText("");
	};

	//削除ボタンのイベントを定義 引数に、number型を定義
	const onClickDelete = (index: number) => {
		// 未完了のTODOリストをコピー
		const newTodos = [...incompleteTodos];
		// コピーした配列から、該当するindexの要素を削除する
		newTodos.splice(index, 1);
		// 削除後の配列を未完了TODOリストとしてセット
		setIncompleteTodos(newTodos);
	};

	// 完了ボタンのイベントを定義 引数に、number型を定義
	const onClickComplete = (index: number) => {
		// 未完了のTODOリストをコピー
		const newIncompleteTodosTodos = [...incompleteTodos];
		// コピーした配列から、該当するindexの要素を削除する
		newIncompleteTodosTodos.splice(index, 1);

		// 完了のTODOリストをコピーして、完了したタスクを追加
		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

		// 削除後の配列を未完了TODOリストとしてセット
		setIncompleteTodos(newIncompleteTodosTodos);
		// タスクが追加された配列をセット
		setCompleteTodos(newCompleteTodos);
	};

	// 戻すボタンのイベントを定義 引数に、number型を定義
	const onClickBack = (index: number) => {
		// 完了のTODOリストをコピー
		const newCompleteTodos = [...completeTodos];
		// コピーした配列から、該当するindexの要素を削除する
		newCompleteTodos.splice(index, 1);

		// 未完了のTODOリストをコピーして、戻すタスクを追加
		const newIncompleteTodosTodos = [...incompleteTodos, completeTodos[index]];

		// 完了タスクの反映
		setCompleteTodos(newCompleteTodos);
		// 未完了タスクの反映
		setIncompleteTodos(newIncompleteTodosTodos);
	};

	return (
		<>
			{/* タスク入力エリア */}
			<InputTextArea
				todoText={todoText}
				onChange={onChangeTodoText}
				onClick={onClickAdd}
			/>

			{/* 未完了エリア */}
			<InCompleteArea
				incompleteTodos={incompleteTodos}
				onClickComplete={onClickComplete}
				onClickDelete={onClickDelete}
			/>

			{/* 完了エリア */}
			<CompleteArea completeTodos={completeTodos} onClickBack={onClickBack} />
		</>
	);
}

export default App;
