import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

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
                    src='http://gips2.baidu.com/it/u=828570294,3060139577&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024' alt='issue_image' />

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

// eslint-disable-next-line no-unused-vars
const summary1 = {
    title: 'What Happened?',
    description: 'Your broadband connection has been experiencing high latency, which can negatively impact interactive applications such as VoIP (Voice over Internet Protocol) and online gaming. High latency means there is a delay in data transmission, causing lag and poor performance.',
    category: 'BROADBAND_LATENCY',
}

// eslint-disable-next-line no-unused-vars
const recommendations1 = [
    {
        id: 1,
        key_text: 'Check Your Connection: ',
        text: 'Ensure all cables are securely connected and there are no visible damages.'
    },
    {
        id: 2,
        key_text: 'Restart Your Router: ',
        text: 'Sometimes, a simple reboot can resolve latency issues. Unplug your router, wait for 30 seconds, and plug it back in.'
    },
    {
        id: 3,
        key_text: 'Close Unnecessary Applications: ',
        text: 'Shut down any applications or devices that might be using a lot of bandwidth.'
    },
    {
        id: 4,
        key_text: 'Update Firmware: ',
        text: 'Make sure your router\'s firmware is up to date.'
    },
    {
        id: 5,
        key_text: 'Optimize Router Placement: ',
        text: 'Place your router in a central location, away from walls and other obstructions.'
    },
    {
        id: 6,
        key_text: 'Use Wired Connections: ',
        text: 'For critical applications like gaming or VoIP, use a wired Ethernet connection instead of Wi-Fi.'
    },
    {
        id: 7,
        key_text: 'Contact Your ISP: ',
        text: 'If the problem persists, contact your Internet Service Provider to check for any issues on their end or to upgrade your plan.'
    }
];

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