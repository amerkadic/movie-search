import React, { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';

import NavBar from "../components/nav-bar.component"
import Card from "../components/card.component"
import { getCollection, deleteItem } from "../redux/collection/collectionAction";
import removeButton from "../assets/close.png";
import { Helmet } from "react-helmet";
import { useAlert } from 'react-alert'
import { Link } from "react-router-dom";

const Collection = () => {
    const collection = useSelector((state) => state.collection.items);
    const alert = useAlert()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCollection());
    }, [dispatch]);

    const handleRemove = (id) => {
        dispatch(deleteItem(id));
        alert.show('Item removed', {
            timeout: 2000,
            type: 'info',
        })
    }

    const Items = (
        collection.length === 0 ? < h1 > You don't have items in collection...</h1> :
            (
                collection.reverse().map(item => (
                    <div key={item._id} className="collection-item">
                        <Link to={item.type === "tvshow" ? ('/api/tvshow/' + item.itemid) : ('/api/movie/' + item.itemid)}>
                            <Card
                                title={item.name}
                                image={item.poster ?
                                    ('https://image.tmdb.org/t/p/w300' + item.poster) :
                                    ('https://image.tmdb.org/t/p/w300/dykOcAqI01Fci5cKQW3bEUrPWwU.jpg')}
                            />
                        </Link>
                        <button className="remove-item" onClick={() => handleRemove(item._id)}><img alt="removeButton" src={removeButton}></img></button>
                    </div>
                ))
            )
    );

    return (
        <div>
            <Helmet>
                <title>My collection</title>
            </Helmet>
            <NavBar />
            <div className="collection-list">
                {Items}
            </div>
        </div >
    )
}

export default Collection;
