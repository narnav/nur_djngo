import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProds, getDataAsync, delDataAsync, addDataAsync, updDataAsync } from './prodSlice';
import { selectlogged } from './loginSlice'
export function Prod() {
    const prods = useSelector(selectProds);
    const logged = useSelector(selectlogged);
    const dispatch = useDispatch();
    const [refresh, setrefresh] = useState(false)
    const [title, settitle] = useState("")
    const [price, setPrice] = useState(0)
    useEffect(() => {
        dispatch(getDataAsync())
    }, [refresh])

    const handleDel = (id) => {
        console.log(id);
        dispatch(delDataAsync(id))
        setrefresh(!refresh)
    }
    const handleAdd = (newData) => {
        console.log(newData);
        dispatch(addDataAsync(newData))
        setrefresh(!refresh)
    }
    const handleUpd = (id) => {
        // console.log(id);
        dispatch(updDataAsync({ title, price, id }))
        setrefresh(!refresh)
    }
    return (
        <div>
            {logged &&
                <div>
                    {prods.length}
                    {prods.map(prod => <div>
                        <button onClick={() => handleDel(prod.id)}> {prod.id}</button>
                        <button onClick={() => handleUpd(prod.id)}>Update</button>
                        {prod.title}
                    </div>)}


                    title:<input onChange={(e) => settitle(e.target.value)} />
                    price:<input onChange={(e) => setPrice(e.target.value)} />
                    <button onClick={() => handleAdd({ title, price })}>Add a product</button>
                </div>}
        </div>
    );
}
