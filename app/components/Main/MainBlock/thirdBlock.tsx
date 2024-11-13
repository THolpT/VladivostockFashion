
export default function ThirdBlock() {
    return (
      <div className="third-block container">
          <div className="third-title-block">
            <p className="third-title">Закажите свою одежду</p>
            <p className="third-descr">Выберите одежду, введите свои контактные данные и наш менеджер подберёт вам гардероб</p>
          </div>
          <div className="input-block">
            <form action="">
            <select name="select" id="1" required>
              <option value="default">Выбрать одежду</option>
              <option value="1">Футболка синяя</option>
              <option value="2">Футболка Красная</option>
              <option value="3">Футболка синяя</option>
            </select>
            <input type="text" placeholder="Выше имя" required/>
            <input type="text" placeholder="Ваш телефон" required/>
            <button className="input-btn">Выбрать одежду</button>
            </form>
          </div>
      </div>
    );
  }
  