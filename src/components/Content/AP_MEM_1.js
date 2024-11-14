import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

function AP_MEM_1() {
    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"AP_MEM_1.title_head"} />;

    const title_summary = t("title_summary");
    const summary = t("AP_MEM_1.summary", { returnObjects: true });

    const title_recommendations = t("title_recommendations");
    const recommendations = t("AP_MEM_1.recommendations", { returnObjects: true });

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
                    src='https://gips3.baidu.com/it/u=3948031753,760649905&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f800_600' alt='issue_image' />

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
    )
}

// const summary1 = {
//     title: 'What Happened?',
//     description: 'Your router has detected low-memory issues recently. This can lead to slow performance, frequent reboots, and connectivity problems.',
//     category: 'AP_HEALTH',
// }

// const recommendations1 = [
//     {
//         id: 1,
//         key_text: 'Restart Your Router: ',
//         text: 'Unplug your router, wait for 30 seconds, and plug it back in. This can free up memory and improve performance.'
//     },
//     {
//         id: 2,
//         key_text: 'Update Firmware: ',
//         text: 'Ensure your router\'s firmware is up to date. Firmware updates can optimize memory usage and fix bugs.'
//     },
//     {
//         id: 3,
//         key_text: 'Limit Connected Devices: ',
//         text: 'Reduce the number of devices connected to your router to free up memory.'
//     },
//     {
//         id: 4,
//         key_text: 'Close Unnecessary Applications: ',
//         text: 'Shut down any applications or services that might be using a lot of bandwidth and memory.'
//     },
//     {
//         id: 5,
//         key_text: 'Factory Reset: ',
//         text: 'If the problem persists, consider performing a factory reset on your router. Note that this will erase all settings, so you will need to reconfigure your network.'
//     },
//     {
//         id: 6,
//         key_text: 'Upgrade Hardware: ',
//         text: 'If your router is old or frequently runs into memory issues, consider upgrading to a newer model with more memory.'
//     },
//     {
//         id: 7,
//         key_text: 'Contact Support: ',
//         text: 'If the issue continues, contact your Internet Service Provider or the router manufacturer for further assistance.'
//     }
// ];

export default AP_MEM_1;

/**
 * {
        "id": 85,
        "rank": 1,
        "name": "AP_MEM_1",
        "priority": "HIGH",
        "severity": "WARN",
        "diagnosis": "Low-memory issues were detected recently in the router.",
        "recommendation": "Reboot the router if unstable, or upgrade the router.",
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