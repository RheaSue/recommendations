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

                                        {/* {recommendation.text.split(/(ipconfig \/flushdns|sudo killall -HUP mDNSResponder)/g).map((part, index) => (
                                            part.match(/ipconfig \/flushdns|sudo killall -HUP mDNSResponder/) ? (
                                                <span key={index} style={{ fontStyle: 'italic', color: 'black' }}>{part}</span>
                                            ) : (
                                                part
                                            )
                                        ))} */}
                                    </p>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>

                <button className='button_reboot' onClick={ () => {
                    alert('Rebooting your device...');
                }}>{button_reboot}</button>
            </div>
        </div>
        
    );
}

// const summary1 = {
//     title: 'What Happened?',
//     description: 'Your network has detected DNS (Domain Name System) resolution errors. This means that your device is having trouble translating domain names (like www.example.com) into IP addresses, which can prevent you from accessing websites and online services.',
//     category: 'BROADBAND_CONNECTIVITY',
// }

// const recommendations1 = [
//     {
//         id: 1,
//         key_text: 'Restart Your Router: ',
//         text: 'Unplug your router, wait for 30 seconds, and plug it back in. This can often resolve DNS issues.'
//     },
//     {
//         id: 2,
//         key_text: 'Check DNS Settings: ',
//         text: 'Ensure your device is set to use a reliable DNS server. You can use public DNS servers like Google DNS (8.8.8.8, 8.8.4.4) or Cloudflare DNS (1.1.1.1).'
//     },
//     {
//         id: 3,
//         key_text: 'Clear DNS Cache: ',
//         text: 'On your computer, you can clear the DNS cache to remove outdated or corrupted entries. For Windows, open Command Prompt and type ipconfig /flushdns. For macOS, open Terminal and type sudo killall -HUP mDNSResponder.'
//     },
//     {
//         id: 4,
//         key_text: 'Update Firmware: ',
//         text: 'Make sure your router\'s firmware is up to date.'
//     },
//     {
//         id: 5,
//         key_text: 'Check Network Configuration: ',
//         text: 'Ensure there are no conflicting IP addresses or network settings.'
//     },
//     {
//         id: 6,
//         key_text: 'Contact Your ISP: ',
//         text: 'If the problem persists, contact your Internet Service Provider to check for any issues on their end.'
//     }
// ];

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