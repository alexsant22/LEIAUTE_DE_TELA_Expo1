import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Cabeçalho</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.boxContainer}>
          <Text style={styles.box}>Caixa 1</Text>
          <Text style={styles.box}>Caixa 2</Text>
          <Text style={styles.box}>Caixa 3</Text>
          <Text style={styles.box}>Caixa 4</Text>
          <Text style={styles.box}>Caixa 5</Text>
          <Text style={styles.box}>Caixa 6</Text>
          <Text style={styles.box}>Caixa 7</Text>
          <Text style={styles.box}>Caixa 8</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Rodapé</Text>
      </View>
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  header: {
    height: 60,
    backgroundColor: "#6200ee",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  boxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  box: {
    width: width * 0.4, // 40% da largura da tela
    height: 100,
    backgroundColor: "#4caf50",
    margin: 10,
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 8,
  },
  footer: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#333",
  },
});
