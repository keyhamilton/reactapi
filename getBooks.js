import { collection, getDoc, getDocs } from 'firebase/firestore/lite';

function booksWithId(snapshot){
  const bookList = [];
  snapshot.map(doc => {
    const newBook = {
      id: doc.id,
      titulo: doc.data().titulo,
      autor: doc.data().autor,
      paginas: doc.data().paginas,
      data: doc.data().data
    };
    bookList.push(newBook);
  })
  return bookList;
}

export default async function getBooks(db) {
    const booksCol = collection(db, 'books');
    const bookSnapshot = await getDocs(booksCol);
    
    const bookList = booksWithId(bookSnapshot.docs);
    return bookList.sort((a,b)=>b.data.seconds-a.data.seconds);
  }