const Card = ({data, handleClick}) => {
    const {imgSource, title, color} = data;
  
    return ( 
        <div className="card" style = {{backgroundColor:color}}
        onClick = {handleClick.bind(this, title)}>
            <div className="img">
                <img src={imgSource} alt={title}/>
            </div>
            <div className="caption">
                <p>{title}</p>
            </div>
        </div>
     );
}
 
export default Card;