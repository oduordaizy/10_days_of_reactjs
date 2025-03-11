import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

// interface quoteProps {
//   quote: string,
//   author: string;
// }

const Quote:React.FC= () => {
  const [quote, setQuote] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [error, setError] = useState<string>('')

  const fetchQuote = async ()=>{
    try{
    const url = 'https://api.api-ninjas.com/v1/quotes';

    const response = await fetch(url,{
      method: "GET",
      headers:{
        'X-Api-Key': import.meta.env.VITE_QUOTE_API
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    } 
    const result = await response.json()
    if (result.length > 0){
      setQuote(result[0].quote)
      setAuthor(result[0].author)
    }
  } catch (err){
      console.error("Error fetching quote:", err);
      setError("Failed to load quote");

  }
  }

  useEffect(()=>{
    fetchQuote();

    const interval = setInterval(()=>{
      fetchQuote()
    }, 24*60*60*1000)

    return () => clearInterval(interval)
    
  }, [])

  

  return (
    <div>
      <Navbar/>
      <h1>Daily Motivational Quote</h1>
      {error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ):(
        <>
          <h2>{quote}</h2>
          <p>- {author}</p>
        </>
        
      )}
      
    </div>
  )
}

export default Quote