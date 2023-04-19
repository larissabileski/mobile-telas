import React, { FC, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Card, DefaultTheme } from "react-native-paper";
import { Icon } from "react-native-elements";

interface Props {
  label: string;
}

const Pedido: FC <Props> = ({ label }) => {
  const [visible, setVisible] = useState(false);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    if (visible) {
      return (
        <Text style={styles.dropdown}>
          This is where the dropdown will be rendered.
        </Text>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        {/* <TextInput
          label="Cliente"
          value={text}
          onChangeText={(text) => setCliente(text)}
        /> */}
        <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
          {renderDropdown()}
          <Text style={styles.buttonText}>{label}</Text>
          <Icon type="font-awesome" name="chevron-down" />
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: DefaultTheme.colors.background,
    alignItems: "center",
    paddingTop: 10,
  },
  card: {
    width: "90%",
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
});

export default Dropdown;

