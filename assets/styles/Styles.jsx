import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#097dab',
    borderWidth: 3.5,
    textAling: 'center',
    borderRadius: 15,
    color: 'black',
    textAlign: 'center',
    placeholderTextColor: 'darck-gray',
    fontSize: 25,
    minWidth: 350,
    height: 60,
    backgroundColor: 'transparent',
    fontFamily: "'PT Sans', sans-serif",
    color: '#505455',
  },
  buttons: {
    padding: 10,
    borderRadius: 15,
    width: 150,
    marginTop: 20,
    backgroundColor: '#097dab',
    minWidth: 200,
    height: 60,
  },
  textbuttons: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 35,
    fontSize: 25,
    fontFamily: "'PT Sans', sans-serif",
  },
  texts: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    letterSpacing: 2,
    fontFamily: "'PT Sans', sans-serif",
    color: '#505455',
  },
  images: {
    width: '200px', 
    height: '200px', 
    resizeMode: 'center',     
    maxWidth: '100%', 
   
  }

});

const viewsChilds = StyleSheet.create({
  views: {
    width: '80%',
    marginLeft: '5%',
  }
});

export { styles, viewsChilds }