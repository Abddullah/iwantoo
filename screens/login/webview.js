import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { WebView } from 'react-native-webview';

class WebViewComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    UNSAFE_componentWillMount() {
        alert("START_COMPONENT")
    }

    changes(change) {
        console.log(change, 'chnages here')
        if (change.url.indexOf('is=success') !== -1 && !change.loading) {
        }
    }

    render() {

        return (
            <View style={{
                flex: 1,
                backgroundColor: "white",
                width: "100%",
            }}>
                {/* /////////////////////////////header///////////////////////////// */}

                <View style={{
                    flex: 1.4,
                    // height: 40,
                    backgroundColor: '#E94E1B',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: "row",
                    width: "100%"
                }}>
                    <View style={{ width: "90%", flexDirection: "row", marginTop: "7%" }}>
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => { Actions.pop() }}>
                            <Text style={{}}>{"Back"}</Text>
                            {/* <Ionicons name='md-arrow-back' style={{ color: "#ffff", fontWeight: "bold", fontSize: 23, }} /> */}
                        </TouchableOpacity>
                        <Text style={{ color: "#ffff", fontWeight: "bold", fontSize: 16 }}>{"Web view"}</Text>
                    </View>
                </View>

                <View style={{ flex: 8, alignItems: 'center' }}>
                    <View style={{ flex: 1, width: '100%' }}>
                        {/* <WebView
                            // renderLoading={true}
                            bounces={true}
                            mixedContentMode='compatibility'
                            onNavigationStateChange={(stateChange) => this.changes(stateChange)}
                            startInLoadingState={true}
                            source={{ uri: 'https://www.olx.com.pk/karachi_g4060695/mobile-phones_c1453' }}
                        /> */}

                        <WebView
                            originWhitelist={['*']}
                            source={{ html: '<h1>Hello world</h1>' }}
                            style={{ marginTop: 20 }}
                        />
                        {/* <WebView
                            source={{ uri: 'https://infinite.red' }}
                            style={{ marginTop: 20 }}
                        /> */}


                        {/* <WebView
                            source={{ uri: 'https://github.com/facebook/react-native' }}
                            style={{ marginTop: 20 }} /> */}
                        {/* <WebView source={{ uri: 'https://www.google.com/' }} ref={ref => { this.webView = ref; }} onError={() => { this.webView.reload(); }} /> */}

                        {/* <WebView source={{ uri: 'https://www.google.com/' }} ref={ref => { this.webView = ref; }} onError={() => { this.webView.reload(); }} /> */}
                    </View>
                </View>
            </View>

        );
    }
}

export default WebViewComp;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 40,
    },

});
