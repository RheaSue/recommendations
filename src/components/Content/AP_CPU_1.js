import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';
import bg_high_cpu from '../../assets/images/issuesImage/bg_high_cpu.png';

function AP_CPU_1() {

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"AP_CPU_1.title_head"} />;
    
    const title_summary = t("title_summary");
    const summary = t("AP_CPU_1.summary", { returnObjects: true });
    
    const title_recommendations = t("title_recommendations");
    const recommendations = t("AP_CPU_1.recommendations", { returnObjects: true });
    
    return (
        <div>
            <div className='component__content-category-container' >

                <div className='component__content-category-title-container'>
                    <div className='category-bar'
                        style={{ backgroundColor: 'var(--theme-state-yellow)' }}></div>
                    <h1>{title_head}</h1>
                </div>
            </div>

            <div className='component__content-container'>
                <h2 className='title_padding-bottom'>{title_summary}</h2>

                <p>{summary.description}</p>

                <img className='issue_image' 
                    src={bg_high_cpu} alt='bg_high_cpu' />

                <h2>{title_recommendations}</h2>

                <table className='AP_BB_DOWN_2__recommendation-table'>
                    <tbody>
                        {recommendations.map(recommendation => (
                            <tr>
                                <td>
                                    <p className='p_badge'>{recommendation.id}</p>
                                </td>

                                <td>
                                    <p><span className='p_recommendation_list_key'>{recommendation.key_text} </span>{recommendation.text}</p>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        
    );
}

export default AP_CPU_1;

/**
 * {
        "id": 86,
        "rank": 1,
        "name": "AP_CPU_1",
        "priority": "HIGH",
        "severity": "WARN",
        "diagnosis": "High CPU load was detected recently in the router.",
        "recommendation": "Reboot the router if unstable.",
        "category": "AP_HEALTH",
        "categoryId": "AP_HEALTH",
        "symptoms": [
            "AP_PRB",
            "WIFI_CANNOT_CONNECT",
            "INRMT_CON"
        ],
        "actions": [
            {
                "action": "REBOOT",
                "scope": "AP"
            }
        ]
    }
 */