import React from 'react';

const ContactsContent: React.FC = () => (
  <div className="about-popup-content">
    <div className="about-section">
      <h3>Свяжитесь с нами</h3>
      <div className="contact-info">
        <div className="contact-item">
          <h4>📞 Телефон</h4>
          <p>+7 (495) 123-45-67</p>
          <p>+7 (495) 123-45-68</p>
        </div>
        <div className="contact-item">
          <h4>📧 Email</h4>
          <p>info@fariante.ru</p>
          <p>sales@fariante.ru</p>
        </div>
        <div className="contact-item">
          <h4>📍 Адрес</h4>
          <p>г. Москва, ул. Примерная, д. 123</p>
          <p>Бизнес-центр "Морской"</p>
        </div>
        <div className="contact-item">
          <h4>🕒 Режим работы</h4>
          <p>Пн-Пт: 9:00 - 18:00</p>
          <p>Сб: 10:00 - 15:00</p>
        </div>
      </div>
    </div>
    <div className="about-section">
      <h3>Региональные представительства</h3>
      <div className="features">
        <div className="feature">
          <h4>Санкт-Петербург</h4>
          <p>+7 (812) 234-56-78</p>
          <p>spb@fariante.ru</p>
        </div>
        <div className="feature">
          <h4>Новороссийск</h4>
          <p>+7 (8617) 345-67-89</p>
          <p>novorossiysk@fariante.ru</p>
        </div>
        <div className="feature">
          <h4>Владивосток</h4>
          <p>+7 (423) 456-78-90</p>
          <p>vladivostok@fariante.ru</p>
        </div>
      </div>
    </div>
    <div className="about-section">
      <h3>Техническая поддержка</h3>
      <p>
        Наши специалисты готовы помочь с выбором продукции, 
        техническими консультациями и решением любых вопросов 
        по защитным покрытиям.
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <h4>🔧 Техподдержка</h4>
          <p>+7 (495) 123-45-69</p>
          <p>support@fariante.ru</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactsContent; 