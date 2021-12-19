

const Card = (props) => {
    const { name, id, email } = props;
    return(
        <div className='tc bg-light-blue pa3 ma2 br3 w-20 grow dib' >
            <img src={`https://robohash.org/${id}`} alt='robots'/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;