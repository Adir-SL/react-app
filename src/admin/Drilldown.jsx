import { useContext } from 'react';
import React from 'react';
import { createRoot } from "react-dom/client";
import "./Drilldown.css";
import Table from "./components/Table";
import Breadcrumbs from './components/Breadcrumbs';
import Tabs from "./components/Tabs";

const Drilldown = () => {
    return (
        <div className='comp-drilldown'>
            <div className="content">
                {/* <Breadcrumbs /> */}
                <Tabs label={["First tab", "Second one", "Center one", "Forth forth", "Last tab"]} selected="0" />
                <Table data={[
                    { name: "David", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
                    { name: "Michael", created: "2 January 2018", updated: "2 January 2018", tags: "Complaint", resolved: true },
                    { name: "Kate", created: "28 February 2020", updated: "28 February 2020", tags: "Support", resolved: false },
                    { name: "Barry", created: "14 May 2020", updated: "14 May 2020", tags: "Support", resolved: false },
                    { name: "Daniel", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: false },
                    { name: "Michal", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
                    { name: "Karen", created: "2 January 2018", updated: "2 January 2018", tags: "Support", resolved: false },
                    { name: "Adi", created: "28 February 2020", updated: "28 February 2020", tags: "Complaint", resolved: true },
                    { name: "Natalie", created: "14 May 2020", updated: "14 May 2020", tags: "Complaint", resolved: false },
                    { name: "Neta", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: false },
                    { name: "Ophir", created: "6 October 2016", updated: "6 October 2016", tags: "Complaint", resolved: true },
                    { name: "Simon", created: "2 January 2018", updated: "2 January 2018", tags: "Support", resolved: false },
                    { name: "Lily", created: "28 February 2020", updated: "28 February 2020", tags: "Complaint", resolved: true },
                    { name: "John", created: "14 May 2020", updated: "14 May 2020", tags: "Support", resolved: false },
                    { name: "Eric", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: true },
                    { name: "Igor", created: "6 October 2016", updated: "6 October 2016", tags: "Support", resolved: true },
                    { name: "Jack", created: "2 January 2018", updated: "2 January 2018", tags: "Complaint", resolved: false },
                    { name: "Danny", created: "28 February 2020", updated: "28 February 2020", tags: "Support", resolved: false },
                    { name: "Ken", created: "14 May 2020", updated: "14 May 2020", tags: "Complaint", resolved: false },
                    { name: "Rafi", created: "19 June 2023", updated: "19 June 2023", tags: "Support", resolved: true },
                ]} />
            </div>
        </div>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Drilldown />);