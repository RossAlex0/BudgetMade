import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Input from "../Input";

import { CategoryAccountStyle } from "@/src/style/auth/account";

export default function CategoryAccount() {
  const [category, setcategory] = useState("");
  return (
    <>
      <Text style={CategoryAccountStyle.title}>
        Sélectionnez vos catégories de dépenses
      </Text>
      <View style={CategoryAccountStyle.box}>
        <Input
          tools={{
            value: category,
            placeholder: "Rechercher une catégorie",
            keyType: "search",
            secure: false,
            setOnChange: setcategory,
            style: CategoryAccountStyle.box_input,
          }}
        />
        <Icon
          name="search-outline"
          size={24}
          style={CategoryAccountStyle.box_icon}
        />
      </View>
      <Text style={CategoryAccountStyle.text}>Toutes les catégories</Text>
      <ScrollView style={CategoryAccountStyle.categories}>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        {/* SUPPPP */}
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        <Pressable style={CategoryAccountStyle.categories_element}>
          <Text style={CategoryAccountStyle.categories_element_title}>
            Logement
          </Text>
          <Text style={CategoryAccountStyle.categories_element_text}>
            Loyer, hypothèque, charges...
          </Text>
          <Icon
            name="home-outline"
            size={20}
            style={CategoryAccountStyle.categories_element_icon}
          />
        </Pressable>
        {/* SUPPPPP */}
      </ScrollView>
    </>
  );
}
