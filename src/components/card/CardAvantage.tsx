import './CardAvantage.css'

interface CardAvantageProps {
    image: string;
    title: string;
    content: string;
}

const CardAvantage = ({image, title, content}: CardAvantageProps) => {
    return (
        <div className='CardAvantage'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
};

export default CardAvantage;