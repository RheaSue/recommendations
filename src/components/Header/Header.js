import { useState, useEffect } from'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import logo_hitron from '../../assets/images/logo_hitron.png';

function Header() {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // 默认语言为 'en'
    const { i18n } = useTranslation(); // 使用 t 函数获取翻译, 获取 i18n 实例

    const changeLanguage = (lang) => {
        setSelectedLanguage(lang);
        i18n.changeLanguage(lang); // 切换语言
    };

    useEffect(() => {
        i18n.changeLanguage(selectedLanguage); // 切换语言
    }, [selectedLanguage, i18n]);

    return (
        <header>
            <div className='component__header'>
                <img src={logo_hitron} alt="logo" />
                <LanguageSwitcher onLanguageChange={changeLanguage} />
            </div>
        </header>
    );
}

export default Header;