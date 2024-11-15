import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

function INTF_SET_3(props) {

    const { networkName = "MyNetwork" } = props;

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"INTF_SET_3.title_head"} />;

    const title_summary = t("title_summary");
    const summary = t("INTF_SET_3.summary", { returnObjects: true });

    const title_recommendations = t("title_recommendations");
    const recommendations = t("INTF_SET_3.recommendations", { returnObjects: true });

    return (
        <div>
            <div className='component__content-category-container'>

                <div className='component__content-category-title-container'>
                    <div className='category-bar'
                        style={{ backgroundColor: 'var(--theme-state-yellow)' }}></div>
                    <h1>{title_head}</h1>
                </div>
            </div>

            <div className='component__content-container'>
                <h2 className='title_padding-bottom'>{title_summary}</h2>

                {/* 渲染动态文本，并给 networkName 添加样式 */}
                <p>
                    <Trans
                        i18nKey={summary.description}
                        values={{ networkName }}
                        components={{
                            1: <span style={{ color: 'var(--theme-gray-color)' }} />
                        }} />
                    {/* {summary.split(networkName).map((text, index) => (
                        <>
                            {text}
                            {index < description.split(networkName).length - 1 && (
                                <span style={{ color: 'var(--theme-gray-color)' }}>{networkName}</span>
                            )}
                        </>
                    ))} */}
                </p>

                <img className='issue_image' 
                    src='http://gips1.baidu.com/it/u=3874647369,3220417986&fm=3028&app=3028&f=JPEG&fmt=auto?w=720&h=1280' alt='issue_image' />

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

                <button className='button_action'>Reboot</button>
            </div>
        </div>
    );
}

// const summary1 = {
//     title: 'What Happened?',
//     description: 'The Wi-Fi network named {networkName} has its security settings open or disabled. This means that the network is not protected by a password, making it vulnerable to unauthorized access and potential security threats.',
//     category: 'WIFI_SETTINGS',
// }

// const recommendations1 = [
//     {
//         id: 1,
//         key_text: 'Enable Wi-Fi Security: ',
//         text: 'Access your router\'s settings and enable WPA3 or WPA2 security. This will require users to enter a password to connect to your network.'
//     },
//     {
//         id: 2,
//         key_text: 'Set a Strong Password: ',
//         text: 'Choose a strong, unique password for your Wi-Fi network. Avoid using easily guessable passwords like "password" or "12345678".'
//     },
//     {
//         id: 3,
//         key_text: 'Update Firmware: ',
//         text: 'Ensure your router\'s firmware is up to date to protect against known vulnerabilities.'
//     },
//     {
//         id: 4,
//         key_text: 'Monitor Connected Devices: ',
//         text: 'Regularly check the list of devices connected to your network to ensure there are no unauthorized users.'
//     },
//     {
//         id: 5,
//         key_text: 'Contact Support: ',
//         text: 'If you\'re unsure how to change these settings, refer to your router\'s manual or contact your ISP support team for assistance.'
//     }
// ];

export default INTF_SET_3;

/**
 * {
        "id": 22,
        "rank": 1,
        "name": "INTF_SET_3",
        "priority": "HIGH",
        "severity": "WARN",
        "diagnosis": "Wi-Fi security is open/disabled for this network.",
        "recommendation": "Advise customer to enable WPA2 (AES) security in router and devices.",
        "category": "WIFI_SETTINGS",
        "categoryId": "WIFI_SETTINGS",
        "symptoms": [
            "OTHER"
        ],
        "actions": [
            {
                "action": "CHANGE_CREDENTIALS",
                "scope": "Line"
            }
        ]
    }
 */