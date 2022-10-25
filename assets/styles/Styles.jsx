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
    fontSize: 20,
    width: 230,
    height: 50,
    backgroundColor: 'transparent',
    fontFamily: "'PT Sans', sans-serif",
    color: '#505455',
  },
  buttons: {
    padding: 10,
    borderRadius: 15,
    width: 200,
    margin: 20,
    backgroundColor: '#097dab',
    minWidth: 200,
    height: 50,
  },
  textbuttons: {
    color: 'white',
    textAlign: 'center',
    lineHeight: 28,
    fontSize: 25,
    fontFamily: "'PT Sans', sans-serif",
  },
  texts: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    letterSpacing: 2,
    fontFamily: "'PT Sans', sans-serif",
    color: '#505455',
  },
  images: {
    width: '200px', 
    height: '150px', 
    resizeMode: 'center',   
  },
  title: {
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: 40, 
    borderRadius: '100%',
    backgroundColor: '#097dab',
    margin: 10,
    width: 250,
    height: 250,   
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    letterSpacing: 1,
    
  }

});

const viewsChilds = StyleSheet.create({
  views: {
    width: '80%',   
  }
});

export { styles, viewsChilds }