import React from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

function InputRow({ inputHint, input }) {
  return (
    <View style={{ flexDirection: 'row', margin: 10 }}>
      <Text style={styles.hint}>
        {inputHint}
      </Text>
      {input}
    </View>
  );
}

function RadioSelections({ value, setCheckedOption }) {
  return (
    <View style={styles.radioselections}>
      <RadioButton
        value='Yes'
        status={value === 'Yes' ? 'checked' : 'unchecked'}
        onPress={() => setCheckedOption('Yes')}
      />
      <Text style={styles.radiohint}>Yes</Text>
      <RadioButton
        value='No'
        status={value === 'No' ? 'checked' : 'unchecked'}
        onPress={() => setCheckedOption('No')}
      />
      <Text style={styles.radiohint}>No</Text>
    </View>
  );
}

export default function App() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [isLikeCoffee, setIsLikeCoffee] = React.useState(null);
  const handleSubmit = () => {
    let coffeeString;
    if (isLikeCoffee === 'Yes') {
      coffeeString = 'like coffee.';
    } else if (isLikeCoffee === 'No') {
      coffeeString = 'do not like coffee.';
    } else {
      coffeeString = 'have no preference about coffee.'
    }

    Alert.alert(
      'Summary',
      `My name is ${name}. I am ${age} years old. I ${coffeeString}`)
  };

  return (
    <View style={styles.container}>
      <InputRow
        inputHint='Your name:'
        input={<TextInput
          style={styles.textinput}
          value={name}
          onChangeText={setName}
        />}
      />
      <InputRow
        inputHint='Your age:'
        input={<TextInput
          style={styles.textinput}
          value={age}
          onChangeText={setAge}
          keyboardType='numeric'
        />}
      />
      <InputRow
        inputHint='Like coffee?'
        input={<RadioSelections
          value={isLikeCoffee}
          setCheckedOption={setIsLikeCoffee} />}
      />
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'lightblue' : 'white'
          },
          styles.button
        ]}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonhint}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  hint: {
    fontSize: 25,
    height: 60,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 11
  },
  textinput: {
    height: 60,
    width: 230,
    fontSize: 25,
    borderWidth: 1,
    padding: 10
  },
  radioselections: {
    flexDirection: 'row',
    width: 230,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -6
  },
  radiohint: {
    fontSize: 25,
    marginRight: 15
  },
  button: {
    width: 380,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonhint: {
    fontSize: 25,
    padding: 5
  }
});
