import arrow from '@/app/content/Arrow 2.png'

interface IProps {
    ref: string,
    title: string,
    cost: string
}

const Card: React.FC<IProps> = ({ref, title, cost}) => {
  return (
      <div className='card'>
        <img src={ref} alt="" className="card-img" />
        <div className='card-content'>
            <div className='card-text'>
                <p className="card-title">{title}</p>
                <p className="card-descr">{cost}</p>
            </div>
            <button className="card-button"><img src={arrow.src} alt="" /></button>
        </div>
      </div>
  );
}

export default Card;
