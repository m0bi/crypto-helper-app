import React from "react";
import TableLive from "../Tables/TableLive";

const TablesContainer = (props) => (
    <div>
        {Object.entries(props.live).map((pair, i)=>(
            <TableLive
                id={pair[0]}
                rows={pair[1].sort(function(a,b){
                    if(a[4] > b[4]){
                        return 1
                    } else 
                    {
                        return -1
                    }
                
                })}
            />
        ))}
    </div>
);


export { TablesContainer };