import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import '../i18n/i18n';

import Header from "../components/Header/Header";
import AP_BB_DOWN_2 from "../components/Content/AP_BB_DOWN_2";
import AP_BB_LAT_1 from "../components/Content/AP_BB_LAT_1";
import AP_CPU_1 from "../components/Content/AP_CPU_1";
import AP_MEM_1 from "../components/Content/AP_MEM_1";
import AP_PWR_1 from "../components/Content/AP_PWR_1";
import EXT_BB_DOWN_1 from "../components/Content/EXT_BB_DOWN_1";
import EXT_BB_LAT_1 from "../components/Content/EXT_BB_LAT_1";
import INTF_SET_3 from "../components/Content/INTF_SET_3";
import INTF_NOI_1 from "../components/Content/INTF_NOI_1";

import '../assets/styles/themeStyles.css';
import '../assets/styles/componentStyles.css';
import '../assets/styles/themeStyles.css';
import '../assets/styles/textStyles.css';
import '../assets/styles/global.css';

function RecommendationPage() {

    const { pathParams } = useParams(); // get the path from the URL
    const [queryNetworkName, setQueryNetworkName] = useState('\'\''); // get the query network name from the URL
    const [queryLanguage, setQueryLanguage] = useState('en'); // get the query language from the URL ('fr' / 'en')
    const [querySeverity, setQuerySeverity] = useState(null); // get the query severity from the URL ('action' / 'warning' / 'info')

    const location = useLocation(); // get the current location

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const networkNameParam = searchParams.get("network");
        setQueryNetworkName(networkNameParam);
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
            case "AP_CPU_2":
                return <AP_CPU_1 />; // AP_CPU_2 same as AP_CPU_1
            case "EXT_BB_DOWN_1":
                return <EXT_BB_DOWN_1 networkName={queryNetworkName}/>;
            case "EXT_BB_DOWN_4":
                return <EXT_BB_DOWN_1 networkName={queryNetworkName}/>; // EXT_BB_DOWN_4 same as EXT_BB_DOWN_1
            case "EXT_BB_LAT_1":
                return <EXT_BB_LAT_1 networkName={queryNetworkName}/>;
            case "INTF_SET_3":
                return <INTF_SET_3 networkName={queryNetworkName}/>;
            case "INTF_NOI_1":
                return <INTF_NOI_1 networkName={queryNetworkName}/>;
            case "INTF_INT_1":
                return <INTF_NOI_1 networkName={queryNetworkName}/>; // INTF_INT_1 same as INTF_NOI_1
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
                <button onClick={() => setActiveComponent("AP_CPU_2")}>AP_CPU_2<br/>AP Health-high CPU</button>
                <button onClick={() => setActiveComponent("AP_MEM_1")}>AP_MEM_1<br/>AP Health-low-memory</button>
                <button onClick={() => setActiveComponent("AP_PWR_1")}>AP_PWR_1<br/>AP Health-Reboots</button>
                <button onClick={() => setActiveComponent("EXT_BB_DOWN_1")}>EXT_BB_DOWN_1<br/>Extender Disconnection</button>
                <button onClick={() => setActiveComponent("EXT_BB_DOWN_4")}>EXT_BB_DOWN_4<br/>Extender Disconnection</button>
                <button onClick={() => setActiveComponent("EXT_BB_LAT_1")}>EXT_BB_LAT_1<br/>Extender Latency</button>
                <button onClick={() => setActiveComponent("INTF_SET_3")}>INTF_SET_3<br/>Wi-Fi Settings</button>
                <button onClick={() => setActiveComponent("INTF_NOI_1")}>INTF_NOI_1<br/>Wi-Fi Noise Interference</button>
                <button onClick={() => setActiveComponent("INTF_INT_1")}>INTF_INT_1<br/>Wi-Fi Noise Interference</button>
            </div> */}

            <Header language={queryLanguage} />
            {renderComponent()}
        </div>
    );
};

export default RecommendationPage;
