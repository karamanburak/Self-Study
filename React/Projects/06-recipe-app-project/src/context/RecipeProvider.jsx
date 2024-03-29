import axios from 'axios'
import React, { createContext, useState } from 'react'

//!context alani create edildi \\
export const RecipeContext = createContext()

const APP_KEY = "ad3262b3de24c620c50d76dc1545a670"
const APP_ID = "e5dc6ef1"


const RecipeProvider = ({children}) => {
    //! Login ve privaterouter sayfalari icin \\
    const [name,setName] = useState(localStorage.getItem("username") || "")
    const [password,setPassword] = useState(localStorage.getItem("password") || "")

    //! Home, header ve recipeCard sayfalari icin \\ 
    const [recipes,setRecipes] = useState ([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [query,setQuery]  = useState("")
    const [mealType, setMealType] = useState("Breakfast")

    const BASE_URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`

    const getData = async () => {
      setLoading(true)
      try {
           const {data} = await axios.get(BASE_URL)
    //  console.log(data.hits);
     setRecipes(data.hits)
      } catch (error) {
        setError(true)
      }finally {
        setLoading(false)
      }
  
    }

  if (error) {
    return <p>Something went wrong...</p>
  }
  if(loading){
    return <p>Loading...</p>
  }


  return (
    <RecipeContext.Provider value={{
        name,
        setName,
        password,
        setPassword,
        setQuery,
        setMealType,
        recipes,
        getData
        }}>
    {children}
    </RecipeContext.Provider>
  )
}

export default RecipeProvider