<template>
    <div>
      {{ user.firstName }}, tienes {{ age }} años, eres {{ user.role }} del sistema. Esta es tu área de trabajo:
      <ul>
        <li v-for="area in user.workArea" :key="area">{{ area }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import useUserData from "@/useUserData";
  
  export default {
    setup() {
      const { user, calculateAge } = useUserData();
      const age = calculateAge();
      console.log(age)
      return { user, age };
    }
  };
  </script>
  