import { gql, useQuery } from '@apollo/client'
import { Header } from "./components/Header"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string,
  title: string
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY)
  console.log(data)

  return (
    <div>
      <Header></Header>

      <ul>
        {data?.lessons.map(lesson => {
          return <li>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
