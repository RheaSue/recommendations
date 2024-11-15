import { useTranslation, Trans } from 'react-i18next';
import '../../assets/styles/components/AP_BB_DOWN_2_Style.css';

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
            style={{ backgroundColor: 'var(--theme-state-red)' }}></div>
          <h1>{title_head}</h1>
        </div>
      </div>

      <div className='component__content-container'>
        <h2 className='title_padding-bottom'>{title_summary}</h2>

        <p>{summary.description}</p>

        <img
          className='issue_image'
          src='https://gips1.baidu.com/it/u=942200867,4215273736&fm=3028&app=3028&f=JPEG&fmt=auto&q=100&size=f576_1024'
          alt='issue_image' />

        <h2>{title_recommendations}</h2>

        <p className='
        component__content-p-padding-bottom'>{recommendations_description}</p>

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
  description: 'Your router has rebooted multiple times recently.',
  category: 'AP_HEALTH',
}

// eslint-disable-next-line no-unused-vars
const recommendations1 = [
  {
    id: 1,
    key_text: 'Check Power Supply: ',
    text: 'Ensure your router is connected to a stable power source. Avoid using power strips or extension cords if possible.'
  },
  {
    id: 2,
    key_text: 'Update Firmware: ',
    text: 'Check if there are any pending firmware updates for your router and install them.'
  },
  {
    id: 3,
    key_text: 'Improve Ventilation: ',
    text: 'Make sure your router is placed in a well-ventilated area to prevent overheating.'
  },
  {
    id: 4,
    key_text: 'Inspect Hardware: ',
    text: 'Look for any visible damage or loose connections. If the router is old, consider replacing it.'
  }
];

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