import { Modal, Switch, Text, View } from "react-native";
import { Link } from "expo-router";
import { useContext, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";
import Button from "@/src/component/Button";
import { PasswordModal, ProfilModal } from "@/src/component/tabs/modal";

import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

import { SettingStyle } from "@/src/style/tabs/settings";
import { colors } from "@/src/style/colors";

export default function Settings() {
  const { userLog } = useContext(UserContext) as UserContextInterface;

  const [passwordIsSelect, setPasswordIsSelect] = useState<boolean>(false);
  const [profilIsSelect, setProfilIsSelect] = useState<boolean>(false);

  return (
    <>
      <View style={SettingStyle.settings}>
        <View style={SettingStyle.settings_header}>
          <Text style={SettingStyle.settings_header_title}>Paramètres</Text>
          <Text style={SettingStyle.settings_header_name}>{userLog?.name}</Text>
          <Text style={SettingStyle.settings_header_email}>
            {userLog?.email}
          </Text>
          <View style={SettingStyle.settings_header_btn}>
            <Link href={"/"} asChild>
              <Button
                text="Éditer le profil"
                theme="white"
                click={() => setProfilIsSelect(true)}
              />
            </Link>
          </View>
        </View>
        <View style={SettingStyle.settings_body}>
          <View style={SettingStyle.settings_body_passw}>
            <Link href={"/"} asChild>
              <Button
                text="Modifier le mot de passe"
                theme="white"
                click={() => setPasswordIsSelect(true)}
              />
            </Link>
            <Icon
              name="chevron-down-outline"
              size={22}
              color={colors.gray_dark}
              style={SettingStyle.settings_body_passwIcon}
            />
          </View>
          <View style={SettingStyle.settings_body_element}>
            <View
              style={[
                SettingStyle.settings_body_elementBlock,
                { borderBottomColor: colors.gray_dark, borderBottomWidth: 0.5 },
              ]}
            >
              <View style={SettingStyle.settings_body_elementBlockB}>
                <Icon
                  size={20}
                  color={colors.primary_color}
                  name="notifications-outline"
                  style={SettingStyle.settings_body_elementBlock_icon}
                />
                <Text style={SettingStyle.settings_body_elementBlock_text}>
                  Notifications
                </Text>
              </View>
              <Switch />
            </View>
            <View style={SettingStyle.settings_body_elementBlock}>
              <View style={SettingStyle.settings_body_elementBlockB}>
                <Icon
                  size={20}
                  color={colors.primary_color}
                  name="contrast-outline"
                  style={SettingStyle.settings_body_elementBlock_icon}
                />
                <Text style={SettingStyle.settings_body_elementBlock_text}>
                  Mode : light mode
                </Text>
              </View>
              <Switch />
            </View>
          </View>
        </View>
      </View>
      <PasswordModal
        passwordIsSelect={passwordIsSelect}
        setPasswordIsSelect={setPasswordIsSelect}
      />
      <ProfilModal
        profilIsSelect={profilIsSelect}
        setProfilIsSelect={setProfilIsSelect}
      />
    </>
  );
}
