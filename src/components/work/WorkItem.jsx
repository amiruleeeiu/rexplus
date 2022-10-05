import React from 'react';


const WorkItem = ({index,work}) => {
    console.log(work.icon);
    return (
        <div className='work_item'>
            <div className="work_item_icon" style={(index+1)%2===0 ? {right:'6%'} : {left:'6%'}}>
                {work.icon}
            </div>
            <div className='work_item_content'>
                <h5>Step: {index+1}. {work.title}</h5>
                <p>{work.desc}</p>
            </div>
        </div>
    );
};

export default WorkItem;