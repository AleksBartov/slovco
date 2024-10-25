import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import React, { useRef } from "react";
import Icon from "../assets/images/slovco-icon.svg";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import ThemedText from "@/components/ThemedText";
import { format } from "date-fns";
import SubscribeModal from "@/components/SubscribeModal";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const Index = () => {
  const subscribeModalRef = useRef<BottomSheetModal>(null);
  const colorScheme = useColorScheme();
  const backgroundColor = Colors[colorScheme ?? "light"].background;
  const textColor = Colors[colorScheme ?? "light"].text;
  const handlePresentsSubscribeModal = () =>
    subscribeModalRef.current?.present();
  return (
    <View style={styles.container}>
      <SubscribeModal ref={subscribeModalRef} />
      <View style={styles.header}>
        <Icon width={100} height={100} />
        <ThemedText style={styles.title}>Словцо</ThemedText>
        <ThemedText style={styles.text}>
          Используй 6 попыток разгадать слово из 5 букв.
        </ThemedText>
      </View>
      <View style={styles.menu}>
        <Link
          href={"/game"}
          asChild
          style={[
            styles.btn,
            { backgroundColor: colorScheme === "light" ? "#000" : "#4a4a4a" },
          ]}
        >
          <TouchableOpacity>
            <Text style={[styles.btnText, styles.primaryText]}>Играть</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity
          style={[
            styles.btn,
            { borderColor: colorScheme === "light" ? "#000" : "#4a4a4a" },
          ]}
        >
          <ThemedText style={styles.btnText}>Войти</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePresentsSubscribeModal}
          style={[
            styles.btn,
            { borderColor: colorScheme === "light" ? "#000" : "#4a4a4a" },
          ]}
        >
          <ThemedText style={styles.btnText}>Подписаться</ThemedText>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <ThemedText style={styles.footerDate}>
          {format(new Date(), "dd.MM.yyyy")}
        </ThemedText>
        <ThemedText style={styles.footerText}>№ 1.0.0</ThemedText>
        <ThemedText style={styles.footerText}>AleksBartov</ThemedText>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    paddingHorizontal: 50,
  },
  header: { justifyContent: "center", alignItems: "center", gap: 10 },
  title: {
    fontSize: 40,
    fontFamily: "FrankRuhlLibre_900Black",
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontFamily: "FrankRuhlLibre_500Medium",
    textAlign: "center",
  },
  menu: { justifyContent: "center", alignItems: "center", gap: 10 },
  btn: {
    justifyContent: "center",
    borderRadius: 30,
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: 170,
  },
  btnText: {
    padding: 14,
    fontSize: 16,
    fontWeight: "semibold",
    color: "#333",
  },
  primaryItem: {
    backgroundColor: "#000",
  },
  primaryText: {
    color: "#fff",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },
  footerDate: {
    fontFamily: "FrankRuhlLibre_500Medium",
    fontWeight: "bold",
    fontSize: 18,
  },
  footerText: { fontFamily: "FrankRuhlLibre_500Medium" },
});
