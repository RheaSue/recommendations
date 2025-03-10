import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_broadband_latency from '../../assets/images/issuesImage/bg_broadband_latency.png';

function AP_BB_LAT_1() {

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"AP_BB_LAT_1.title_head"} />;

    const title_summary = t("title_summary");
    const summary = t("AP_BB_LAT_1.summary", { returnObjects: true });
    
    const title_recommendations = t("title_recommendations");
    const recommendations = t("AP_BB_LAT_1.recommendations", { returnObjects: true });

    return (
        <div>
            <div className='component__content-category-container'>

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
                    src={bg_broadband_latency} alt='bg_broadband_latency' />

                <h2>{title_recommendations}</h2>

                <table className='content__recommendation-table'>
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

export default AP_BB_LAT_1;

/*
{
    "id": 5,
    "rank": 1,
    "name": "AP_BB_LAT_1",
    "priority": "MODERATE",
    "severity": "ACTION",
    "diagnosis": "Broadband latency has been too high for interactive applications such as VoIP or online gaming.",
    "recommendation": "Check for possible backhaul network congestion issues.",
    "category": "BROADBAND_LATENCY",
    "categoryId": "BROADBAND_LATENCY",
    "symptoms": [
        "INRMT_CON"
    ],
    "actions": []
}
*/