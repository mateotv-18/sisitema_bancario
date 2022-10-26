import { StyleSheet, Text, View, Image } from 'react-native';
import { styles, viewsChilds } from '../assets/styles/Styles';

const Banner = props => {
    return (
        <View style={[viewsChilds.views, { alignItems: 'center', justifyContent: 'center', }]}>

            <Image
                source={require(`../assets/img/${props.img}`)}
                style={[styles.images]} />
        </View>


    );
}

export {Banner};