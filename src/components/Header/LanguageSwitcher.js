import React, { useState, useRef, useEffect } from'react';
import EnglishIcon from '../../assets/images/English.png'
import FrenchIcon from '../../assets/images/French.png'
import '../../assets/styles/componentStyles.css';
import '../../assets/styles/components/LanguageSwitcher.css';

function LanguageSwitcher({ onLanguageChange }) {
    const [isPopoverVisible, setPopoverVisible] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(EnglishIcon);
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // 新增状态来存储选中的语言
    const popoverRef = useRef(null); // popover 容器的引用

    // 点击其他区域时关闭popover
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setPopoverVisible(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    // 切换语言
    const switchLanguage = (language, icon) => {
        setSelectedLanguage(language); // 更新选中的语言
        setSelectedIcon(icon); // 更新语言图标
        setPopoverVisible(false); // 选择语言后隐藏 Popover
        onLanguageChange(language); // 调用父组件的语言切换函数
    };

    const handlePopoverToggle = (event) => {
        // 阻止点击事件冒泡，避免触发document的点击事件
        event.stopPropagation();
        setPopoverVisible(!isPopoverVisible); // 切换Popover的显示状态
    };

    return (
        <div className="language-switcher">
            {/* 切换语言的按钮 */}
            <button
                className='language-button'
                style={{ backgroundImage: `url(${selectedIcon})` }}
                onClick={handlePopoverToggle}>
            </button>

            {/* 浮现的语言选项 Popover */}
            {isPopoverVisible && (
                <div className="popover" ref={popoverRef}>
                    <div className={`popover-option ${selectedLanguage === 'en' ? 'selected' : ''}`} 
                    onClick={() => switchLanguage('en', EnglishIcon)}>
                        <img src={EnglishIcon} alt="English" className="icon" />
                        <span>English</span>
                    </div>
                    <div className={`popover-option ${selectedLanguage === 'fr' ? 'selected' : ''}`} 
                    onClick={() => switchLanguage('fr', FrenchIcon)}>
                        <img src={FrenchIcon} alt="French" className="icon" />
                        <span>French</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LanguageSwitcher;
