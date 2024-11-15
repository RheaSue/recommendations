import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

function AP_CPU_1() {

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"AP_CPU_1.title_head"} />;
    
    const title_summary = t("title_summary");
    const summary = t("AP_CPU_1.summary", { returnObjects: true });
    
    const title_recommendations = t("title_recommendations");
    const recommendations = t("AP_CPU_1.recommendations", { returnObjects: true });

    const conclusion = t("AP_CPU_1.conclusion");

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
                    src='http://gips3.baidu.com/it/u=3660856539,3077947179&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960' alt='issue_image' />

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

                <p>{conclusion}</p>
            </div>
        </div>
        
    );
}

// eslint-disable-next-line no-unused-vars
const summary1 = {
    title: 'What Happened?',
    description: 'Your router has detected high CPU load recently. This can lead to slow performance, connectivity issues, and potential overheating.',
    category: 'AP_HEALTH',
}

// eslint-disable-next-line no-unused-vars
const recommendations1 = [
    {
        id: 1,
        key_text: 'Restart Your Router: ',
        text: 'Unplug your router, wait for 30 seconds, and plug it back in. This can help reset the CPU usage.'
    },
    {
        id: 2,
        key_text: 'Update Firmware: ',
        text: 'Ensure your router\'s firmware is up to date. Firmware updates can optimize CPU usage and fix bugs.'
    },
    {
        id: 3,
        key_text: 'Limit Connected Devices: ',
        text: 'Reduce the number of devices connected to your router to lower the CPU load.'
    },
    {
        id: 4,
        key_text: 'Close Unnecessary Applications: ',
        text: 'Shut down any applications or services that might be using a lot of bandwidth and CPU resources.'
    },
    {
        id: 5,
        key_text: 'Check for Malware: ',
        text: 'Ensure your network is secure and free from malware that could be causing high CPU usage.'
    },
    {
        id: 6,
        key_text: 'Factory Reset: ',
        text: 'If the problem persists, consider performing a factory reset on your router. Note that this will erase all settings, so you will need to reconfigure your network.'
    },
    {
        id: 7,
        key_text: 'Upgrade Hardware: ',
        text: 'If your router is old or frequently runs into high CPU load issues, consider upgrading to a newer model with a more powerful CPU.'
    },
    {
        id: 8,
        key_text: 'Contact Support: ',
        text: 'If the issue continues, contact your Internet Service Provider or the router manufacturer for further assistance.'
    }
];


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