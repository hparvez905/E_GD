import HomeScreen from "./Screen/HomeScreen";
import SignIn from "./components/SignIn";
import DashBoard from "./components/Dashboard";
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
            name="SignIn" 
            component={SignIn}
            
            />
             <Stack.Screen 
            name="DashBoard" 
            component={DashBoard}
            options={{headerShown:false}}
            
            />

           
        </Stack.Navigator>
       </NavigationContainer>
    );
}

