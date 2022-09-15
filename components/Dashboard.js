import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Button } from "react-native";

export default function DashBoard({navigation}){
    return(
        <View style={styles.container}>
            <Text> This is Dashboard Screen</Text>
            
            <Button title="pop to root" onPress={()=>navigation.popToTop()}></Button>  
            <Button title="pop" onPress={()=>navigation.pop()}></Button>             
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