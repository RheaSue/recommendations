import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

const optimizationAction = () => {
  console.log('Optimization enable');
  const message = { type: 'INTF_NOI_1', action: 'optimization_enable' };
  // window.ReactNativeWebView.postMessage(JSON.stringify(message));
  try { // iOS 适用
    window.webkit.messageHandlers.actionOptimizationEnable.postMessage(message);
    return;
  } catch (e) {
    console.log("iOS Is Null")
  }
  
  try { // android 适用
    window.androidFunction.actionOptimizationEnable(message);
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

function INTF_NOI_1(props) {

  const { networkName = "MyNetwork" } = props;

  const { t } = useTranslation(); // 使用 t 函数获取翻译

  const title_head = <Trans i18nKey={"INTF_NOI_1.title_head"} />;
  const button_OptimizationEnable = t("button_OptimizationEnable");

  const title_summary = t("title_summary");
  const summary = t("INTF_NOI_1.summary", { returnObjects: true });

  const title_recommendations = t("title_recommendations");
  const recommendations = t("INTF_NOI_1.recommendations", { returnObjects: true });

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
          {/* {description.split(networkName).map((text, index) => (
            <>
              {text}
              {index < description.split(networkName).length - 1 && (
                <span style={{ color: 'var(--theme-gray-color)' }}>{networkName}</span>
              )}
            </>
          ))} */}
        </p>

        <img
          className='issue_image'
          src='http://gips2.baidu.com/it/u=3150002139,2124277596&fm=3028&app=3028&f=JPEG&fmt=auto?w=2048&h=2048'
          alt='issue_image' />

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

        <button className='button_action' onClick={optimizationAction}>{button_OptimizationEnable}</button>

      </div>

    </div>
  );
}

// const summary1 = {
//   title: 'What Happened?',
//   description: 'Your Wi-Fi network named {networkName} has detected severe interference. This can cause slow speeds, dropped connections, and poor performance.',
//   category: 'WIFI_NOISE_INTERFERENCE',
// }

// const recommendations1 = [
//   {
//     id: 1,
//     key_text: 'Change Wi-Fi Channel: ',
//     text: 'Access your router\'s settings and change the Wi-Fi channel to one with less interference. Channels 1, 6, and 11 are often recommended for 2.4 GHz networks, while 5 GHz networks have more channels to choose from.'
//   },
//   {
//     id: 2,
//     key_text: 'Move Router: ',
//     text: 'Place your router in a central location, away from walls, metal objects, and other electronic devices that can cause interference.'
//   },
//   {
//     id: 3,
//     key_text: 'Reduce Interference Sources: ',
//     text: 'Keep devices like microwaves, cordless phones, and baby monitors away from your router as they can cause interference.'
//   },
//   {
//     id: 4,
//     key_text: 'Update Firmware: ',
//     text: 'Ensure your router\'s firmware is up to date to improve performance and reduce interference.'
//   },
//   {
//     id: 5,
//     key_text: 'Use Wired Connections: ',
//     text: 'For critical applications, consider using a wired Ethernet connection instead of Wi-Fi.'
//   },
//   {
//     id: 6,
//     key_text: 'Contact Support: ',
//     text: 'If the problem persists, contact your Internet Service Provider or the router manufacturer for further assistance.'
//   }
// ];

export default INTF_NOI_1;

/**
 * {
        "id": 31,
        "rank": 1,
        "name": "INTF_NOI_1",
        "priority": "HIGH",
        "severity": "WARN",
        "diagnosis": "Wi-Fi network is affected by noise.",
        "recommendation": "To fix noise problems: 1) (Optimization allowed) Enable channel optimization, 2) (Optimization not allowed or it is already enabled) Manually change Wi-Fi channel.",
        "category": "WIFI_NOISE_INTERFERENCE",
        "categoryId": "WIFI_NOISE_INTERFERENCE",
        "symptoms": [
          "SLOW_SPEED",
          "SLOW_SPEED_WIFI",
          "INRMT_CON",
          "CANNOT_BRWS"
        ],
        "actions": [
          {
            "action": "OPTIMIZATION_ENABLE",
            "scope": "Line"
          }
        ]
      }
 */