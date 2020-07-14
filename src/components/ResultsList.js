import React from 'react';
import {  
    View, 
    StyleSheet, 
    Text, 
    FlatList, 
    TouchableOpacity 
} from 'react-native';
// special function === import { withNavigation } from 'react-navigation';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

//props === title, results, navigation
const ResultsList = ({ title, results, navigation }) => {
    // new part start
    if (!results.length) {
        return null;
    }
    // new part end

    return (
    <View style={styles.container}>
        <Text style={styles.title} > {title}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item })=> {
                return (
                <TouchableOpacity 
                    onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                <ResultsDetail result={item} />
                </TouchableOpacity>
                );
            }}
        />
    </View>
    );
};
 
const styles = StyleSheet.create ({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 11
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);