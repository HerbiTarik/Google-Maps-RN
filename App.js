import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Marker, Polyline } from 'react-native-maps'

export default function App() {
    const [origin, setOrigin] = useState({
        latitude: 33.640411,
        longitude: -84.419853,
    })
    const [destination, setDestination] = useState({
        latitude: 33.640411,
        longitude: -84.419853,
    })

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.04,
                }}
            >
                <Marker
                    draggable
                    coordinate={origin}
                    onDragEnd={(direction) =>
                        setOrigin(direction.nativeEvent.coordinate)
                    }
                />
                <Marker
                    draggable
                    coordinate={destination}
                    onDragEnd={(direction) =>
                        setOrigin(direction.nativeEvent.coordinate)
                    }
                />
                <Polyline coordinates={[origin, destination]} />
            </MapView>

            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        marginBottom: 'auto',
        width: '100%',
        height: '100%',
    },
})
