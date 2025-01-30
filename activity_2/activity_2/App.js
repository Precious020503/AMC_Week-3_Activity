import React from 'react';
import {Image, View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const CombinedTextInputExample = () => {
  const [text, onChangeName] = React.useState('name');
  const [number, onChangeAge] = React.useState('Age');
  const [address, onChangeAddress] = React.useState('address');
  const [school, onChangeSchool] = React.useState('school');
  const [course, onChangeCourse] = React.useState('course');
  const [email, onChangeEmail] = React.useState('email');
  const [contact, onChangeContact] = React.useState('contact');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
      <View style = {styles.inputContainer}>
      
        <TextInput  
        style={styles.input}
        onChangeText={onChangeName}
        value={text}
        placeholder="Name"  
        />
</View>
        <TextInput style={styles.input}
        onChangeText={onChangeAge}
        value={number}
        placeholder="Age"
        keyboardType="numeric"
        />

        <TextInput
        style={styles.input}
        onChangeText={onChangeAddress}
        value={address}
        placeholder="Address"
         />

        <TextInput
        style={styles.input}
        onChangeText={onChangeSchool}
        value={school}
        placeholder="School"
          />

        <TextInput
        style={styles.input}
        onChangeText={onChangeCourse}
        value={course}
        placeholder="Course"/>

        <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email} placeholder="Email"
        keyboardType="email-address"
        />

        <TextInput
        style={styles.input}
        onChangeText={onChangeContact}
        value={contact}
        placeholder="Contact"
        keyboardType="phone-pad"
        />

        <TextInput
          style={styles.multilineInput}
          onChangeText={onChangeAboutMe}
          value={aboutMe}
          placeholder="About Me"
          multiline
          numberOfLines={12}
        />

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  multilineInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlignVertical: 'top',
  },
});

export default CombinedTextInputExample;