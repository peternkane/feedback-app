import {FaTimes } from 'react-icons/fa'
import {FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from "prop-types"
import FeedbackContext from "../context/FeedbackContext"
import {useContext} from 'react'

function FeedbackItem({item}) {   
    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <div className="text-display">{item.text}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close" >
                <FaTimes color='red' />
            </button>
            <button onClick={ () => editFeedback(item)} className="edit"><FaEdit color='purple' /></button>
           
        </Card>
    )
}

Card.defaultProps = {
    reverse : false,
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,


}

export default FeedbackItem