import Card from "../Card";

const Cardlist = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={i} name={user.name} id={user.id} email={user.email}/>
    })
    return(
        <div>
            {cardComponent}
        </div>
    );
    
}

export default Cardlist;