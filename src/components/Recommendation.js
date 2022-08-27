import '../styles/Recommendation.css'

function Recommendation(){
    const currentMonth = new Date().getMonth;
    const isSpring = currentMonth >= 2 && currentMonth <= 5;
    if(isSpring){
        return <p>C'est le printemps. Rempotez 🌱</p>
    }
    return <p className="isSpring-txt">Ce n'est pas le moment de rempoter.</p>
}

export default Recommendation;