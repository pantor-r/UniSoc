import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, json, TouchableHighlight, loginBtn, AsyncStorage, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

function LoginScreen({ navigation }) {

  state = {
    user:" ",
    password:" ",
    message:" ",
    loading:false
  }

  fetch("https://www.mockapi.io/clone/5ddbb358041ac10014de140c", {
    method: 'post',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: 'foo=bar&lorem=ipsum'
  })
  .then(json)
  .then(function (data) {
    console.log('Request succeeded with JSON response', JSON.stringify(data));
  })
  .catch(function (error) {
    console.log('Request failed', JSON.stringify(error));
  });

  return (
    <View style={styles.container}>
        <Text style={styles.logo}>UniSoc</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User:" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({user:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style = {styles.inputText}
            placeholder="Password:" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableHighlight onPress={() => navigation.navigate('HomeScreen')}
        style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableHighlight>
      </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>

      <TouchableHighlight
        onPress={() => navigation.navigate('Profilepage')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Profile page</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('Notifications')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Notifications</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('Timetables')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Timetables</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('Societies')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Societies</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('Students')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Students</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.LogoutBt}>
        <Text style={styles.HomeText2}>Log out</Text>
      </TouchableHighlight>
    </View>
  );
}

function Societies({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>

      <TouchableHighlight
        onPress={() => navigation.navigate('Soc1')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc1</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Soc2')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc2</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Soc3')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc3</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Soc4')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc4</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Soc5')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc5</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.Home}>
        <Text style={styles.HomeText}>Home</Text>
      </TouchableHighlight>
    </View>
  );
}

function Notifications({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>

      <TouchableHighlight
        onPress={() => navigation.navigate('Soc1')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc1</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.Home}>
        <Text style={styles.HomeText}>Home</Text>
      </TouchableHighlight>
    </View>
  );
}

function UniAdmin({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo4}> University Admin </Text>
      <Text style={styles.logo3}> University:</Text>
    
      <TouchableHighlight
        onPress={() => navigation.navigate('Societies')}
        style={styles.Soc}>
        <Text style={styles.SocText}>View All Societies</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('CreateSoc')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Create Society</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('DeleteSoc')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Delete Society</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.Home}>
        <Text style={styles.HomeText}>Home</Text>
      </TouchableHighlight>
    </View>
  );
}

function Students({ navigation }) {
  return (
    <View style={styles.container2}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo4}> Students:</Text>
      <ScrollView>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student1')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student1</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student2')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student2</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student3')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student3</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student4')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student4</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student5')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student5</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student6')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student6</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student7')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student7</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student8')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student8</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student9')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student9</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Student10')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Student10</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.Home}>
        <Text style={styles.HomeText}>Home</Text>
      </TouchableHighlight>
      </ScrollView>
    </View>
  );
}

function Event({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo3}> Event: </Text>
      <Text style={styles.logo3}> Date: </Text>
      <Text style={styles.logo3}> Time: </Text>
      <Text style={styles.logo3}> Location: </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Soc5')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Soc5</Text>
      </TouchableHighlight>
            <TouchableHighlight
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.Home}>
        <Text style={styles.HomeText}>Home</Text>
      </TouchableHighlight>

     </View>
  );
}

function CreateEvent({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo4}> Create Event </Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Date" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({user:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Time" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({user:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Location" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({user:text})}/>
        </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Event')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Create</Text>
      </TouchableHighlight>
     </View>
  );
}

function CreateSoc({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo4}> Create Society </Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name:" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({user:text})}/>
        </View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Society')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Create</Text>
      </TouchableHighlight>
     </View>
  );
}

function DeleteSoc({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo2}> UniSoc</Text>
      <Text style={styles.logo4}> Delete Society </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('Delete')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Create</Text>
      </TouchableHighlight>
     </View>
  );
}

const Stack = createStackNavigator();

export default class App extends React.Component {

  state = {
    user:"",
    password:"",
    message:"",
    loading:false
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }

   componentDidMount(){
    fetch("https://5ddbb358041ac10014de140b.mockapi.io/spot")
    .then(response => response.json())
    .then((responseJson) => {
      this.setState({
       loading: false,
       dataSource: responseJson
      })
    })
    .catch(error => console.log(error)) 
    }

  render(){
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName = "LoginScreen"
      screenOptions = {{
        headerTintColor: 'white',
      }}
      >
        <Stack.Screen 
        name = " " 
        component = {LoginScreen} 
        options = {{
          headerTransparent: true}}
        />
      <Stack.Screen 
        name = "HomeScreen" 
        component = {HomeScreen} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Societies" 
        component = {Societies} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Notifications" 
        component = {Notifications} 
        options = {{
          headerTransparent: true
        }}
      />

      <Stack.Screen 
        name = "UniAdmin" 
        component = {UniAdmin} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Students" 
        component = {Students} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "DeleteSoc" 
        component = {DeleteSoc} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "CreateSoc" 
        component = {CreateSoc} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "CreateEvent" 
        component = {CreateEvent} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Event" 
        component = {Event} 
        options = {{
          headerTransparent: true
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#003f5c',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#20b2aa",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#f5fffa",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#00ced1",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  StudentsBt: {
    width: '80%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  LogoutBt: {
    width: '40%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 0,
  }, 
  HomeText: {
    color: 'white',
    fontSize:19,
    fontStyle: 'italic',
  },
    HomeText2: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
  },
  logo2: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#20b2aa',
    marginBottom: 40,
    alignSelf:"flex-start",
  },
  logo3: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#20b2aa',
    marginBottom: 40,
    alignSelf:"flex-start",
  },
  logo4: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#20b2aa',
    marginBottom: 40,
    alignSelf:"center",
  },
  Soc: {
    width: '80%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 60,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  SocText: {
    color: 'white',
    fontSize:19,
    fontStyle: 'italic',
  },
  Home: {
    width: '40%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 120,
    marginBottom: 0,
  }, 
  HomeText: {
    color: 'black',
    fontSize: 15,
    fontStyle: 'italic',
  },
});
