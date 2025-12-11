import './App.css'
import { TodoLisItems } from './Todolistitem'

export const App = () => {
  return (
    <div className="app">
      <TodoLisItems title="What to learn" number='+' />
      <TodoLisItems tite="Songs" />
      <TodoLisItems title="Books" />
    </div>
  )
}

