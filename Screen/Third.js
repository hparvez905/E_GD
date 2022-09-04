import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Button } from "react-native";

export default function Third({navigation}){
    return(
        <View style={styles.container}>
            <Text>
                HIiiiiiiiii
            </Text>
            <Button title="pop to root" onPress={()=>navigation.popToTop()}></Button>   // pop kore Homepage jabe;
            <Button title="pop" onPress={()=>navigation.pop()}></Button>             //pop kore back e jabe;
            <StatusBar style="auto"></StatusBar>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        
    },
});