import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_extender_disconnection from '../../assets/images/issuesImage/bg_extender_disconnection.png';

function EXT_BB_DOWN_1(props) {

  const { networkName = "MyNetwork" } = props;

  const { t } = useTranslation(); // 使用 t 函数获取翻译

  const title_head = <Trans i18nKey={"EXT_BB_DOWN_1.title_head"} />;

  const title_summary = t("title_summary");
  const summary = t("EXT_BB_DOWN_1.summary", { returnObjects: true });

  const title_recommendations = t("title_recommendations");
  const recommendations = t("EXT_BB_DOWN_1.recommendations", { returnObjects: true });

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
          src={bg_extender_disconnection}
          alt='bg_extender_disconnection' />

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

export default EXT_BB_DOWN_1;

/**
 * {
      "id": 210,
      "rank": 1,
      "name": "EXT_BB_DOWN_1",
      "priority": "HIGH",
      "severity": "ACTION",
      "diagnosis": "Internet disconnections were detected at the extender.",
      "recommendation": "Check broadband connectivity at the gateway. If no broadband issues detected, check if extender is not too far from the parent.",
      "category": "WIFI_EXTENDER_PERFORMANCE",
      "categoryId": "WIFI_EXTENDER_PERFORMANCE",
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