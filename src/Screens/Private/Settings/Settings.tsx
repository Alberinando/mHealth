import {Image, StatusBar, View} from 'react-native';
import React from 'react';
import Style from './Style';

function Settings(): React.JSX.Element {
  return (
    <>
      <View style={Style.Container}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <View style={Style.View}>
          <Image
            source={require('../../../Assets/Img/LogoSAMU.png')}
            style={Style.LogoSamu}
          />
        </View>
      </View>
    </>
  );
}

export default Settings;
