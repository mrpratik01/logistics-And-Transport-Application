import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screen/SignInScreen";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import OtpScreen from "./src/screen/OtpScreen/OtpScreen";
import HomeScreen from "./src/screen/HomeScreen";
import ChangePassword from "./src/screen/changePassword/ChangePassword";
import RegisterScreen from "./src/screen/RegisterScreen";
import PickupLocation from "./src/screen/PickupLocation";
import AddNewLocationScreen from "./src/screen/AddNewLocationScreen";
import DropOffLocation from "./src/screen/DropOffLocation/DropOffLocation";
import DeliveryItemsDetails from "./src/screen/DeliveryItemsDetails";
import MakePayment from "./src/screen/MakePayment";
import { NavigationContainer } from "@react-navigation/native";
import OrderSummary from "./src/screen/OrderSummary";
import PaymentSuccessful from "./src/screen/PaymentSuccessful";
import ShipmentHistory from "./src/screen/ShipmentHistory/ShipmentHistory";
import WalletBalance from "./src/screen/WalletBalance/WalletBalance";
import ProfileSection from "./src/screen/ProfileSection/ProfileSection";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <TailwindProvider utilities={utilities}>
      {/* <NavigationContainer>
        <stack.Navigator  screenOptions={{
              headerShown: false,
            }} initialRouteName="WelcomeScreen">
          <stack.Screen
           
            name="welcomeScreen"
            component={WelcomeScreen}
          ></stack.Screen>
          <stack.Screen name="SignInScreen" component={SignInScreen} />
          <stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
          ></stack.Screen>
          <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
          <stack.Screen
            name="PickupLocation"
            component={PickupLocation}
          ></stack.Screen>
          <stack.Screen
            name="AddNewLocationScreen"
            component={AddNewLocationScreen}
          ></stack.Screen>
          <stack.Screen
            name="DropOffLocation"
            component={DropOffLocation}
          ></stack.Screen>
          <stack.Screen
            name="DeliveryItemsDetails"
            component={DeliveryItemsDetails}
          ></stack.Screen>
          <stack.Screen
            name="shipmentHistory"
            component={ShipmentHistory}
          ></stack.Screen>
        </stack.Navigator>
      </NavigationContainer> */}




      {/* <WalletBalance></WalletBalance> */}

   <ProfileSection></ProfileSection>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({});
