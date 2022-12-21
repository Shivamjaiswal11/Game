import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React,{useEffect,useState,useCallback,useRef} from "react";
// import { FlashList } from "@shopify/flash-list";
import seven from "../.././assets/gif/item1.png";
import seven1 from "../.././assets/gif/item2.png";
const Item1 = "../.././assets/gif/item1.png";
const Item2 = "../.././assets/gif/item2.png";
const Item3 = "../.././assets/gif/item3.png";
const Item4 = "../.././assets/gif/item4.png";
const Item5 = "../.././assets/gif/item8.png";
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    // title: "../.././assets/gif/item1.png",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    // title: "../.././assets/gif/item2.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    // title: "../.././assets/gif/item1.png",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d63",
    // title: Item2,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d66",
    // title: Item1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d90",
    // title: Item1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d10",
    // title: Item1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d44",
    // title: Item1,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d12",
    // title: Item1,
  },
];
const GameScreen = () => {
  const imageRef = useRef();
  const imageRef1 = useRef();
  const imageRef2 = useRef();
  const imageRef3 = useRef();
  const imageRef4 = useRef();

  const scrollToItem = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * DATA.length);
    let randomIndex1 = Math.floor(Math.random(Date.now()+1) * DATA.length);
    let randomIndex2 = Math.floor((Math.random(Date.now()+2) * DATA.length));
    let randomIndex3 = Math.floor((Math.random(Date.now()+3) * DATA.length));
    let randomIndex4 = Math.floor((Math.random(Date.now()+4) * DATA.length));
    imageRef.current?.scrollToIndex({animated: true, index: "" + randomIndex});
    imageRef1.current?.scrollToIndex({animated: true, index: "" + randomIndex1});
    imageRef2.current?.scrollToIndex({animated: true, index: "" + randomIndex2});
    imageRef3.current?.scrollToIndex({animated: true, index: "" + randomIndex3});
    imageRef4.current?.scrollToIndex({animated: true, index: "" + randomIndex4});
    // imageRef5.current?.scrollToIndex({animated: true, index: "" + randomIndex});
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require("../../assets/bgoriginal.jpg")}
      >
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require("../../assets/editable.png")}
        >
          <View
            style={{
              // flex:1,
              flexDirection: "row",
              width: "75%",
              height: "60%",
              justifyContent: "space-evenly",
            }}
          >
            <FlatList
              // style={{flex:0.2}}
              ref={imageRef}
              pagingEnabled
              scrollEnabled={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View key={index}>
                  {/* <Text>{item.title}</Text> */}
                  <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //   uri:item.title,
                    // }}
                    source={require(Item1)}
                  />
                </View>
              )}
            />
            <FlatList
              //  style={{flex:0.2}}
              // getItemLayout={getItemLayout}
              ref={imageRef1}
              pagingEnabled
              scrollEnabled={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View key={index}>
                  {/* <Text>{item.title}</Text> */}
                  <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //   uri:item.title,
                    // }}
                    source={require(Item2)}
                  />
                </View>
              )}
            />
            <FlatList
              // style={{flex:0.2}}
              // getItemLayout={getItemLayout}
              ref={imageRef2}
              pagingEnabled
              scrollEnabled={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View key={index}>
                  {/* <Text>{item.title}</Text> */}
                  <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //   uri:item.title,
                    // }}
                    source={require(Item3)}
                  />
                </View>
              )}
            />
            <FlatList
              // style={{flex:0.2}}
              // getItemLayout={getItemLayout}
              ref={imageRef3}
              pagingEnabled
              scrollEnabled={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View key={index}>
                  {/* <Text>{item.title}</Text> */}
                  <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //   uri:item.title,
                    // }}
                    source={require(Item4)}
                  />
                </View>
              )}
            />
            <FlatList
              // //  style={{flex:0.2}}
              // getItemLayout={getItemLayout}
              ref={imageRef4}
              pagingEnabled
              scrollEnabled={true}
              data={DATA}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View key={index}>
                  {/* <Text>{item.title}</Text> */}
                  <Image
                    style={{ width: 100, height: 100 }}
                    // source={{
                    //   uri:item.title,
                    // }}
                    source={require(Item5)}
                  />
                </View>
              )}
            />
          </View>
          <View
                 style={[styles.fotter,{top:0}]}
          >
            <TouchableOpacity
                 style={[styles.box,{alignItems:'center',justifyContent:'center',backgroundColor:"#cc8823"}]}>
              <Text
                style={{ fontSize: 20, fontWeight: "500", color: "#431f15" }}
              >
                LOBBY
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 100, height: 40 }}
                source={require("../../assets/walletbg.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 300, height: 60 }}
                source={require("../../assets/buy-coin.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 60, height: 60 }}
                source={require("../../assets/info-icon.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 60, height: 60 }}
                source={require("../../assets/menu-icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View
             style={[styles.fotter,{bottom:0}]}
          >
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../assets/minus-btn.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
            >
              <Text
                style={{ fontSize: 9, fontWeight: "500", color: "#cc8823" }}
              >
                TOTAL BET
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../assets/plus-btn.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.box}
            >
              <Text
                style={{ fontSize:9, alignItems:'center',fontWeight: "500", color: "#cc8823" }}
              >
                WIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{ width: 50, height: 50 }}
                source={require("../../assets/max-bet.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={scrollToItem}>
              <Image
                style={{ width: 120, height: 50 }}
                source={require("../../assets/spin-btn.png")}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff2",
  },
  imgBackground: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fotter:{
    backgroundColor: "#956147",
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "absolute",
    alignItems: "center",
    // bottom: 0,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  box:{
    height:50,
                width:100,
                backgroundColor: "#431f15",
                borderRadius: 10,
                borderWidth: 3,
                borderColor: "#623927",alignItems:'center'
  }
});
