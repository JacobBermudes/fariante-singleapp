import './App.css';
import { useState, useEffect } from 'react';
import MenuSection from './MenuSection';
import Popup from './Popup';
import AboutContent from './AboutContent';
import NewsContent from './NewsContent';
import ContactsContent from './ContactsContent';
import CatalogContent from './CatalogContent';

const SECTIONS = [
  { key: 'about', label: 'О нас' },
  { key: 'catalog', label: 'Каталог' },
  { key: 'news', label: 'Новости' },
  { key: 'contacts', label: 'Контакты' },
] as const;

type SectionKey = typeof SECTIONS[number]['key'];

function App() {
  const [clickedSection, setClickedSection] = useState<SectionKey | null>(null);
  const [activeComp, setActiveComp] = useState<number>(0);
  
  // Обработчик клавиши Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setClickedSection(null);
      }
    };

    if (clickedSection) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [clickedSection]);

  const handleSectionClick = (section: SectionKey) => {
    if (section === 'catalog') {
      if (clickedSection) setClickedSection(null);
      // window.open('/catalog', '_blank'); // Если нужно открывать в новой вкладке, раскомментируйте
    } else {
      setClickedSection(clickedSection === section ? null : section);
    }
  };

  const getPopup = () => {
    switch (clickedSection) {
      case 'about':
        return <Popup title="О нас" onClose={() => setClickedSection(null)}><AboutContent /></Popup>;
      case 'news':
        return <Popup title="Новости" onClose={() => setClickedSection(null)}><NewsContent /></Popup>;
      case 'contacts':
        return <Popup title="Контакты" onClose={() => setClickedSection(null)}><ContactsContent /></Popup>;
      case 'catalog':
        return <Popup title="Каталог" onClose={() => setClickedSection(null)}><CatalogContent /></Popup>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg" />
      <div className="mainView">
        <div className="overlay-block">
          {SECTIONS.map(({ key, label }) => (
            <MenuSection
              key={key}
              label={label}
              isActive={
                key === 'catalog'
                  ? !clickedSection || clickedSection === 'catalog'
                  : clickedSection === key
              }
              onClick={() => handleSectionClick(key)}
            />
          ))}
        </div>
        {getPopup()}
        <div className="mainInfo">
          <div className="mainViewTitle">
            <img src="logoBig.png" />
            Комплексные решения для защиты поверхностей судов и промышленных объектов
          </div>
          <div className='catalogPort'>
            <div className="CompOptions">
              <div
                className={`compSection${activeComp === 0 ? ' active' : ''}`}
                onClick={() => setActiveComp(0)}
              >
                Однокомпонентные составы
              </div>
              <div
                className={`compSection${activeComp === 1 ? ' active' : ''}`}
                onClick={() => setActiveComp(1)}
              >
                Двухкомпонентные составы
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
