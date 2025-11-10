import React from 'react';
import { View, Text, Button, StyleSheet, Pressable, Image, TouchableOpacity, ScrollView } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import HealthCard from '../components/HealthCard';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Library({ navigation }) {
  return (
    <View>

      <View style={{ flexDirection: 'row',justifyContent:'space-between', alignItems: 'center', padding: 16, }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap:4}}>

        <MaterialCommunityIcons name="waveform" size={24} color="#74C0FC" />
        <Text>HealthCast</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/images/dhruv.jpeg')} style={{ width: 24, height: 24, borderRadius: 12 }} />

        </Pressable>
      </View>
      <Text style={{ marginLeft: 16, fontSize: 24 }}>Library</Text>
      <Text style={{ marginLeft: 16, fontSize: 10 }}>Doctor's approved audio episodes</Text>
      <input type="text" placeholder="Search for symptom or condition" style={{ margin: 16, padding: 6, borderWidth: 1, borderColor: '#ccc', borderRadius: 18, fontWeight: 'lighter' }} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 6,
          marginVertical: 4,
          gap: 2,
        }}
      >

        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f6ff",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 20,
            elevation: 2,
          }}
          onPress={() => console.log("Categories pressed")}
        >

          <Text style={{ marginLeft: 6, color: "#3b82f6", fontWeight: "600" }}>
            Categories
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f6ff",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 20,
            elevation: 2,
          }}
          onPress={() => console.log("Symptoms pressed")}
        >

          <Text style={{ marginLeft: 6, color: "#3b82f6", fontWeight: "600" }}>
            Symptoms
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#f0f6ff",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 20,
            elevation: 2,
          }}
          onPress={() => console.log("Duration pressed")}
        >

          <Text style={{ marginLeft: 6, color: "#3b82f6", fontWeight: "600" }}>
            Duration
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ backgroundColor: "#f5f8ff", flex: 1 }}>
        <HealthCard
          image={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShB7BSK1jQAXc2FJHcENVH5Z6ThGm7lSveNw&s" }}
          title="Body Systems"
          episodes={12}
          date="3 Jun"
          topics={[
            "💨 How your heart works",
            "🫁 Breathing and the lungs",
            "+ 10 more",
          ]}
        />

        <HealthCard
          image={{ uri: "https://png.pngtree.com/png-vector/20220517/ourmid/pngtree-cartoon-medical-supplies-png-image_4563859.png" }}
          title="Medical Conditions"
          episodes={27}
          date="1 Jun"
          topics={[
            "🔥 Managing high blood pressure",
            "🧠 Understanding depression",
            "+ 25 more",
          ]}
        />

        <HealthCard
          image={{ uri: "https://static.vecteezy.com/system/resources/previews/016/142/890/non_2x/stethoscope-icon-in-comic-style-heart-diagnostic-cartoon-illustration-on-isolated-background-medicine-splash-effect-sign-business-concept-vector.jpg" }}
          title="Diagnostics"
          episodes={15}
          date="29 May"
          topics={[
            "📈 Understanding your ECG report",
            "🧲 What an MRI can tell you",
            "+ 10 more",
          ]}
        />
      </ScrollView>
      
    </View>

  );
}
const styles = StyleSheet.create({ container: { flex: 1, justifyContent: 'center', alignItems: 'center' } });
