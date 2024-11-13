import content from '@/app/content/Воспроизведение.png'
export default function FirstBlock() {
  return (
    <div className='first-block container'>
        <div className="main-content">
          <p className="first-title">Лучшая одежда во Владивостоке</p>
          <p className="first-descr">Помогаем создать стиль и образ для любого мероприятия</p>
          <button className='first-button'>Подобрать одежду</button>
        </div>
        <img src={content.src} alt="" />
    </div>
  );
}
