import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { forwardRef } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export type Ref = BottomSheetModal;

const SubscribeModal = forwardRef<Ref>((props, ref) => {
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
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
      <View>
        <Text>Hi from the first modal!</Text>
      </View>
    </BottomSheetModal>
  );
});

export default SubscribeModal;

const styles = StyleSheet.create({});
