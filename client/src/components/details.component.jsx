import React from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert'
import { useHistory } from "react-router-dom";

import { addItem } from "../redux/collection/collectionAction";

const Details = ({ name, type, trailer, detail }) => {
    const auth = useSelector((state) => state.auth);
    const alert = useAlert();
    let history = useHistory();
    const dispatch = useDispatch();

    const handleCollection = () => {
        dispatch(addItem(name, detail.poster_path, type, detail.id));
        alert.show('Item added in collection', {
            timeout: 2000,
            type: 'success',
        })
    }

    const handleBack = () => {
        history.goBack();
    }

    return (
        <div className="details">
            <button onClick={handleBack}>&larr; Back</button>
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
                {auth.isAuthenticated ? <button className="add-collection-button" onClick={handleCollection}>Add in collection</button>
                    : (<div>
                        <button className="add-collection-disabled" disabled>Add in collection</button>
                        <h5 className="text-disabled">You have to be logged in to add in collection</h5>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Details;
