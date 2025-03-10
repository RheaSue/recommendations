import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_extender_latency from '../../assets/images/issuesImage/bg_extender_latency.png';

function EXT_BB_LAT_1(props) {

  const { networkName = "MyNetwork" } = props;

  const { t } = useTranslation(); // 使用 t 函数获取翻译

  const title_head = <Trans i18nKey={"EXT_BB_LAT_1.title_head"} />;

  const title_summary = t("title_summary");
  const summary = t("EXT_BB_LAT_1.summary", { returnObjects: true });

  const title_recommendations = t("title_recommendations");
  const recommendations = t("EXT_BB_LAT_1.recommendations", { returnObjects: true });

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

        {/* What Happened? 文本 */}
        <h2 className='title_padding-bottom'>{title_summary}</h2>

        {/* 渲染动态文本，并给 networkName 添加样式 */}
        <p>

           {/* What Happened? 的描述文本，带一个参数 networkName */}
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

        {/* Issue Image 图片类型 */}
        <img
          className='issue_image'
          src={bg_extender_latency}
          alt='bg_extender_latency' />

        {/* Recommendations 文本 */}
        <h2>{title_recommendations}</h2>

        {/* Recommendations 列表 */}
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

export default EXT_BB_LAT_1;

/**
 * {
      "id": 209,
      "rank": 1,
      "name": "EXT_BB_LAT_1",
      "priority": "MODERATE",
      "severity": "ACTION",
      "diagnosis": "Backhaul latency has been too high for interactive applications such as VoIP or online gaming.",
      "recommendation": "Check if extender is not too far from the parent. Check if backhaul is 5GHz. Check interference at the extender. Enable backhaul optimization if applicable.",
      "category": "WIFI_EXTENDER_PERFORMANCE",
      "categoryId": "WIFI_EXTENDER_PERFORMANCE",
      "symptoms": [
        "INRMT_CON"
      ],
      "actions": []
    }
 */