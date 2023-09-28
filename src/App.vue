<template>
  <div id="app">
    <h1>User Information</h1>
    
    <section>
      <h2>Basic Presentation</h2>
      <BasicPresentation />
    </section>
    
    <section>
      <h2>User Details</h2>
      <UserDetails />
    </section>
    
    <section>
      <h2>User Summary</h2>
      <UserSummary />
    </section>
  </div>
</template>

<script>
import BasicPresentation from '@/components/BasicPresentation.vue';
import UserDetails from '@/components/UserDetails.vue';
import UserSummary from '@/components/UserSummary.vue';

export default {
  name: 'App',
  components: {
    BasicPresentation,
    UserDetails,
    UserSummary
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

section {
  margin-bottom: 20px;
}
</style>