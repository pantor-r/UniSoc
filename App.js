import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, TouchableOpacity, json, TouchableHighlight, loginBtn, AsyncStorage, ScrollView } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("db");

function Help({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.logo4}> User Manual </Text>
      <Text style={styles.text1}>
  
 UniSoc is an app designed to replace the current outdated and impractical systems used by the clubs & societies in universities across the country. Its main goal is to facilitate the cooperation and sharing of information between students, universities, societies and clubs.
 It is created for university students that want to communicate easily with their societies regarding events, meetings and updates.
 </Text>
 <Text style={styles.text1}>
 1.      Student view:
 </Text>
 <Text style={styles.text1}>
a.   Log In Screen
 </Text>
 <Text style={styles.text1}>
  
 When first opening the app, the login page will be loaded. You need to log in using your university credentials: email and password.
 If the introduced data is correct, you will be directed to the HomeScreen.
 If the introduced data is wrong, log in will be denied and you will be asked to retry.
 In case you forgot your password, click the “Forgot Password” button, which will redirect you to the university’s forgot password website.
 </Text>
 <Text style={styles.text1}>
 b.  Home Screen
 </Text>
 <Text style={styles.text1}>
 This is the main menu of the app.
 By clicking the “Profile page” button, you will be directed to your profile page.
 By clicking the “Notifications” button, you will be directed to your notifications page, where you can see the latest updates from all the societies you are a member of.
 By clicking the “Timetable” button, you will be directed to your timetable, where you can see all the events that you are planning to participate at.
 By clicking the “Societies” button, you will be directed to the main societies page, where you can search for any society.
 By clicking the “Students” button, you will be directed to the main students page, where you can search any student.
 By clicking the “Log out” button, you will be logging out of the app, and you will be sent to the Log in page.
 By clicking the “Help” button, you will be directed to the in app User Manual.
 </Text>
 <Text style={styles.text1}>
c.   Profile page
 </Text>
 <Text style={styles.text1}>
 This is your profile page.
 Here you can see, and edit, your profile photo and your description.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 d.  Notifications
 </Text>
 <Text style={styles.text1}>
 Here are all your notifications, starting from the most recent one, from all the clubs and societies you are a part of.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 e.  Timetable
 </Text>
 <Text style={styles.text1}>
 In this page you’ll find a timetable of all the events you said you will participate at.
 You can see them by clicking on a specific date.
 You can click the arrow in the upper bar to change the month you are viewing.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 f.  Societies
 </Text>
 <Text style={styles.text1}>
 Here is a list of all the societies in Alphabetical order.
 By clicking on a society, you will be directed to its own page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 g.  Students
 </Text>
 <Text style={styles.text1}>
 Here is a list of all the students in Alphabetical order.
 By clicking on a student, you will be directed to its own profile page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 h.  Society
 </Text>
 <Text style={styles.text1}>
 This is a society’s page.
 You can see the photo, description, as well as the future events.
 You can click on the Join button to join the society.
 By clicking on an event, you will be directed to its own page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 i.  Event
 </Text>
 <Text style={styles.text1}>
 On this page you can see the photo and details of an event.
 You can click to participate on the participate button. (you will be able to see the event in your calendar from now on)
 By clicking the “Society” button you will be taken to the society page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
  
 2.       Society Admin view:
 </Text>
 <Text style={styles.text1}>
 a.   Log In Screen
 </Text>
 <Text style={styles.text1}>
 When first opening the app, the log in page will be loaded. You need to log in using your university credentials: username and password.
 If the introduced data is correct, you will be directed to the HomeScreen.
 If the introduced data is wrong, log in will be denied and you will be asked to retry.
 In case you forgot your password, click the “Forgot Password” button, which will redirect you to the university’s forgot password website.
 </Text>
 <Text style={styles.text1}>
 b.   Home Screen
 </Text>
 <Text style={styles.text1}>
 This is the main menu of the app.
 By clicking the “Profile page” button, you will be directed to your profile page.
 By clicking the “Notifications” button, you will be directed to your notifications page, where you can see the latest updates from all the societies you are a member of.
 By clicking the “Timetable” button, you will be directed to your timetable, where you can see all the events that you are planning to participate at.
 By clicking the “Societies” button, you will be directed to the main societies page, where you can search for any society.
 By clicking the “Students” button, you will be directed to the main students page, where you can search any student.
 By clicking the “Log out” button, you will be logging out the app,  and you will be sent to the Log in page.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 c.   Profile page
 </Text>
 <Text style={styles.text1}>
 This is your profile page.
 Here you can see your profile photo and your description.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 d.   Notifications
 </Text>
 <Text style={styles.text1}>
 Here are all your notifications, starting from the most recent one, from all the clubs and societies you are a part of.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 e.   Timetable
 </Text>
 <Text style={styles.text1}>
 In this page you’ll find a timetable of all the events you said you will participate at.
 You can see them by clicking on a specific date.
 You can click the arrow in the upper bar to change the month you are viewing.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 f.   Societies
 </Text>
 <Text style={styles.text1}>
 Here is a list of all the societies in Alphabetical order.
 By clicking on a society, you will be directed to its own page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 If you are the admin of this society, you will also have the “Create Event” and “Update Event” buttons.
 By clicking the “Create Event”, you will be directed to the Create Event page, where you can create an event.
 By clicking the “Update Event”, you will be directed to the Update Event page, where you can update the details of an event.
 </Text>
 <Text style={styles.text1}>
 g.   Students
 </Text>
 <Text style={styles.text1}>
 Here is a list of all the students in Alphabetical order.
 By clicking on a student, you will be directed to its own profile page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 h.   Society
 </Text>
 <Text style={styles.text1}>
 This is a society’s page.
 You can see the photo, description, as well as the future events.
 You can click on the Join button to join the society.
 By clicking on an event, you will be directed to its own page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 i.   Event
 </Text>
 <Text style={styles.text1}>
 On this page you can see the photo and details of an event.
 You can click to participate on the participate button. (you will be able to see the event in your calendar from now on)
 By clicking the “Society” button you will be taken to the society page.
 By clicking the “Home” button, you will be directed to the Home Screen.
 By clicking the “Help” button, you will be directed to the User Manual.
 </Text>
 <Text style={styles.text1}>
 j.   Create Event
 </Text>
 <Text style={styles.text1}>
 On this page you can create an event by filling in the details in the specific containers.
 By clicking the button “Create event”, the event will be created, and it will appear on the society’s page. You will also be directed to the event page.
 </Text>
 <Text style={styles.text1}>
 k.   Update Event
 </Text>
 <Text style={styles.text1}>
 On this page you can update an event by filling in the details in the specific containers.
 By clicking the button “Update event”, the event will be updated, and it will appear on the society’s page. You will also be directed to the event page.
 By clicking the button “Delete event”, the event will be deleted and you will be directed to the society’s page.
 </Text>
 <Text style={styles.text1}>
 3.       University Admin view:
 </Text>
 <Text style={styles.text1}>
 a.   Log In Screen
 </Text>
 <Text style={styles.text1}>
 When first opening the app, the log in page will be loaded. You need to introduce your university credentials: username and password.
 If the introduced data is correct, you will be directed to the HomeScreen.
 If the introduced data is wrong, log in will be denied and you will be asked to retry.
 In case you forgot your password, click the “Forgot Password” button, which will redirect you to the university’s forgot password website.
 </Text>
 <Text style={styles.text1}>
 b. Home Screen
 </Text>
 <Text style={styles.text1}>
 This is the main menu of the app.
 By clicking the “University profile page” button, you will be directed to your university’s profile page.
 By clicking the “Create Society” button, you will be directed to the Create Society page.
 By clicking the “Delete Society” button, you will be directed to the Create Society page.
 By clicking the “Log out” button, you will be logging out the app,  and you will be sent to the Log in page.
 By clicking the “Help” button, you will be directed to the User Manual.
  
       </Text>
      <TouchableHighlight
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Home</Text>
      </TouchableHighlight>
      </ScrollView>
     </View>
  );
 }
 
