import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  let value = {
    dropAddress: "",
    pickupAddress: "",
  };
  const [address, setAddress] = useState(value);

  const [users, setUsers] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    userID: "",
  });

  const updateUserDetails = (data) => {
    setUsers(data);
  };

  const updateDropAddress = (new_drop_address) => {
    setAddress({ ...address, dropAddress: new_drop_address });
  };

  const updatePickupAddress = (new_address) => {
    setAddress({ ...address, pickupAddress: new_address });
  };

  return (
    <AppContext.Provider
      value={{
        updateDropAddress,
        updatePickupAddress,
        dropAddress: address.dropAddress,
        pickupAddress: address.pickupAddress,
        updateUserDetails, users
       }}
    >
      {children}
    </AppContext.Provider>
  );
};
