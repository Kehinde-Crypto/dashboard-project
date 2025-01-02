import React from 'react';
import {SparklineComponent,Inject,SparklineTooltip} from '@syncfusion/ej2-react-chats';



const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
<SparklineComponent
id={id}
height ={height}
width={width}
fill={color}
lineWidth={1}
valueType="Numeric"
border={{color:currentColor,width:2}}
dataSource={data}
xName="x"
yName="y"
type={type}
tooltipSetting={{
  visible:true,
  format:'${x}:data ${y}',
  trackLineSettings:{
    visible:true
  }
}}>
  <Inject services={[SparklineTooltip]} />
  <series>
    <Inject type={type} dataSource={data} />
  </series>
 
</SparklineComponent>
  )
}

export default SparkLine