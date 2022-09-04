import HomeScreen from "./Screen/HomeScreen";
import Second from "./Screen/Second";
import Third from './Screen/Third'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack= createNativeStackNavigator();

export default function App(){
    return(
       <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{title:'Welcome'}}
            />
             <Stack.Screen 
            name="Second" 
            component={Second}
            
            />
             <Stack.Screen 
            name="Third" 
            component={Third}
            options={{headerShown:false}}
            
            />

           
        </Stack.Navigator>
       </NavigationContainer>
    );
}

