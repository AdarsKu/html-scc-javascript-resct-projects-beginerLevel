
export default function ListTodoComponent() {
  const date = new Date();
  const tdate = Date(date.getFullYear() + 2, date.getMonth(), date.getDate());
  const listTodo = [{
    id: 1,
    dicsription: "I want to learn java",
    done: false,
    targetDate: tdate
  },
  {
    id: 2,
    dicsription: "I want to learn AWS",
    done: false,
    targetDate: tdate
  },
  {
    id: 3,
    dicsription: "I want to learn Bootstrap",
    done: false,
    targetDate: tdate
  }]
  return (<>
    <div className="container">
      <h1>Show all the todo Item here</h1>
      <table className='table'>
        <thead>
          <tr className='heading'>
            <th >ID</th>
            <th >Descriptiion</th>
            <th >is Done?</th>
            <th >Target Date</th>
          </tr>

        </thead>

        <tbody>

          {listTodo.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.dicsription}</td>
              <td>{todo.done.toString()}</td>
              <td>{todo.targetDate}</td>
            </tr>
          ))}

        </tbody>
      </table>

    </div>
  </>)
}
