import axios from 'axios'
import { useQuery } from 'react-query'
const CatFact = () => {
    const {data : fact, isError , error, refetch} = useQuery(["cat"], ()=> {
        axios.get("https://meowfacts.herokuapp.com")
        .then((res)=> {
            document.querySelector("h1").textContent = res.data.data[0]
        })
    })

    if (isError) return console.log(error.message)
  return (
    <div>
        <h1>{fact}</h1>
        <button onClick={refetch}>next Joke</button>
    </div>
  )
}

export default CatFact