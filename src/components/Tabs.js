import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';

const Tabs = (props) => {

    const {tabList, currentTab, setCurrentTab} = props;

    const styled = (indexFromBelow) => {
        if(currentTab === indexFromBelow) {
            return "activeTabStyle"
        }
        else{
            return "inactiveTabStyle"
        }
    }

    return(
        <div className="tabs">
            {
                tabList.map((tab, index)=> {
                    return(
                        <button className={styled(index)} onClick={()=>{setCurrentTab(index)}}>{tab.label}</button>
                    )
                })
            }
        </div>
    )

}

export default Tabs;