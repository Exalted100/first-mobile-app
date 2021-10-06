import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl } from 'react-native';
import PalettePreview from '../Components/PalettePreview';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Masters', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
    const [colourPalettes, setColourPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColourPalettes = useCallback(async() => {
        const data = await (await fetch("https://color-palette-api.kadikraman.vercel.app/palettes")).json()
        setColourPalettes(data)
    }, [])

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColourPalettes();
        setIsRefreshing(false);
    });

    useEffect(() => {
        fetchColourPalettes()
    }, [])

    return (
        <FlatList
            data={colourPalettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview onPress={() => navigation.navigate('ColourPalette', item)} palette={item} />
            )}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />}
            />
    )
}

export default Home;