import React from 'react'
import { StyleSheet, TextInput, Text, View, Button } from 'react-native'

export default class App extends React.Component {
  handleLogin () {
    console.log("I'm in!")
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.field}>
          <TextInput testID="email" style={styles.input} placeholder='Email' keyboardType='email-address' ></TextInput>
        </View>

        <View style={styles.field}>
          <TextInput testID="password" style={styles.input} placeholder='Password' keyboardType='default' secureTextEntry={true}></TextInput>
        </View>

        <Button title="Login" onPress={this.handleLogin} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '200',
    marginBottom: 32
  },
  label: {
    marginRight: 8,
    color: 'grey'
  },
  field: {
    flexDirection: 'row',
    marginBottom: 12
  },
  input: {
    borderBottomColor: '#333'
  }
})
