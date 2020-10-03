import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  RefreshControl,
  FlatList,
<<<<<<< HEAD
  TouchableHighlight, Button
=======
>>>>>>> 025e60f5156dcd1381b4735dcb924df0be441b0c
} from "react-native";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import {Appbar, Searchbar} from 'react-native-paper';

const AppHeader = ({header}) => {
  return(

   <Appbar.Header style={{
     height: 80,
     backgroundColor: '#ffea00',
   }}>

   
   <View style = {{flexDirection: 'row',}}>
      <Searchbar style={{
        borderRadius: 25,
      }} 
      placeholder="Find"
      
      ></Searchbar>
   </View>


   </Appbar.Header>
  );
};





const Trainer = ({ trainer }) => {
  return (
    <SafeAreaView>
    <View style={s.card}>
      <View
        style={{ flex: 1, flexDirection: "column", justifyContent: "center"}}
      >
        <Image style={s.cardProfileImage} source={trainer.image}></Image>
        <Text
          style={{
            alignSelf: "center",
<<<<<<< HEAD
            // fontFamily: "Roboto-Regular",
=======
>>>>>>> 025e60f5156dcd1381b4735dcb924df0be441b0c
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          {trainer.name}
        </Text>
        <Rating
          ratingCount={5}
          startingValue={trainer.rating}
          readonly
          imageSize={20}
        />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ padding: 20 }}
          keyExtractor={(item) => item.id}
          data={trainer.categories}
          renderItem={({ item }) => {
            return <Text style={{ fontSize: 15 }}>{item}</Text>;
          }}
        ></FlatList>
      </View>
    </View>
    </SafeAreaView>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function HomeScreen({ route, nav }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
<<<<<<< HEAD
    <View style={{ flex: 1, paddingTop: 0, backgroundColor: "white" }}>
      <AppHeader></AppHeader>
      {/*Modal*/}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={s.centeredView}>
          <View style={s.modalView}>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={s.modalText}>{currentTrainer.name}</Text>
                <Image
                  style={
                    (s.cardProfileImage,
                    { width: 150, height: 150, borderRadius: 20 })
                  }
                  source={currentTrainer.image}
                ></Image>
                <Rating
                  ratingCount={5}
                  startingValue={currentTrainer.rating}
                  readonly
                  imageSize={20}
                />
              </View>
              <View>
                <Text
                  style={(s.modalText, { fontSize: 20, top: 40, padding: 20 })}
                >
                  {'"' + currentTrainer.description + '"'}
                </Text>
                <FlatList
                  style={{ padding: 20, top: 20 }}
                  data={currentTrainer.categories}
                  renderItem={({ item }) => {
                    return <Text style={{ fontSize: 20 }}>{item}</Text>;
                  }}
                ></FlatList>
              </View>
            </View>
            <TouchableHighlight
              style={{ ...s.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={s.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      {/*Modal*/}
=======
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      {}
>>>>>>> 025e60f5156dcd1381b4735dcb924df0be441b0c
      <FlatList
        data={require("../dummy/cards.js")}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                nav.navigate("Trainer", { item });
              }}
            >
              <Trainer trainer={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={{
          backgroundColor: "white",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
}
const s = require("../style/global-style.js");

export default HomeScreen;
