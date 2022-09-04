import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View,Button } from "react-native";


export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:20,margin:10}}>DO You have Account???</Text>
            <Button title='yes I have'
            onPress={()=>navigation.navigate('Second',{Answer:'true'})}> // sign in or sign up //

            </Button>
            <Button title='No, I do not'
            onPress={()=>navigation.navigate('Second',{Answer:'false'})}>

            </Button>
            <StatusBar style="auto"></StatusBar>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF0000',
        alignItems:'center',
        justifyContent:'center',
        margin:10,
        
        
    }
})