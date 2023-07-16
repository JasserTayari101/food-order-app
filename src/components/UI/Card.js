import './Card.css';

export default function Card(props) {
    const clsName=`card ${props.className}`;
    return(
        <div className={clsName}>
            {props.children}
        </div>
    )
}