<template>
  <div>
    Hola, me presento. Soy '{{ user.firstName }} {{ user.lastName }}', nací el '{{ user.birthdate }}' y me considero '{{ user.gender }}'.
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
