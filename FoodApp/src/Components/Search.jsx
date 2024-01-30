import { useEffect, useState } from "react"
import Styles from './search.module.css';

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "a9b49a9919d44d7293131247624e95f1"
export default function Search({foodData, setFootData}) {
    const [query, setQuery] = useState("paneer")

    useEffect(() => {
        async function fetchFood() {
            await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            .then(res=>res.json())
            .then(resp => setFootData(resp.results))
            .catch(err => console.log(err))
        }
        fetchFood()
    }, [query])
    
    return (
    <div className={Styles.searchContainer}>
      <input className={Styles.input} type="text"  value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}
