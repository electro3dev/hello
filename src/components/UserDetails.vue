<template>
    <div>
      <div>Mis datos de Usuario son:</div>
      <div>Mi nombre: {{ user.firstName }}</div>
      <div>Mi apellido: {{ user.lastName }}</div>
      <div>Mi cumpleaños: {{ user.birthdate }}</div>
      <div>Sexo: {{ user.gender }}</div>
      <div>Mi Email: {{ user.email }}</div>
      <div>Role: {{ user.role }}</div>
      <div>Accediste la última vez: {{ user.lastLogin }}</div>
    </div>
  </template>
  
  <script>
  import useUserData from "@/useUserData";
  
  export default {
    setup() {
      const { user } = useUserData();
      return { user };
    }
  };
  </script>
  