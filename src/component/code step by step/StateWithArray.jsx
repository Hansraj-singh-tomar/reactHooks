import React,{useState} from 'react'

const StateWithArray = () => {
    const [items,setItems] = useState([]);
    console.log(items);
    function addItem(){
        setItems([...items,{
            id: items.length,
            value: Math.random()
        }])
    }
  return (
    <div>
        <ol>
            {items.map((item) => <li key={item.id}>{item.value}</li>)}
        </ol>
        <button onClick={addItem}>Add Item</button>
    </div>
  )
}

export default StateWithArray;
