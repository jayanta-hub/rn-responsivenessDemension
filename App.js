import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/application/store';
import {AuthContext} from './src/Infrastructure/utils/context';
import SplashComponent from './src/Infrastructure/component/SplashScreen/SplashScreen';
import AuthNavigator from './src/Infrastructure/navigation/AuthNavigator';
import DrawerNavigator from './src/Infrastructure/navigation/DrawerNavigator';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
const customColor = {
  colors: {
    primary: 'rgb(120, 69, 172)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(240, 219, 255)',
    onPrimaryContainer: 'rgb(44, 0, 81)',
    secondary: 'rgb(102, 90, 111)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'rgb(237, 221, 246)',
    onSecondaryContainer: 'rgb(33, 24, 42)',
    tertiary: 'rgb(128, 81, 88)',
    onTertiary: 'rgb(255, 255, 255)',
    tertiaryContainer: 'rgb(255, 217, 221)',
    onTertiaryContainer: 'rgb(50, 16, 23)',
    error: 'rgb(186, 26, 26)',
    onError: 'rgb(255, 255, 255)',
    errorContainer: 'rgb(255, 218, 214)',
    onErrorContainer: 'rgb(65, 0, 2)',
    background: 'rgb(255, 251, 255)',
    onBackground: 'rgb(29, 27, 30)',
    surface: 'rgb(255, 251, 255)',
    onSurface: 'rgb(29, 27, 30)',
    surfaceVariant: 'rgb(233, 223, 235)',
    onSurfaceVariant: 'rgb(74, 69, 78)',
    outline: 'rgb(124, 117, 126)',
    outlineVariant: 'rgb(204, 196, 206)',
    shadow: 'rgb(0, 0, 0)',
    scrim: 'rgb(0, 0, 0)',
    inverseSurface: 'rgb(50, 47, 51)',
    inverseOnSurface: 'rgb(245, 239, 244)',
    inversePrimary: 'rgb(220, 184, 255)',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(248, 242, 251)',
      level2: 'rgb(244, 236, 248)',
      level3: 'rgb(240, 231, 246)',
      level4: 'rgb(239, 229, 245)',
      level5: 'rgb(236, 226, 243)',
    },
    surfaceDisabled: 'rgba(29, 27, 30, 0.12)',
    onSurfaceDisabled: 'rgba(29, 27, 30, 0.38)',
    backdrop: 'rgba(51, 47, 55, 0.4)',
    headingText: 'rgb(156, 68, 22)',
    onHeadingText: 'rgb(255, 255, 255)',
    headingTextContainer: 'rgb(255, 219, 205)',
    onHeadingTextContainer: 'rgb(54, 15, 0)',
  },
};
const theme = {
  ...DefaultTheme,
  colors: customColor.colors,
};
const App = () => {
  const [userToken, setUserToken] = useState(false);
  const [spalshTime, setSplashTime] = useState(true);
  const authContext = React.useMemo(
    () => ({
      signIn: () => {
        setUserToken(true);
      },
      signOut: () => {
        setUserToken(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setSplashTime(false);
    }, 2000);
  }, []);
  if (spalshTime) {
    return (
      <NavigationContainer>
        <SplashComponent />
      </NavigationContainer>
    );
  }

  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AuthContext.Provider value={authContext}>
            <NavigationContainer>
              {true ? <DrawerNavigator /> : <AuthNavigator />}
            </NavigationContainer>
          </AuthContext.Provider>
        </PaperProvider>
      </Provider>
    </>
  );
};
export default App;
