import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, Switch } from "react-native";
import { useDispatch } from "react-redux";

import styles from "./styles";
import setI18nConfig, { translate } from "../../../i18n";
import { themeActions } from "../../../redux/themes";

function Auth() {
  const [isActive, changeTheme] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const themeName = isActive ? "dark" : "light";
    dispatch(themeActions.changeThemeMode(themeName));
    setI18nConfig({ languageTag: isActive ? "ru" : "en", isRTL: false });
  }, [isActive]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{translate("hello")}</Text>
      <Switch value={isActive} onValueChange={() => changeTheme(!isActive)} />
    </SafeAreaView>
  );
}

export default Auth;
