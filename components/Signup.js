import React from 'react'
import {StyleSheet,Text,View,Button,Alert,TouchableOpacity,Image,TextInput,} from 'react-native'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image style={{width:"60%",height:"15%" , marginBottom:20}} source={require('./components/SignIn')} />
            <Text style={{color:"#ff4d00",fontSize:25,fontWeight:"bold",marginBottom:20}} >নতুন একাউন্ট খুলুন</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>ইমেইল</Text>
                <TextInput style={styles.textField} placeholder={'আপনার ইমেইল লিখুন'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField}>মোবাইল নাম্বার</Text>
                <TextInput style={styles.textField} placeholder={'মোবাইল নাম্বার দিন'}/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >পাসওয়ার্ড</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'আপনার পাসওয়ার্ড দিন'} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.headField} >পুনরায় পাসওয়ার্ড</Text>
                <TextInput style={styles.textField} secureTextEntry={true} placeholder={'পুনরায় পাসওয়ার্ড দিন'} />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={()=>navigation.navigate('SignIn')}>
                <Text style={styles.btnText}>নিবন্ধন করুন</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000c2b',
        justifyContent:'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
        paddingBottom:"2%",
    },
    textField: {
        backgroundColor:"#fff0e1",
        padding:"2%",
        borderRadius:6,
    },
    headField: {
        marginTop:15,
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
    },
    btn : {
        marginTop: 20,
        backgroundColor:'#ff4d00',
        borderRadius:10,
        width:250,
        alignItems: "center"
    },
    btnText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        padding:10
    }
});


export default SignUp