import {
  View,
  Text,
  Button,
  TextInput,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tulisan}>Hello nama saya budi</Text>
      <Text style={styles.tulisan}>Saya sedang belajar React Native</Text>
      <Text style={styles.tulisan}>Membuat Aplikasi Mobile</Text>
      <Button title="Click Saya" onPress={() => alert("Hello")} />
      <Button title="Keluar" onPress={() => alert("Keluar")} color="red" />
      <TextInput placeholder="Input nama" style={{ color: "white" }} />
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
        }}
        style={{ width: 200, height: 300 }}
      />
      <FlatList
        data={[
          {
            id: 1,
            nama: "Apel",
          },
          {
            id: 2,
            nama: "Jeruk",
          },
          {
            id: 3,
            nama: "Mangga",
          },
          {
            id: 4,
            nama: "Semangka",
          },
        ]}
        renderItem={({ item }) => (
          <Text style={styles.tulisan}>{item.nama}</Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: "orange",
    flex: 1,
  },
  tulisan: {
    color: "red",
    fontSize: 25,
  },
});