function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>UniSoc</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="User:" 
            placeholderTextColor="#003f5c"
            onChangeText={name => this.setState({UserName: name})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style = {styles.inputText}
            placeholder="Password:" 
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={password => this.setState({UserPassword: password})}/>
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
        onPress={() => navigation.navigate('MyProfile')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>Profile page</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('UniAdmin')}
        style={styles.StudentsBt}>
        <Text style={styles.HomeText}>UniAdmin</Text>
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
        onPress={() => navigation.navigate('Help')}
        style={styles.HelpBt}>
        <Text style={styles.HomeText}>Help</Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.LogoutBt}>
        <Text style={styles.HomeText2}>Log out</Text>
      </TouchableHighlight>
    </View>
  );
}

function MyProfile ({ navigation }){
return (
  <View style={styles.container}>
      <View style={styles.header}></View>
      <Image style={styles.tinyLogo} source={require('./profile.jpg')}/> 
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Mr Nobody</Text>
          <Text style={styles.info}>BSc Computer Science student</Text>
          <Text style={styles.description}>Hi Stalker! ;)</Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text>Option 1</Text>  
          </TouchableOpacity>              
        </View>
    </View>
  </View>
);
}

function Timetables({ navigation }){
  return (
    <View style={styles.container}>
      <Calendar style={styles.calendar}
          current={'2020-05-01'}
          markingType={'multi-dot'}
          markedDates={{
              '2020-05-08': {
          selected: true,
          dots: [
                  {key: 'vacation', color: 'blue', selectedDotColor: 'white'}, 
                  {key: 'massage', color: 'red', selectedDotColor: 'white'}
                ]
          },
              '2020-05-09': {
          disabled: true,
          dots: [
                  {key: 'vacation', color: 'green', selectedDotColor: 'red'}, 
                  {key: 'massage', color: 'red', selectedDotColor: 'green'}
                ]
          }
}}
/>
</View>
);
}

