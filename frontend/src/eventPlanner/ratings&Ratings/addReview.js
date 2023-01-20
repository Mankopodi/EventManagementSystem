import React, { useRef, useState } from 'react'
import './add.css'

function CRUD() {
    const list = [
       
      
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.price}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, price: price} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, price :value} : li
        ))

        setList(newlist)
    }
    return(
        <tr>

            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputprice} name='review' value={current.review}/></td>
            <td><input type="number" onChange={handInputprice} name='review' value={current.review}/></td>
            
        </tr>
    )
}

function AddList({setList}) {
    const nameRef = useRef()
    const priceRef = useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const newlist = {
            id: 3,
            name,
            price
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
    }
    return(
        <form className='flex flex-col gap-4 addForm outline p-16 bg-white' onSubmit={handleSubmit}>
       
           
            <input type="text" className='p-2 bg-gray-900' name="name" placeholder="Enter Name" ref={nameRef}/>
            <div className="mb-2"> </div>
            <input type="text" className='p-12 bg-gray-900' name="review" placeholder="The review" ref={priceRef}/>
            <div className="mb-2"> </div>
            <input type="number" className='p-2 p-2 bg-gray-900' min={1} max={5} name="" placeholder="Ratings" ref={nameRef}/>
            
            <div className="mb-2"> </div>
            <button type="submit">Add Review</button>
            
           

        </form>
    )
}

export default CRUD;