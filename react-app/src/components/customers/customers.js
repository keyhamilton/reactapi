import {useEffect, useState} from 'react'
import './customers.css';

function Customers() {
  const [customers, setCustomers]=useState([])
  const getCustomers = async () => {
    await fetch("/api/customers")
                          .then(res => res.json())
                          .then(data => setCustomers(data))
                          .catch(err => console.log(err))
  
  };
  useEffect(()=>{
    
    getCustomers()
  }, [])
  
  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(customer=>(
          <li key={customer.id}>{customer.nome} {customer.sobrenome}</li>
        ))}
      </ul>
    </div>
  );
}

export default Customers;
