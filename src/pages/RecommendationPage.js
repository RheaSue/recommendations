import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import '../i18n/i18n';

import Header from "../components/Header/Header";
import AP_BB_DOWN_2 from "../components/Content/AP_BB_DOWN_2";
import AP_BB_LAT_1 from "../components/Content/AP_BB_LAT_1";
import AP_CPU_1 from "../components/Content/AP_CPU_1";
import INTF_SET_3 from "../components/Content/INTF_SET_3";
import INTF_NOI_1 from "../components/Content/INTF_NOI_1";
import AP_MEM_1 from "../components/Content/AP_MEM_1";
import AP_PWR_1 from "../components/Content/AP_PWR_1";

import '../assets/styles/themeStyles.css';
import '../assets/styles/componentStyles.css';
import '../assets/styles/themeStyles.css';
import '../assets/styles/textStyles.css';
import '../assets/styles/global.css';

function RecommendationPage() {

    const { pathParams } = useParams(); // get the path from the URL
    const [querySSIDName, setQuerySSIDName] = useState('\'\''); // get the query ssid name from the URL
    const [queryLanguage, setQueryLanguage] = useState('en'); // get the query language from the URL ('fr' / 'en')
    const [querySeverity, setQuerySeverity] = useState(null); // get the query severity from the URL ('action' / 'warning' / 'info')

    const location = useLocation(); // get the current location

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const ssidNameParam = searchParams.get("ssidName");
        setQuerySSIDName(ssidNameParam);
        const languageParam = searchParams.get("language");
        setQueryLanguage(languageParam);
        const severityParam = searchParams.get("severity");
        setQuerySeverity(severityParam);
    }, [location.search]);

    const [activeComponent, setActiveComponent] = useState(pathParams); // 管理当前组件状态

    // render the component based on the id
    const renderComponent = () => {
        // debugger; // set a breakpoint here to debug the id value
        if (!pathParams) {
            return <div>No component found for {pathParams}</div>;
        }

        switch (pathParams) {
            case "AP_BB_DOWN_2":
                return <AP_BB_DOWN_2 />;
            case "AP_BB_LAT_1":
                return <AP_BB_LAT_1 />;
            case "AP_CPU_1":
                return <AP_CPU_1 />;
            case "INTF_SET_3":
                return <INTF_SET_3 networkName={querySSIDName}/>;
            case "INTF_NOI_1":
                return <INTF_NOI_1 networkName={querySSIDName}/>;
            case "AP_MEM_1":
                return <AP_MEM_1 />;
            case "AP_PWR_1":
                return <AP_PWR_1 />;
            default:
                return <div>No component found for {pathParams}</div>;
        }
    };

    return (
        <div>

            {/* for testing purposes, add a button to switch between components */}
            {/* <div className="tabs">
                <button onClick={() => setActiveComponent("AP_BB_DOWN_2")}>AP_BB_DOWN_2<br/>Broadband Connectivity</button>
                <button onClick={() => setActiveComponent("AP_BB_LAT_1")}>AP_BB_LAT_1<br/>Broadband Latency</button>
                <button onClick={() => setActiveComponent("AP_CPU_1")}>AP_CPU_1<br/>AP Health-high CPU</button>
                <button onClick={() => setActiveComponent("INTF_SET_3")}>INTF_SET_3<br/>Wi-Fi Settings</button>
                <button onClick={() => setActiveComponent("INTF_NOI_1")}>INTF_NOI_1<br/>Wi-Fi Noise Interference</button>
                <button onClick={() => setActiveComponent("AP_MEM_1")}>AP_MEM_1<br/>AP Health-low-memory</button>
                <button onClick={() => setActiveComponent("AP_PWR_1")}>AP_PWR_1<br/>AP Health-Reboots</button>
            </div> */}

            <Header language={queryLanguage} />
            {renderComponent()}
        </div>
    );
};

export default RecommendationPage;
