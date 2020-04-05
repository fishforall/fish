import React from 'react';
import { Container, Img, Title } from "../stylecomponents/fishitem"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons'

function FishItem(props) {
    console.log(props.props.pageURL);
    return (
        <>
            <Container>
                <Img src={props.props.previewURL} alt=""></Img>
                <Title>{props.props.user}</Title>
                <Title><FontAwesomeIcon icon={faThumbsUp} color={"blue"} /> {props.props.likes}</Title>

            </Container>
        </>
    )
}

export default FishItem;