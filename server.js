import {initializeApp} from 'firebase/app'
import { getFirestore, addDoc, collection, serverTimestamp } from 'firebase/firestore/lite';
import firebaseConfig from '../api/myapp/firebaseConfig.js'
import getBooks from './getBooks.js';
import express from 'express';


const config = firebaseConfig()

const firestoreApp = initializeApp(config);

const db = getFirestore(firestoreApp)
const app = express();

app.get('/books', async (req, res) => {
    const books = await getBooks(db)
    res.status(200).json(books);
    res.end()
  })
  
  app.use('/books', express.json())
  
  app.post('/books', async (req, res)=>{
    const booksRef = collection(db, 'books')
    await addDoc(booksRef, {
      autor: req.body.autor,
      titulo: req.body.titulo,
      paginas: req.body.paginas,
      data: serverTimestamp()
    })
    res.status(201).json(req.body)
  })

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, nome: 'Raimundo', sobrenome: 'Nonato'},
        {id: 2, nome: 'José', sobrenome: 'Maria'},
        {id: 3, nome: 'Maria', sobrenome: 'José'}
    ];
    res.status(200).json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server running at port ${port}`));