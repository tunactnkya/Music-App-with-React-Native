import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, FlatList } from "react-native";
import SearchBar from "./components/SearchBar";
import SongCard from "./components/SongCard";
import music_data from './music-data.json';

function tuna() {
    const [list, setList] = useState(music_data);

    const renderSong = ({ item }) => <SongCard song={item} />

    const renderSeperator = () => <View style={styles.seperator} />

    const handleSearch = text => {
        const filteredlist = music_data.filter(song => {
            const searcedText = text.toLowerCase();
            const currentTitle = song.title.toLowerCase();

            return currentTitle.indexOf(searcedText) > - 1;
        })
        setList(filteredlist);
    };
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.container} >
                <SearchBar onSearch={handleSearch} />
                <FlatList
                    keyExtractor={(item) => item.id}
                    data={list}
                    renderItem={renderSong}
                    ItemSeparatorComponent={renderSeperator} />
            </View>
        </SafeAreaView>
    )
}
export default tuna;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    seperator: {
        borderWidth: 1,
        borderColor: 'gray'
    }
})