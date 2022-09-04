import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View ,Button} from "react-native";
import { StackActions } from "@react-navigation/native";

export default function Second({navigation,route}){
    let Answer=route.params.Answer;  // parameter used for sign in or sign up
    let UserAnswer=Answer==='true'? 'SIGN IN PAGE' : 'SIGN UP PAGE';
    return(
        <View style={styles.container}>
            <Text>
                {UserAnswer}
                <Button title='Go to Third Screen'          //3rd Screen e jabe  ;
                onPress={()=>navigation.push('Third')}>     
                    
                </Button>
                <Button title='Go to Third Screen with Replace'     //3rd screen replace hobe 2nd screen e;
                onPress={()=>{
                    navigation.dispatch(
                        StackActions.replace('Third')
                    )
                }}>
                    
                </Button>
            </Text>
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