import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={style.page}>
      <View style={style.page}>
        <View style={style.header}>
          <Text style={style.name}>Isabella Sanchis</Text>
          <Text style={style.position}>Desenvolvedora Mobile</Text>
          <View>
            <Text style={style.social_media}>Github</Text>
            <Text style={style.social_media}>Facebook</Text>
            <Text style={style.social_media}>Linkedin</Text>
          </View>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  position: {
    color: '#939393',
    marginBottom: 10,
  },
  social_media: {
    color: '#000000',
    marginBottom: 2,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