function Society ({ navigation }){
  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.tinyLogo} source={require('./filmsoc_logo2.jpg')}/> 
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Film and Filmmakers Society</Text>
            <Text style={styles.info}>Description: </Text>
            <Text style={styles.description}>Film and Filmmakers society is the joining of the film society and the student filmmakers group, both of which have started in the last two years an have grown into a lovely crew of film enthusiasts. Our aims for the year are to bring people together to watch, talk about and make movies. We hope to build on the success of the previous years and build an encouraging space for  many people to get involved. We hope to see you at our next event!
            Email: Film@society.liverpoolguild.org</Text>
            <TouchableOpacity style={styles.buttonContainer}>
            <Text>Join Society</Text>  
          </TouchableOpacity>              
          </View>
      </View>
    </View>
);
}

function Societies({ navigation }) {
  return (
    <View style={styles.container}>

      <TouchableHighlight
        onPress={() => navigation.navigate('Society')}
        style={styles.Soc}>
        <Text style={styles.SocText}>Film Society</Text>
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

function UniAdmin({ navigation }) {
  return (
    <View style={styles.container}>
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
        onPress={() => navigation.navigate('HomeScreen')}
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

  constructor() {
    super();
    this.state = {
                UserName: '',
                  UserEmail: '',
                  UserPassword: '',
}
  }

  prepareDb() {
    db.transaction((tx) => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user (UserID int(11), nameUser VARCHAR(45), emailUser VARCHAR(45), passwordUser VARCHAR(45));');
      console.log('table created');
    }, null, function () {
      console.log('done?.');
    });
  }

  addToDb() {
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO user (UserID, nameUser, emailUser, passwordUser) VALUES (1, Raz Pantor, raz@student.liverpool.ac.uk, raz);');
      console.log('table updated');
    }, null, function () {
      console.log('done?.');
    });
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
        name = "LoginScreen" 
        component = {LoginScreen} 
        options = {{
          headerTransparent: true}}
        />
      <Stack.Screen 
        name = "Societies" 
        component = {Societies} 
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
          headerTransparent: false,
          headerTintColor: "black",
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
      <Stack.Screen 
        name = "MyProfile" 
        component = {MyProfile} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Society" 
        component = {Society} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Timetables"
        component = {Timetables} 
        options = {{
          headerTransparent: true
        }}
      />
      <Stack.Screen 
        name = "Help"
        component = {Help} 
        options = {{
          headerTransparent: false,
          headerTintColor: "black"
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
    marginTop: -50,
    marginBottom: 70,
  },
  LogoutBt: {
    width: '40%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: -90,
    right: 10,
  }, 
  HelpBt: {
    width: '40%',
    backgroundColor: '#00ced1',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginTop: 0,
    right: 210
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
    marginBottom: 80,
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
    top: 20,
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
  tinyLogo: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130,
    top: 0
  },
  name:{
    fontSize:22,
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    top: 200
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "white",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "white",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  calendar: {
    marginBottom: 0,
    bottom: 100
  },
  text: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16
  },
  text1: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 16,
    top: -10
  }
});
