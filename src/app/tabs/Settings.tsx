import Button from "@/src/component/Button";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { Link } from "expo-router";
import { useContext, useState } from "react";
import { Modal, Switch, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { SettingStyle } from "@/src/style/tabs/settings";
import { colors } from "@/src/style/colors";
import Input from "@/src/component/Input";
import { putUserPassword } from "@/src/service/request/put";

export default function Settings() {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const [passwordIsSelect, setPasswordIsSelect] = useState<boolean>(false);
  const [updatePassword, setUpdatePassword] = useState({
    current: "",
    password: "",
    check: "",
  });

  const HandleUpdatePasseword = async () => {
    if (updatePassword.password === updatePassword.check && userLog) {
      const response = await putUserPassword(userLog.id, updatePassword);
      if (response === 204) {
        setPasswordIsSelect(false);
        setUpdatePassword({ current: "", password: "", check: "" });
      }
    }
  };
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
              <Button text="Éditer le profil" theme="white" />
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={passwordIsSelect}
        statusBarTranslucent
        onRequestClose={() => setPasswordIsSelect(false)}
      >
        <View style={SettingStyle.setting_footer}>
          <View style={SettingStyle.setting_footer_container}>
            <Text style={SettingStyle.setting_footer_text}>
              Modifier le mot de passe
            </Text>
            <View style={SettingStyle.setting_footer_boxInput}>
              <Input
                tools={{
                  value: updatePassword.current,
                  placeholder: "Ancien mot de passe",
                  keyType: "done",
                  secure: true,
                  setOnChange: (value) =>
                    setUpdatePassword({ ...updatePassword, current: value }),
                  style: SettingStyle.setting_footer_input,
                  icon: SettingStyle.input_icon,
                }}
              />
            </View>
            <View style={SettingStyle.setting_footer_boxInput}>
              <Input
                tools={{
                  value: updatePassword.password,
                  placeholder: "Nouveau mot de passe",
                  keyType: "done",
                  secure: true,
                  setOnChange: (value) =>
                    setUpdatePassword({ ...updatePassword, password: value }),
                  style: SettingStyle.setting_footer_input,
                  icon: SettingStyle.input_icon,
                }}
              />
            </View>
            <View
              style={[
                SettingStyle.setting_footer_boxInput,
                { marginBottom: 8 },
              ]}
            >
              <Input
                tools={{
                  value: updatePassword.check,
                  placeholder: "Confirmation mot de passe",
                  keyType: "done",
                  secure: true,
                  setOnChange: (value) =>
                    setUpdatePassword({ ...updatePassword, check: value }),
                  style: SettingStyle.setting_footer_input,
                  icon: SettingStyle.input_icon,
                }}
              />
            </View>
            <Button
              text="Enregister"
              theme="purple"
              click={HandleUpdatePasseword}
            />
            <Button
              text="Annuler"
              theme="white"
              click={() => setPasswordIsSelect(false)}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
