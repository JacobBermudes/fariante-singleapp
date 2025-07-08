import React from 'react';

const NewsContent: React.FC = () => (
  <div className="about-popup-content">
    <div className="about-section">
      <h3>Последние новости</h3>
      <div className="news-item">
        <h4>Новая линейка огнезащитных покрытий</h4>
        <p className="news-date">15 декабря 2024</p>
        <p>
          Представляем новую серию огнезащитных покрытий с улучшенными характеристиками 
          и увеличенным временем огнестойкости до 120 минут.
        </p>
      </div>
      <div className="news-item">
        <h4>Расширение ассортимента морских покрытий</h4>
        <p className="news-date">8 декабря 2024</p>
        <p>
          Добавлены новые виды антикоррозийных покрытий для судовых конструкций, 
          включая специальные составы для подводной части корпуса.
        </p>
      </div>
      <div className="news-item">
        <h4>Сертификация по международным стандартам</h4>
        <p className="news-date">1 декабря 2024</p>
        <p>
          Наша продукция получила сертификацию по стандартам ISO 12944 и IMO PSPC, 
          что подтверждает соответствие самым высоким требованиям качества.
        </p>
      </div>
    </div>
    <div className="about-section">
      <h3>Предстоящие события</h3>
      <div className="features">
        <div className="feature">
          <h4>Выставка "Морская индустрия 2025"</h4>
          <p>20-22 января 2025, Санкт-Петербург</p>
        </div>
        <div className="feature">
          <h4>Семинар по защитным покрытиям</h4>
          <p>15 февраля 2025, Москва</p>
        </div>
        <div className="feature">
          <h4>Техническая конференция</h4>
          <p>10 марта 2025, Новороссийск</p>
        </div>
      </div>
    </div>
  </div>
);

export default NewsContent; 