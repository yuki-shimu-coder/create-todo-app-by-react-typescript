import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";

function App() {
	// 未完了TODOリストのstate
	const [incompleteTodos, setIncompleteTodos] = useState<string[]>([
		"aaaa",
		"iiii",
	]);

	// 完了TODOリストのstate
  const [completeTodos, setCompleteTodos] = useState<string[]>(["uuuu","eeee"]);
	return (
		<>
			{/* タスク入力エリア */}
			<div className="input-area">
				<input type="text" placeholder="TODOを入力" />
				<button>追加</button>
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
