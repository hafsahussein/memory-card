const Header = ({score, highestScore}) => {
    return ( 
        <div className="header">
            <h2>Momery Game</h2>
            <div className="score">
                <p>Score:{score}</p>
                <p>Highest score:{highestScore}</p>
            </div>
        </div>
     );
}
 
export default Header;