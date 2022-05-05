<script setup>
const route = useRoute();
let country = route.params.country;
//Country Engine
const { $ce: countryEngine } = useNuxtApp();
// Load the country config
const {refresh: resetCountry} = useAsyncData("loadCountry", async () => await countryEngine.getCountry(country));
//TODO set locale based on country
// Set the country
const loadCountry = newCountry => {
  country = newCountry;
  console.log(`Changing to Country: ${country}`);
  resetCountry();
};
</script>

<template>
  <ComponentKernelNav/>
  <div class="container">
      <NuxtPage/>
  </div>
  <ComponentKernelFooter @change-country="loadCountry" @change-locale="(lang)=> setCountryToRoute('', lang)"/>
  <div class="flag">
    <div></div>
    <div></div>
  </div>
</template>

<style scoped>
.flag {
  display: flex;
  flex-direction: column;
  position: fixed;
  left: -86px;
  bottom: 6px;
  transform: rotateY(0deg) rotate(45deg);
}

.flag :first-child{
  height: 30px;
  width: 240px;
  background: #0057b7;
}
.flag :last-child{
  height: 30px;
  width: 200px;
  background: #ffd700;
}
</style>
