import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import MultiSelect from "react-native-multiple-select";

const pollen = [
  {
    id: "a0",
    name: "Ambrosia",
  },
  {
    id: "b1",
    name: "Beifuss",
  },
  {
    id: "c2",
    name: "Birke",
  },
  {
    id: "d3",
    name: "Erle",
  },
  {
    id: "e4",
    name: "Esche",
  },
  {
    id: "f5",
    name: "Gräser",
  },
  {
    id: "g6",
    name: "Hasel",
  },
  {
    id: "h7",
    name: "Roggen",
  },
];

export default PollenMultiSelect = (props) => {
  const [state, setState] = useState(selectedItems);
  const [selectedItems, setSelectedItems] = useState();

  onSelectedItemsChange = (selectedItems) => {
    setState({ selectedItems }, () =>
      console.warn("Suche Pollen: ", selectedItems)
    );
  };
  return (
    <MultiSelect
      items={pollen}
      uniqueKey="id"
      onSelectedItemsChange={onSelectedItemsChange}
      selectedItems={selectedItems}
      selectText="Wähle Pollen"
      searchInputPlaceholderText="Wähle Pollen ..."
      onChangeInput={(text) => console.warn(text)}
      tagRemoveIconColor="#CCC"
      tagBorderColor="#CCC"
      tagTextColor="#CCC"
      selectedItemTextColor="#CCC"
      selectedItemIconColor="#CCC"
      itemTextColor="#000"
      displayKey="name"
      searchInputStyle={{ color: "#CCC" }}
      submitButtonColor="#CCC"
      submitButtonText="Submit"
      removeSelected
    />
  );
};
