import logo from './logo.svg'
import './bootstrap.min.css'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="header d-flex">
        <div className="top-panel d-flex">
          <div className="logo"></div>
          <h5>Score: <span className="score">0</span></h5>
        </div>
        <ul className="pagination">
          <li className="page-item active">
            <a className="page-link" href="/#">Разминка</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Воробьиные</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Лесные птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Певчие птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Хищные птицы</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="/#">Морские птицы</a>
          </li>
        </ul>
      </div>
      <div className="jumbotron game-over">
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">Вы прошли викторину и набрали 0 из 30 возможных баллов</p>
        <hr className="my-4" />
          <button className="btn btn-next btn-game-over">Попробовать еще раз!</button>
      </div>
      <div className="random-bird jumbotron rounded">
        <img className="bird-image" src="media/bird.jpg" alt="bird" />
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>******</h3>
              </li>
              <li className="list-group-item">
                <div className="audio-player">
                  <audio
                    src="https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"
                    hidden=""></audio>
                  <div className="controls">
                    <div className="playback-button">
                      <svg viewBox="-200 0 1200 1000">
                        <path fill="#00bc8c"
                              d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path>
                      </svg>
                    </div>
                    <div className="timebar" style={{position: "relative"}}>
                      <div className="timebar-bar"
                           style={{background: "linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);"}}></div>
                      <div className="timebar-circle" style={{left: "0%"}}></div>
                      <div className="timebar-time-info">
                        <div>00:00</div>
                        <div>00:32</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
      <div className="row mb2">
        <div className="col-md-6">
          <ul className="item-list list-group">
            <li className="list-group-item">
              <span className="li-btn"></span>Ворон
            </li>
            <li className="list-group-item">
              <span className="li-btn"></span>Журавль
            </li>
            <li className="list-group-item">
              <span className="li-btn"></span>Ласточка
            </li>
            <li className="list-group-item">
              <span className="li-btn"></span>Козодой
            </li>
            <li className="list-group-item">
              <span className="li-btn"></span>Кукушка
            </li>
            <li className="list-group-item">
              <span className="li-btn"></span>Синица
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="bird-details card">
            <p className="instruction" style={{display: "block"}}>
              <span>Послушайте плеер.</span>
              <span>Выберите птицу из списка</span>
            </p>
            <div className="card-body" style={{display: 'none'}}>
              <img className="bird-image" src="https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg"
                   alt="Ворон" />
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <h4>Ворон</h4>
                  </li>
                  <li className="list-group-item">
                    <span>Corvus corax</span>
                  </li>
                  <li className="list-group-item">
                    <div className="audio-player">
                      <audio
                        src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
                        hidden=""></audio>
                      <div className="controls">
                        <div className="playback-button">
                          <svg viewBox="-200 0 1200 1000">
                            <path fill="#00bc8c"
                                  d="M96.51 11.97c-31.23 8.05-53.26 32.76-63.42 71.27-3.45 12.84-3.64 29.7-3.64 416.71s.19 403.87 3.64 416.71c16.09 60.74 61.69 86.03 120.9 67.25 9-2.87 53.65-25.1 116.49-58.24 56.14-29.51 221.29-116.3 367.28-192.93 145.99-76.64 271.29-143.31 278.38-148.1 39.28-25.68 59.59-63.04 53.26-97.52-4.79-26.63-24.33-53.07-52.88-71.65C892 399.37 172.58 22.32 154.95 16.38c-18.97-6.33-43.3-8.24-58.44-4.41z"></path>
                          </svg>
                        </div>
                        <div className="timebar " style={{position: "relative"}}>
                          <div className="timebar-bar"
                               style={{background: "linear-gradient(to right, rgb(0, 188, 140) 0%, rgb(61, 133, 140) 0%, rgb(115, 115, 115) 0%, rgb(115, 115, 115) 100%);"}}></div>
                          <div className="timebar-circle" style={{left: "0%"}}></div>
                          <div className="timebar-time-info">
                            <div>00:00</div>
                            <div>00:12</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
            <span className="bird-description" style={{display: "none"}}>Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.</span>
          </div>
        </div>
        <button className="btn">Next Level</button>
      </div>
    </div>
  );
}

export default App;
