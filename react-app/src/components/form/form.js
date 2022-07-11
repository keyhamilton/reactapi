import { useState } from "react";

function Add(){
    const [titulo, setTitle] = useState('')
    const [autor, setAutor] = useState('')
    const [paginas, setPaginas] = useState(0)
    const addBook = (e) => {
        // e.preventDefault();
        const book = {titulo, autor, paginas}
        fetch('/books', {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(book)
        })
        .then(()=>{
            console.log('postagem feita')
        })
        .catch(err => console.log(err))
        alert('New book added')
    }
    return (
        <div>
            <h1>Cadastrar Livros</h1>
            <form>
                <div>
                    <div>
                        <label>
                            Título:
                        </label>
                    </div>
                    <input 
                    type='text' 
                    required
                    value={titulo}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                    <div>
                        <label>
                            Autor:
                        </label>
                    </div>
                    <input 
                    type='text' 
                    required
                    value={autor}
                    onChange={(e)=>setAutor(e.target.value)}
                    />
                    <div>
                        <label>
                            Páginas:
                        </label>
                    </div>
                    <input 
                    type='text' 
                    required
                    value={paginas}
                    onChange={(e)=>setPaginas(e.target.value)}
                    />
                    <div>
                        <button onClick={addBook}>Cadastrar</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
}

export default Add;