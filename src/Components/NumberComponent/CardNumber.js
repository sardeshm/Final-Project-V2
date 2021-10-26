// import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Box from "@mui/material/Box";
// import { styled } from "@mui/material/styles";

// import Typography from "@mui/material/Typography";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const CardNumber = ({ numberList }) => {
//   const [selectedNumberData, setselectedNumberData] = useState({});
//   return;
//   <Grid container spacing={2}>
//     <Grid item xs={3}>
//       <Item style={{ height: "100%" }}>
//         <Grid>
//           <Grid>
//             <Box
//               sx={{
//                 p: 2,
//                 bgcolor: "yellow",
//                 display: "grid",
//                 gridTemplateColumns: { md: "1fr 1fr" },
//                 gap: 2,
//               }}
//             >
//               {numberList.map((data) => (
//                 <Item
//                   className="mousePointer"
//                   key={data._id}
//                   elevation={16}
//                   onClick={() => setselectedNumberData(data)}
//                 >
//                   {data.MarathiNumber}
//                 </Item>
//               ))}
//             </Box>
//           </Grid>
//         </Grid>
//       </Item>
//     </Grid>
//     <Grid item xs={9}>
//       <Item style={{ height: "100%" }}>
//         <Typography gutterBottom variant="h5" component="div"></Typography>
//         <Typography variant="h6" color="text.secondary">
//           {selectedNumberData.MarathiNumber}

//           {selectedNumberData.MarathiPronunciation}
//         </Typography>
//         <Typography variant="h6" color="text.secondary">
//           {selectedNumberData.EnglishNumber}
//           {selectedNumberData.EnglishPronunciation}
//         </Typography>
//         <Typography variant="h6" color="text.secondary">
//           {selectedNumberData.GermanNumber}
//           {selectedNumberData.GermanPronunciation}
//         </Typography>
//       </Item>
//     </Grid>
//   </Grid>;
// };

// export default CardNumber;
