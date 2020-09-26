import * as React from 'react'
import { Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  trangChu, muaHang, qrCode, taiKhoan, tuVan, trangChu1, muaHang1, qrCode1, taiKhoan1, tuVan1,
} from './assets/icon'

function TrangChu() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>trang chu!</Text>
    </View>
  )
}

function MuaSam() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>mua sam!</Text>
    </View>
  )
}
function QrCode() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>qr code!</Text>
    </View>
  )
}

function TuVan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>tu van!</Text>
    </View>
  )
}

function TaiKhoan() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>tai khoan!</Text>
    </View>
  )
}

const BottomTabs = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName

            if (route.name === 'Home') {
              iconName = focused
                ? trangChu1
                : trangChu
            } else if (route.name === 'Shoping') {
              iconName = focused
                ? muaHang1
                : muaHang
            } else if (route.name === 'Scan') {
              iconName = focused
                ? qrCode1
                : qrCode
            } else if (route.name === 'Advisory') {
              iconName = focused
                ? tuVan1
                : tuVan
            } else if (route.name === 'User') {
              iconName = focused
                ? taiKhoan1
                : taiKhoan
            }

            // You can return any component that you like here!
            return <Image source={iconName} style={{ height: 27, width: 27 }} />
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F39C12',
          inactiveTintColor: 'gray',
        }}
      >
        <BottomTabs.Screen
          name="Home"
          component={TrangChu}
          options={{
            tabBarLabel: 'Trang chủ',
          }}
        />
        <BottomTabs.Screen
          name="Shoping"
          component={MuaSam}
          options={{
            tabBarLabel: 'Mua hàng',
          }}
        />
        <BottomTabs.Screen
          name="Scan"
          component={QrCode}
          options={{
            upperCaseLabel: false,
          }}
        />
        <BottomTabs.Screen
          name="Advisory"
          component={TuVan}
          options={{
            tabBarLabel: 'Tư vấn',
          }}
        />
        <BottomTabs.Screen
          name="User"
          component={TaiKhoan}
          options={{
            tabBarLabel: 'Tài khoản',
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  )
}
