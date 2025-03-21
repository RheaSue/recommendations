import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/Content_Style.css';
import bg_reboot_multiple from '../../assets/images/issuesImage/bg_reboot_multiple.png';

function AP_PWR_1() {

    const { t } = useTranslation(); // 使用 t 函数获取翻译

  const title_head = <Trans i18nKey={"AP_PWR_1.title_head"} />;

  const title_summary = t("title_summary");
  const summary = t("AP_PWR_1.summary", { returnObjects: true });
  const recommendations_description = t("AP_PWR_1.recommendations_description");

  const title_recommendations = t("title_recommendations");
  const recommendations = t("AP_PWR_1.recommendations", { returnObjects: true });

  const conclusion = t("AP_PWR_1.conclusion");

  return (
    <div>
      <div className='component__content-category-container' >

        <div className='component__content-category-title-container'>
          <div className='category-bar'
            style={{ backgroundColor: 'var(--theme-state-blue)' }}></div>
          <h1>{title_head}</h1>
        </div>
      </div>

      <div className='component__content-container'>
        <h2 className='title_padding-bottom'>{title_summary}</h2>

        <p>{summary.description}</p>

        <img
          className='issue_image'
          src={bg_reboot_multiple} alt='bg_reboot_multiple' />

        <h2>{title_recommendations}</h2>

        <p className='
        component__content-p-padding-bottom'>{recommendations_description}</p>

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

        <p>{conclusion}</p>

      </div>

    </div>
  );
}

export default AP_PWR_1;

/**
 * {
        "id": 1,
        "rank": 0,
        "name": "AP_PWR_1",
        "priority": "HIGH",
        "severity": "INFO",
        "diagnosis": "Reboots were detected.",
        "recommendation": "Check if the customer has manually rebooted the box multiple times or there has been multiple power outages or electrical circuit breaker disconnections. If not, the router power supply may be broken or old.",
        "category": "AP_HEALTH",
        "categoryId": "AP_HEALTH",
        "symptoms": [
          "AP_PRB",
          "OTHER",
          "NO_SERVICE"
        ],
        "actions": []
      }
 */