import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useCallback, useMemo } from "react";
import { forwardRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import MarkedList from "@jsamr/react-native-li";
export type Ref = BottomSheetModal;
import disc from "@jsamr/counter-style/presets/disc";
import { defaultStyles } from "@/constants/Styles";

const BENEFITS = [
  "Наслаждайся игрой в Словцо, Пчелку-говорушку, Кроссворды и многое другое.",
  "Решай новые задачи каждый день, чтобы сосредоточиться или расслабиться.",
  "Сравни свою стратегию с ботом-Словцо.",
  "Следи за своей статистикой и сравнивай с успехами других.",
];

const SubscribeModal = forwardRef<Ref>((props, ref) => {
  const { width } = useWindowDimensions();
  const snapPoints = useMemo(() => ["90%"], []);

  const { dismiss } = useBottomSheetModal();
  const { bottom } = useSafeAreaInsets();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        opacity={0.3}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
        onPress={dismiss}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      handleComponent={null}
    >
      <View style={styles.contentContainer}>
        <View style={styles.modalBtns}>
          <Link href={"/login"} asChild>
            <TouchableOpacity onPress={() => dismiss()}>
              <Text style={styles.textBtn}>ВОЙТИ</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity onPress={() => dismiss()}>
            <Ionicons name="close" size={28} color={Colors.light.gray} />
          </TouchableOpacity>
        </View>
        <BottomSheetScrollView>
          <Text style={styles.containerHeadline}>
            Неограниченный доступ.{"\n"}Попробуй 7 дней бесплатно.
          </Text>
          <Image
            source={require("@/assets/images/games.png")}
            style={{
              width: "90%",
              alignSelf: "center",
              height: width > 500 ? 80 : 40,
            }}
          />

          <View style={{ marginVertical: 20 }}>
            <MarkedList
              counterRenderer={disc}
              lineStyle={{ paddingHorizontal: 40, gap: 10, marginVertical: 10 }}
            >
              {BENEFITS.map((value, index) => (
                <Text key={index} style={styles.listText}>
                  {value}
                </Text>
              ))}
            </MarkedList>
          </View>
          <Text style={styles.disclaimer}>
            If you subscribe to The New York Times via this app, payment for
            your subscription will be automatically charged to your Apple ID
            account upon your confirmation of purchase with Apple. Your Apple ID
            account will be automatically charged for renewal at the applicable
            rate shown to you at the time of subscription every calendar month
            (for monthly subscriptions) or every year (for annual subscriptions)
            within 24-hours prior to the start of your next billing period. For
            special introductory offers, you will be automatically charged the
            applicable introductory rate shown to you at the time of
            subscription for the stated introductory period and the standard
            rate rate shown to you at the time of subscription thereafter. You
            will be charged in advance. Subscriptions continue automatically
            until you cancel. Cancellation takes effect at the end of your
            current billing period. You can manage and cancel subscriptions in
            your account settings on the App Store. To cancel, please turn off
            auto-renew at lead; 24-hours before the end of your current billing
            period from your iTunes account settings.
          </Text>
        </BottomSheetScrollView>
        <View style={[styles.footer, { paddingBottom: bottom }]}>
          <TouchableOpacity style={defaultStyles.btn}>
            <Text style={defaultStyles.btnText}>
              Попробовать 7 дней бесплатно
            </Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            199 руб/мес. после 7-дневного периода. Отмена в любое время.
          </Text>
        </View>
      </View>
    </BottomSheetModal>
  );
});

export default SubscribeModal;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerHeadline: {
    fontSize: 34,
    padding: 20,
    textAlign: "center",
    fontFamily: "FrankRuhlLibre_900Black",
  },
  modalBtns: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  textBtn: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold",
    fontFamily: "FrankRuhlLibre_900Black",
  },
  listText: {
    fontSize: 14,
    flexShrink: 1,
    color: "#4f4f4f",
  },
  disclaimer: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#484848",
    marginHorizontal: 30,
    lineHeight: 18,
    marginBottom: 20,
  },
  footer: {
    backgroundColor: "#fff",
    marginTop: "auto",
    paddingHorizontal: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    paddingTop: 20,
  },
  footerText: {
    textAlign: "center",
    fontSize: 14,
    color: "#484848",
    paddingTop: 10,
  },
});
