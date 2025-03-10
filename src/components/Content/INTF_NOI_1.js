import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_wifi_interference from '../../assets/images/issuesImage/bg_wifi_interference.png';

const optimizationAction = () => {
  console.log('Optimization enable');
  const message = { type: 'INTF_NOI_1', action: 'optimization_enable' };

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
          src={bg_wifi_interference}
          alt='bg_wifi_interference' />

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

        {/* <button className='button_action' onClick={optimizationAction}>{button_OptimizationEnable}</button> */}

      </div>

    </div>
  );
}

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