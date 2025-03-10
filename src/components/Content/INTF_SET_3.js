import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_no_password from '../../assets/images/issuesImage/bg_no_password.png';

const changeCredentialsAction = () => {

    const message = { type: 'INTF_SET_3', action: 'change_credentials' };

    try { // iOS 适用
        window.webkit.messageHandlers.actionChangeCredentials.postMessage(message);
        return;
    } catch (e) {
        console.log("iOS Is Null")
    }
    
    try { // android 适用
        window.androidFunction.actionChangeCredentials(message);
        return;
    } catch (e) {
        console.log("android Is Null")
    }

    try {
        window.opener.postMessage(message);
        return;
    } catch (e) {
        console.log("window Is Null")
    }
}

function INTF_SET_3(props) {

    const { networkName = "MyNetwork" } = props;

    const { t } = useTranslation(); // 使用 t 函数获取翻译

    const title_head = <Trans i18nKey={"INTF_SET_3.title_head"} />;
    const button_changeCredentials = t("button_changeCredentials");

    const title_summary = t("title_summary");
    const summary = t("INTF_SET_3.summary", { returnObjects: true });

    const title_recommendations = t("title_recommendations");
    const recommendations = t("INTF_SET_3.recommendations", { returnObjects: true });
    const recommendations_description = t("INTF_SET_3.recommendations_description");

    const conclusion = t("INTF_SET_3.conclusion");

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
                    src={bg_no_password} alt='bg_no_password' />

                <h2>{title_recommendations}</h2>

                <p className='component__content-p-padding-bottom'>{recommendations_description}</p>

                <table className='content__recommendation-table'>
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
                                            1: <span style={{ color: 'var(--theme-minor-color)' }} />
                                        }}
                                    />
                                    </p>
                                </td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>

                <p>{conclusion}</p>

                {/* <button className='button_action' onClick={changeCredentialsAction}>{button_changeCredentials}</button> */}
            </div>
        </div>
    );
}

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