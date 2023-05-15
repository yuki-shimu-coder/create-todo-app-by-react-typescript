import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";

function App() {
	// 入力値のstate
	const [todoText, setTodoText] = useState<string>("");

	// 未完了TODOリストのstate
	const [incompleteTodos, setIncompleteTodos] = useState<string[]>([
		"aaaa",
		"iiii",
	]);

	// 完了TODOリストのstate
	const [completeTodos, setCompleteTodos] = useState<string[]>([
		"uuuu",
		"eeee",
	]);

	//入力イベントを定義
	const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => {
		//引数に,HTMLのinput要素の変更イベントに対する型を定義
		setTodoText(e.target.value);
	};

  // 追加ボタンのイベントを定義
  const onClickAdd = () => {
    // 未入力の場合は処理を終了
    if(todoText === "") return;
    // 未完了のTODOリストをコピーして、新しいタスクを追加
    const newTodos = [...incompleteTodos, todoText];
    // 生成した配列を未完了TODOリストとしてセット
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

	return (
		<>
			{/* タスク入力エリア */}
			<div className="input-area">
				<input
					type="text"
					placeholder="TODOを入力"
					value={todoText}
					onChange={onChangeTodoText}
				/>
				<button onClick={onClickAdd}>追加</button>
			</div>
			{/* 未完了エリア */}
			<div className="incomplete-area">
				<p className="title">未完了のTODO</p>
				<ul>
					{incompleteTodos.map((incompleteTodo: string) => {
						return (
							<li key={incompleteTodo}>
								<div className="list-row">
									<span>{incompleteTodo}</span>
									<button>完了</button>
									<button>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			{/* 完了エリア */}
			<div className="complete-area">
				<p className="title">完了のTODO</p>
				<ul>
					{completeTodos.map((completeTodo: string) => {
						return (
							<li key={completeTodo}>
								<div className="list-row">
									<span>{completeTodo}</span>
									<button>完了</button>
									<button>削除</button>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}

export default App;
