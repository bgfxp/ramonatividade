import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


const App = () => {
  const [input, setInput] = useState('');
  const [resultado, setResultado] = useState('');

  const handlePress = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResultado('');
  };

  const handlePercentage = () => {
    const valorTotal = 100; 
    const porcentagem = input; 

    const resultado = (valorTotal * porcentagem) / 100;
    setResult(`Resultado: ${resultado}`);
  };

  const calculateResult = () => {
    try {
      setResultado(eval(input));
    } catch {
      setResultado('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.visor}>{input || '0'}</Text>
      <Text style={styles.resultado}>Resultado: {resultado}</Text>
      <View style={styles.buttonRow}>
      <TouchableOpacity style={styles.buttond} onPress={clearInput}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('()')}>
          <Text style={styles.buttonText}>()</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.buttonc} onPress={() => handlePercentage('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        {[7, 8, 9].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        {[4, 5, 6].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        {[1, 2, 3].map((num) => (
          <TouchableOpacity key={num} style={styles.button} onPress={() => handlePress(num.toString())}>
            <Text style={styles.buttonText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress('(-')}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonc} onPress={() => handlePress(',')}>
          <Text style={styles.buttonText}>,</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttoni} onPress={calculateResult}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1C1C1C', 
  },
  visor: {
    fontSize: 32, 
    marginBottom: 20,
    color: '#FF4C4C', 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  resultado: {
    fontSize: 22, 
    marginBottom: 20,
    color: '#FF4C4C', 
    textAlign: 'left', 
    alignSelf: 'flex-start', 
    width: '100%', 
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 15, 
  },
  button: {
    width: '22%', 
    backgroundColor: '#FF0000', 
    padding: 18, 
    alignItems: 'center',
    margin: 6, 
    borderRadius: 10, 
  },
  buttonc: {
    width: '22%',
    backgroundColor: '#CC0000',
    padding: 18,
    alignItems: 'center',
    margin: 6,
    borderRadius: 10,
  },
  buttond: {
    width: '22%',
    backgroundColor: '#CC0000',
    padding: 18,
    alignItems: 'center',
    margin: 6,
    borderRadius: 10,
  },
  buttoni: {
    width: '22%',
    backgroundColor: '#FF4C4C', 
    padding: 18,
    alignItems: 'center',
    margin: 6,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18, 
    color: '#FFFFFF', 
    fontWeight: '600', 
  },
});

export default App;
