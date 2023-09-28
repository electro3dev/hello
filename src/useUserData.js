// src/useUserData.js
import { ref } from 'vue';

export default function useUserData() {
  const user = ref({
    firstName: "PEPE",
    lastName: "Argento",
    birthdate: "1982-01-23",
    gender: "Masculino",
    email: "email@email.com",
    role: "SuperMegaAdmin",
    lastLogin: "2023-09-08 12:15:56",
    workArea: ["/usr/home", "/home","/","nasa","OMS","White House"]
  });
  const isBirthdateBeforeToday = (birthdate,today) => {
    const monthDifference = today.getMonth() - birthdate.getMonth();
    return monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())
  }

  const calculateAge = () => {
    const birthdate = new Date(user.value.birthdate);
    console.log(birthdate)
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    if (isBirthdateBeforeToday(birthdate,today)) {
      age--;
    }
    return age;
  }

  return {
    user,
    calculateAge,
  }
}
