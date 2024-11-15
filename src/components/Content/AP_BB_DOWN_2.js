import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

function AP_BB_DOWN_2() {

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"AP_BB_DOWN_2.title_head"} />;
    const button_reboot = t("button_reboot");

    const title_summary = t("title_summary");
    const summary = t("AP_BB_DOWN_2.summary", { returnObjects: true });
    
    const title_recommendations = t("title_recommendations");
    const recommendations = t("AP_BB_DOWN_2.recommendations", { returnObjects: true });

    return (
        <div>
            <div className='component__content-category-container' >

                <div className='component__content-category-title-container'>
                    <div className='category-bar'
                        style={{ backgroundColor: 'var(--theme-state-red)' }}></div>
                    <h1>{title_head}</h1>
                </div>
            </div>

            <div className='component__content-container'>
                <h2 className='title_padding-bottom'>{title_summary}</h2>

                <p>{summary.description}</p>

                <img className='issue_image' 
                    src='http://gips2.baidu.com/it/u=195724436,3554684702&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960' alt='issue_image' />

                <h2>{title_recommendations}</h2>

                <table className='AP_BB_DOWN_2__recommendation-table'>
                    <tbody>
                        {recommendations.map(recommendation => (
                            <tr>
                                <td>
                                    <p className='p_badge'>{recommendation.id}</p>
                                </td>

                                <td>
                                    <p>
                                        <span className='p_recommendation_list_key'>{recommendation.key_text}</span>

                                        <Trans
                                            i18nKey={recommendation.text}
                                            components={{
                                                1: <span style={{ fontStyle: 'italic', color: 'black' }} />
                                            }}
                                        />
                                    </p>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>

                <button className='button_action' onClick={ () => {
                    alert('Rebooting your device...');
                }}>{button_reboot}</button>
            </div>
        </div>
        
    );
}

export default AP_BB_DOWN_2;

/**
 * {
        "id": 13,
        "rank": 1,
        "name": "AP_BB_DOWN_2",
        "priority": "HIGH",
        "severity": "ACTION",
        "diagnosis": "DNS resolution errors were detected.",
        "recommendation": "Troubleshoot DNS resolution issue.",
        "category": "BROADBAND_CONNECTIVITY",
        "categoryId": "BROADBAND_CONNECTIVITY",
        "symptoms": [
            "NO_SERVICE",
            "INRMT_CON",
            "CANNOT_BRWS"
        ],
        "actions": [
            {
                "action": "REBOOT",
                "scope": "AP"
            },
            {
                "action": "REBOOT",
                "scope": "Line"
            }
        ]
    }
 */