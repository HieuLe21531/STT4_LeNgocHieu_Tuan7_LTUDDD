import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App({navigation}) {
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [data, setData] = useState([]);

  const navigateToScreen1 = () => {
    navigation.navigate("1");
  }

  const navigateToScreen3 = (id) => {
    navigation.navigate("3", id);
  }

  const SignUp = () => {
    console.log(JSON.stringify(document));
    fetch("https://654724db902874dff3abfd25.mockapi.io/phone_app_lab/Lab8_1", {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            username: user,
            password: pass,
        })
    })
    .then(() => {
        fetch("https://654724db902874dff3abfd25.mockapi.io/phone_app_lab/Lab8_1")
            .then((res) => res.json())
            .then((json) => navigateToScreen3(json.length))
    })
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>Sign up</Text>
      <View style={{width: 320, height: 120, gap: 20, marginTop: 40}}>
          <View style={styles.viewInput2}>
            <TextInput
              style={styles.input2}
              placeholder="Username"
              value={user}
              onChangeText={setUsername}
            ></TextInput>
          </View>
          <View style={styles.viewInput2}>
            <TextInput
              style={styles.input2}
              placeholder="Password"
              value={pass}
              secureTextEntry={true}
              onChangeText={setPassword}
            ></TextInput>
          </View>
      </View>
      <TouchableOpacity style={{width: 300, height: 50, backgroundColor: "#33DAFF"}} onPress={SignUp}>
        <View style={{justifyContent: "center", alignItems: 'center', height: 50}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Sign up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{width: 300, height: 50, backgroundColor: "red"}} onPress={navigateToScreen1}>
        <View style={{justifyContent: "center", alignItems: 'center', height: 50}}>
          <Text style={{color: "white", fontSize: 20, fontWeight: 'bold'}}>Return</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    gap: 50
  },

  input2: {
    marginLeft: 10,
    width: 270,
    height: 50,
  },

  viewInput2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    width: 320,
    height: 50,
  },
});
