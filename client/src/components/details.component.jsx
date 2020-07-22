import React from "react"
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from "../redux/collection/collectionAction";

const Details = ({ name, trailer, detail }) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleCollection = () => {
        dispatch(addItem(detail.name, detail.poster_path));
    }

    return (
        <div className="details">
            <div className="details-preview">
                {trailer}
            </div>
            <div className="details-name">
                {name}
            </div>
            <h3>Overview: </h3>
            <div className="details-overview">
                {detail.overview}
            </div>
            <div>
                {auth.isAuthenticated ? <button className="collection" onClick={handleCollection}>Add in collection</button>
                    : <button disabled>Add in collection</button>}
            </div>
        </div>
    )
}

export default Details;
