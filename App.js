// #################EXCERCISE 1#################
// import { StyleSheet, Text, View } from 'react-native';
// import react from 'react';
//
// const Exercise1 = () => {
//   return(
//       <View>
//         <Text></Text>
//         <Text></Text>
//         <Text style={{fontSize: 24}}>RP Values</Text>
//         <Text style={{color: "green"}}>Excellence</Text>
//         <Text style={{backgroundColor: "yellow"}}>Customer-centric</Text>
//         <Text style={{fontStyle: "italic"}}>Integrity</Text>
//         <Text style={{textAlign: "center"}}>Teamwork</Text>
//         <Text style={{backgroundColor: "black", color: "white"}}>Enterprising</Text>
//       </View>
//   );
// };
//
// export default Exercise1;

// #################EXCERCISE 2#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop:10,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black'
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white'
//   },
//   title: {
//     fontWeight: 'bold'
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50}}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>
//             Who We Are
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our People
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our Campus
//           </Text>
//         </View>
//       </View>
//   );
// };
//
// export default Exercise2;

// #################EXCERCISE 3a#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:50}]}>
//           <Text style={[styles.Child, {backgroundColor: "powderblue"}]}>Child One</Text>
//           <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//           <Text style={[styles.Child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// #################EXCERCISE 3b#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:50}]}>
//           <Text style={[styles.Child, {backgroundColor: "powderblue"}]}>Child One</Text>
//           <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//           <Text style={[styles.Child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// #################EXCERCISE 3c#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:50}]}>
//         <Text style={[styles.Child, {backgroundColor: "powderblue", maxWidth: 90}]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor: "steelblue", maxHeight: 120}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// #################EXCERCISE 3d#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:50}]}>
//         <Text style={[styles.Child, {backgroundColor: "powderblue", }]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor: "skyblue", flex: 2}]}>Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor: "steelblue", flex: 3}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// #################EXCERCISE 3e#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 24,
//   }
// });
//
// const Exercise3 = () => {
//   return (
//       <View style={[styles.Parent, {marginTop:50}]}>
//         <Text style={[styles.Child, {backgroundColor: "powderblue", }]}>Child One</Text>
//         <Text style={[styles.Child, {backgroundColor: "skyblue"}]}>Child Two</Text>
//         <Text style={[styles.Child, {backgroundColor: "steelblue"}]}>Child Three</Text>
//       </View>
//   )
// }
//
// export default Exercise3;

// #################EXCERCISE 4#################
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     Parent: {
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         backgroundColor: 'whitesmoke',
//         marginBottom: 30
//     },
//     Child: {
//         width: 80,
//         height: 80,
//         textAlignVertical: 'center',
//         textAlign: 'center',
//     }
// });
//
// const Exercise4 = () => {
//     return (
//         <View style={styles.Parent}>
//             <Text style={[styles.Child, {backgroundColor: 'skyblue'}]}>Square 1</Text>
//             <Text style={[styles.Child, {backgroundColor: 'aquamarine'}]}>Square 2</Text>
//             <Text style={[styles.Child, {backgroundColor: 'red'}]}>Square 3</Text>
//         </View>
//     )
// }
//
// export default Exercise4;
