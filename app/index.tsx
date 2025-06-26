  import { View, Text, TouchableOpacity, StatusBar } from "react-native";
  import React from "react";
  import { Stack } from "expo-router";

  import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
  import ScreenWrapper from "@/components/ScreenWrapper";
  import Card from "@/components/Card";
  import Title from "@/components/Title";
  import MainCard from "@/components/cards/MainCard";

  export default function index() {
    return (
      <ScreenWrapper title="Your Party">
        <MainCard
          title="Vice Awakens"
          participating={3}
          imgUrl={require('../assets/images/dragon.webp')}
          name="Vice, The Shadow Wyrm"
          hp={1224}
          damageDone={21}
        />

        <Title>MEMBERS</Title>

        <Card>
          <Text>index</Text>
        </Card>

        <Card>
          <Text>index</Text>
        </Card>
      </ScreenWrapper>
    );
  }
