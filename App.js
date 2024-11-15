//################ EX 1 ################
// import React from 'react';
// import {StyleSheet, Text, View, FlatList, TouchableOpacity, StatusBar} from 'react-native';
//
// const datasource = [
//     {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'},
//     {key: 'f'}, {key: 'g'}, {key: 'h'}, {key: 'i'}, {key: 'j'},
//     {key: 'k'}, {key: 'l'}, {key: 'm'}, {key: 'n'}, {key: 'o'},
//     {key: 'p'}, {key: 'q'}, {key: 'r'}, {key: 's'}, {key: 't'},
//     {key: 'u'}, {key: 'v'}, {key: 'w'}, {key: 'x'}, {key: 'y'},
//     {key: 'z'}
// ];
//
// const App = () => {
//     return (
//         <View style={styles.container}>
//             <StatusBar hidden={true} />
//             <FlatList data={datasource} renderItem={renderItem} />
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     opacityStyle: {
//         borderWidth: 1,
//         padding: 10,
//     },
//     textStyle: {
//         fontSize: 15,
//         textAlign: 'left',
//     },
// });
//
// const renderItem = ({ item }) => {
//     return (
//         <TouchableOpacity style={styles.opacityStyle}>
//             <Text style={styles.textStyle}>{item.key}</Text>
//         </TouchableOpacity>
//     );
// };
//
// export default App;
//################ EX 2 ################
import React from 'react';
import {StyleSheet, Text, View, SectionList, TouchableOpacity, StatusBar} from 'react-native';

const datasource = [
    {data:[
            {key: 'a'},
            {key: 'e'},
            {key: 'i'},
            {key: 'o'},
            {key: 'u'},
        ],
        title:"Vowels", bgcolor:"skyblue"},
    {data:[
            {key: 'b'},
            {key: 'c'},
            {key: 'd'},
            {key: 'f'},
            {key: 'g'},
            {key: 'h'},
            {key: 'j'},
            {key: 'k'},
            {key: 'l'},
            {key: 'm'},
            {key: 'n'},
            {key: 'p'},
            {key: 'q'},
            {key: 'r'},
            {key: 's'},
            {key: 't'},
            {key: 'v'},
            {key: 'w'},
            {key: 'x'},
            {key: 'y'},
            {key: 'z'},
        ],
        title:"Consonants", bgcolor:"khaki"}
];

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <SectionList sections={datasource} renderItem={renderItem}
                         renderSectionHeader={({section:{title,bgcolor}})=>(
                             <Text style={[styles.headerText,{backgroundColor:bgcolor}]}>{title}</Text>
                         )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    opacityStyle: {
        borderWidth: 1,
        padding: 10,
    },
    textStyle: {
        fontSize: 15,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.opacityStyle}>
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );
};

export default App;
