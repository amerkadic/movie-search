import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import { getCollection, deleteItem } from "../redux/collection/collectionAction";
import removeButton from "../assets/close.png";


const Collection = () => {
    const collection = useSelector((state) => state.collection.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCollection());
    }, [dispatch]);

    const handleRemove = (id) => {
        dispatch(deleteItem(id));
    }

    return (
        <div>
            <NavBar />
            <div className="collection-list">
                {collection.map(item => (
                    <div key={item._id} className="collection-item">
                        <Card
                            title={item.name}
                            image={item.poster ?
                                ('https://image.tmdb.org/t/p/w300' + item.poster) :
                                ('https://image.tmdb.org/t/p/w300/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg')}
                        />
                        <button className="remove-item" onClick={() => handleRemove(item._id)}><img alt="removeButton" src={removeButton}></img></button>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Collection;
