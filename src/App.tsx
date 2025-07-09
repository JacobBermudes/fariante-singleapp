import './App.css';
import { useState, useEffect } from 'react';
import MenuSection from './MenuSection';
import Popup from './Popup';
import AboutContent from './AboutContent';
import NewsContent from './NewsContent';
import ContactsContent from './ContactsContent';
import CatalogContent from './CatalogContent';
import ProductCard from './ProductCard';

const SECTIONS = [
  { key: 'about', label: 'О нас' },
  { key: 'catalog', label: 'Каталог' },
  { key: 'news', label: 'Новости' },
  { key: 'contacts', label: 'Контакты' },
  { key: 'blur', label: 'Blur Каталога' },
] as const;

type SectionKey = typeof SECTIONS[number]['key'];

function App() {
  const [clickedSection, setClickedSection] = useState<SectionKey | null>(null);
  const [activeComp, setActiveComp] = useState<number>(0);
  const [isBlurred, setIsBlurred] = useState(false);
  
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
    if (section === 'blur') {
      setIsBlurred((prev) => !prev);
      return;
    }
    if (section === 'catalog') {
      if (clickedSection) setClickedSection(null);
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

  const products = [
    { title: 'Булаковер', description: 'Картинка' },
    { title: 'Аулоковер', description: 'Картинка' },
    { title: 'Далоковер', description: 'Картинка' },
    { title: 'Галоковер', description: 'Картинка' },
    { title: 'Еулоковер', description: 'Картинка' },
    { title: 'Сулаковер', description: 'Картинка' },
    { title: 'Сулакавер', description: 'Картинка' },
    { title: 'Булаковер', description: 'Картинка' },
    { title: 'Аулоковер', description: 'Картинка' },
    { title: 'Далоковер', description: 'Картинка' },
    { title: 'Галоковер', description: 'Картинка' },
    { title: 'Еулоковер', description: 'Картинка' },
    { title: 'Вулаковер', description: 'Картинка' },
    { title: 'Булаковер', description: 'Картинка' },
    { title: 'Аулоковер', description: 'Картинка' },
    { title: 'Далоковер', description: 'Картинка' },
    { title: 'Галоковер', description: 'Картинка' },
    { title: 'Еулоковер', description: 'Картинка' },
  ];

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
              onClick={() => handleSectionClick(key as SectionKey)}
            />
          ))}
        </div>
        {getPopup()}
        <div className="mainInfo">
          <div className="coverage-container">
            <div className="coverage-block">
              <div className="coverage-title">Морские покрытия<br /> </div>
              <img src="BeautyProtection.png" alt="Морские покрытия" />
            </div>
            <div className="coverage-block">
              <img src="logoBig.png" alt="Логотип" />
            </div>
            <div className="coverage-block">
              <div className="coverage-title">Промышленные покрытия</div>
              <img src="fireArm.png" alt="Промышленные покрытия" />
            </div>
          </div>
          <div className='catalogPort' style={isBlurred ? { backdropFilter: 'blur(8px)' } : undefined}>
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
            <div className="product-list">
              {products.map((p, i) => (
                <ProductCard key={i} title={p.title} description={p.description} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
