import {useEffect, useState} from 'react'

function Books() {
  const [books, setBooks]=useState([])
  const getBooks = async () => {
    await fetch("/books")
                          .then(res => res.json())
                          .then(data => setBooks(data))
                          .catch(err => console.log(err))
  
  };
  useEffect(()=>{
    
    getBooks()
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book=>(
          <>
          <li key={book.id}>
            
              Titulo: {book.titulo}<br/>Autor: {book.autor}<br/> Páginas: {book.paginas}
          
          </li>
          <hr/>
          </>
        ))}
      </ul>
    </div>
  );

}

export default Books;