import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "05938819ed994224a90b5c8c63caa446"
export default function Search() {
    const [query, setQuery] = useState("paneer")

    useEffect(() => {
        async function fetchFood() {
            await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            .then(res=>res.json())
            .then(resp => console.log(resp.results))
            .catch(err => console.log(err))
        }
        fetchFood()
    }, [query])
    
    return (
    <div>
      <input type="text"  value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}
