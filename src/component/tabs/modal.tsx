import { Modal, View, Text } from "react-native";
import { useContext, useState } from "react";

import Input from "../Input";
import Button from "../Button";

import { putUserPassword, putUserProfil } from "@/src/service/request/put";
import { getUserById } from "@/src/service/request/get";
import {
  LogoutModaleInterface,
  PasswordModalInterface,
  ProfilModaleInterface,
} from "@/src/service/type/tabsType/modal";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

import { SettingStyle } from "@/src/style/tabs/settings";
import { destroyDataStorage } from "@/src/service/request/storage";
import { router } from "expo-router";

export function PasswordModal({
  passwordIsSelect,
  setPasswordIsSelect,
}: PasswordModalInterface) {
  const { userLog } = useContext(UserContext) as UserContextInterface;

  const [updatePassword, setUpdatePassword] = useState({
    current: "",
    password: "",
    check: "",
  });

  const HandleUpdatePasseword = async () => {
    if (updatePassword.password === updatePassword.check && userLog) {
      const response = await putUserPassword(
        parseInt(userLog.id),
        updatePassword
      );
      if (response === 204) {
        setPasswordIsSelect(false);
        setUpdatePassword({ current: "", password: "", check: "" });
      }
    }
  };

  return (
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
            style={[SettingStyle.setting_footer_boxInput, { marginBottom: 16 }]}
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
  );
}

export function ProfilModal({
  profilIsSelect,
  setProfilIsSelect,
}: ProfilModaleInterface) {
  const { userLog, setUserLog } = useContext(
    UserContext
  ) as UserContextInterface;

  const [updateProfil, setUpdateProfil] = useState({
    name: userLog?.name || "",
    email: userLog?.email || "",
  });

  const HandleUpdateProfil = async () => {
    if (updateProfil.name && updateProfil.email && userLog) {
      const response = await putUserProfil(parseInt(userLog.id), updateProfil);
      if (response === 204) {
        await getUserById(parseInt(userLog.id), setUserLog);
        setProfilIsSelect(false);
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={profilIsSelect}
      statusBarTranslucent
      onRequestClose={() => setProfilIsSelect(false)}
    >
      <View style={SettingStyle.setting_footer}>
        <View style={SettingStyle.setting_footer_containerProfil}>
          <Text style={SettingStyle.setting_footer_text}>Éditer le profil</Text>
          <View style={SettingStyle.setting_footer_boxInput}>
            <Input
              tools={{
                value: updateProfil.name,
                placeholder: "Votre nouveau nom",
                keyType: "done",
                secure: false,
                setOnChange: (value) =>
                  setUpdateProfil({ ...updateProfil, name: value }),
                style: SettingStyle.setting_footer_input,
              }}
            />
          </View>
          <View
            style={[SettingStyle.setting_footer_boxInput, { marginBottom: 16 }]}
          >
            <Input
              tools={{
                value: updateProfil.email,
                placeholder: "Votre nouvel adresse Email",
                keyType: "done",
                keyboardType: "email-address",
                secure: false,
                setOnChange: (value) =>
                  setUpdateProfil({ ...updateProfil, email: value }),
                style: SettingStyle.setting_footer_input,
              }}
            />
          </View>
          <Button text="Enregister" theme="purple" click={HandleUpdateProfil} />
          <Button
            text="Annuler"
            theme="white"
            click={() => setProfilIsSelect(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

export function LogoutModal({
  logoutIsSelect,
  setLogoutIsSelect,
}: LogoutModaleInterface) {
  const { setUserLog } = useContext(UserContext) as UserContextInterface;

  const HandleLogout = async () => {
    await destroyDataStorage();
    setUserLog(null);
    router.push("/auth/");
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={logoutIsSelect}
      statusBarTranslucent
      onRequestClose={() => setLogoutIsSelect(false)}
    >
      <View style={SettingStyle.setting_footer}>
        <View style={SettingStyle.setting_footer_containerLogout}>
          <Text style={SettingStyle.setting_footer_text}>
            Vous allez être déconnecté
          </Text>

          <Button text="Se déconnecter" theme="purple" click={HandleLogout} />
          <Button
            text="Annuler"
            theme="white"
            click={() => setLogoutIsSelect(false)}
          />
        </View>
      </View>
    </Modal>
  );
}
