import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
    const { id } = useParams(); // get the id from the URL

    const [activeComponent, setActiveComponent] = useState(id); // 管理当前组件状态

    // render the component based on the id
    const renderComponent = () => {

        console.log("id", id);

        // debugger; // set a breakpoint here to debug the id value
        if (!id) {
            return <div>No component found for {id}</div>;
        }

        switch (activeComponent) {
            case "AP_BB_DOWN_2":
                return <AP_BB_DOWN_2 />;
            case "AP_BB_LAT_1":
                return <AP_BB_LAT_1 />;
            case "AP_CPU_1":
                return <AP_CPU_1 />;
            case "INTF_SET_3":
                return <INTF_SET_3 networkName="testNetworkName"/>;
            case "INTF_NOI_1":
                return <INTF_NOI_1 networkName="testNetworkName2"/>;
            case "AP_MEM_1":
                return <AP_MEM_1 />;
            case "AP_PWR_1":
                return <AP_PWR_1 />;
            default:
                return <div>No component found for {activeComponent}</div>;
        }
    };

    return (
        <div>

            {/* for testing purposes, add a button to switch between components */}
            <div className="tabs">
                <button onClick={() => setActiveComponent("AP_BB_DOWN_2")}>AP_BB_DOWN_2<br/>Broadband Connectivity</button>
                <button onClick={() => setActiveComponent("AP_BB_LAT_1")}>AP_BB_LAT_1<br/>Broadband Latency</button>
                <button onClick={() => setActiveComponent("AP_CPU_1")}>AP_CPU_1<br/>AP Health-high CPU</button>
                <button onClick={() => setActiveComponent("INTF_SET_3")}>INTF_SET_3<br/>Wi-Fi Settings</button>
                <button onClick={() => setActiveComponent("INTF_NOI_1")}>INTF_NOI_1<br/>Wi-Fi Noise Interference</button>
                <button onClick={() => setActiveComponent("AP_MEM_1")}>AP_MEM_1<br/>AP Health-low-memory</button>
                <button onClick={() => setActiveComponent("AP_PWR_1")}>AP_PWR_1<br/>AP Health-Reboots</button>
            </div>

            <Header />
            {renderComponent()}
        </div>
    );
};

export default RecommendationPage;
