import { FC, memo, VFC } from 'react';
import useToDoList from './ToDoList.hook';

interface Props {
  text: string;
}

// render whenever the state is changed
// const MemoComponent: VFC<Props> = ({ text }: Props) =>{
//   return(
//     <div className='text-text'>{text}</div>
//   )
// }

// render whenever the text is changed, but not state
const MemoComponent: VFC<Props> = memo(function MemoComponent({ text }: Props) {
  return <div className="text-text">{text}</div>;
});

const ToDoList: FC = () => {
  const { store, handleSubmit, handleChange, values, handleBlur, touched, errors, deleteTodo } =
    useToDoList();

  const todosMap = store.todos.map((todo, index) => {
    return (
      <div
        className="text-text bg-background mt-4 text-xl p-2 w-11/12 xl:w-1/2"
        key={Math.random()}
      >
        <button id='deleteToDo' onClick={() => deleteTodo(todo)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 -mb-1 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
        <span className="ml-4">
          {index + 1}. {todo}
        </span>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-text text-5xl text-center font-semibold">To do list with useReducer</h1>
      <MemoComponent text="I am component involving React.memo()" />
      <form
        onSubmit={handleSubmit}
        className=" text-text flex flex-col justify-center items-center h-full w-full"
      >
        <div className="flex flex-col items-center w-full">
          <label htmlFor="todo" className="w-11/12 xl:w-1/2 mb-1 text-2xl font-semibold">
            Todo
          </label>
          <input
            className="bg-background shadow w-11/12 xl:w-1/2 h-12 p-2 text-2xl outline-blue-400"
            type="text"
            id="todo"
            name="todo"
            placeholder="I will go..."
            maxLength={500}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.todo}
          />
          {touched.todo ? <div className="w-11/12 xl:w-1/2 text-red-500">{errors.todo}</div> : null}
          <div></div>
        </div>

        <input
          id='createToDo'
          type="submit"
          value="Create to do"
          className="bg-background shadow-xl font-semibold w-11/12 xl:w-1/2 h-12 p-2 text-2xl mt-6 cursor-pointer hover:opacity-80 duration-150 outline-blue-400"
        />

        {todosMap}
      </form>
    </>
  );
};

export default ToDoList;
