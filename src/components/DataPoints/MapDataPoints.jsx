
// import React from "react";
// import { DataContainer, DataHeader, DataComponent} from '../Styles/styledElements';

// const MapDataPoints = ({ option,  dataComp, fixedDec }) => {
//     try {
        
//       return (
        
//        <>
       
     
//        <DataContainer>
//           <DataHeader>
//               {/* {`${dataComp}`} */}
//           </DataHeader>
//           <DataComponent>
//             {" "}
//             {
//               Object.keys(option.callExpDateMap).map((entry) => {
//                 return Object.keys(option.mapType[entry]).map(
//                   (innerArrayID) =>
//                     option.callExpDateMap[entry][innerArrayID][0].dataComp.toFixed(fixedDec)
//                 );
//               })[0][1]
//             }
//           </DataComponent>
//         </DataContainer>
     
      
//        </>
        
//       );
        
//     } catch (error) {
//       return (
//        <>
//           <DataHeader>{`${dataComp}`}</DataHeader>
//           <DataComponent>N/A</DataComponent>
//        </>
//       );
//     }
//   };
  
//   export default MapDataPoints;