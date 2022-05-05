<template>
  <div>
    <h1 class="carrousel-title">{{$t(`carousel.title`)}}</h1>
  <!-- Css Carousel-->
      <div class="carrousel">
      <input type="radio" name="slides" id="radio-1" checked>
      <input type="radio" name="slides" id="radio-2">
      <input type="radio" name="slides" id="radio-3">
      <input type="radio" name="slides" id="radio-4">
      <ul class="slides">
        <li class="slide">
          <div>
            <div class="author">
                <img :src="`assets/images/common/customer1_georgia.jpg`" alt="">
                <h3>{{$t(`carousel.customer1${customerCountry}`)}}</h3>
                <span>{{$t(`carousel.position1${customerCountry}`)}}</span>
            </div>
            <q>
              {{$t(`carousel.description1${customerCountry}`)}}
            </q>
          </div>
        </li>
        <li class="slide">
          <div>
            <div class="author">
              <img :src="`assets/images/common/customer2_georgia.jpg`" alt="">
              <h3>{{$t(`carousel.customer2${customerCountry}`)}}</h3>
              <span>{{$t(`carousel.position2${customerCountry}`)}}</span>
            </div>
            <q>
              {{$t(`carousel.description2${customerCountry}`)}}
            </q>
          </div>
        </li>
        <li class="slide">
          <div>
            <div class="author">
              <img :src="`assets/images/common/customer3_georgia.jpg`" alt="">
              <h3>{{$t(`carousel.customer3${customerCountry}`)}}</h3>
              <span>{{$t(`carousel.position3${customerCountry}`)}}</span>
            </div>
            <q>
              {{$t(`carousel.description3${customerCountry}`)}}
            </q>
          </div>
        </li>
        <li class="slide">
          <div>
            <div class="author">
                  <img :src="`assets/images/common/customer4_georgia.png`" alt="">
                <h3>{{$t(`carousel.customer4${customerCountry}`)}}</h3>
          <span>{{$t(`carousel.position4${customerCountry}`)}}</span>
            </div>
            <q>
              {{$t(`carousel.description4${customerCountry}`)}}
            </q>
          </div>
        </li>
      </ul>
      <div class="slidesNavigation">
        <label for="radio-1" id="dotForRadio-1"></label>
        <label for="radio-2" id="dotForRadio-2"></label>
        <label for="radio-3" id="dotForRadio-3"></label>
        <label for="radio-4" id="dotForRadio-4"></label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "KernelCarousel",
  props: ['conf'],
  computed:{
    customerCountry(){
      if(!this.$ce) return '';
      return this.$ce.country === 'Georgia' ? '_georgia': '';
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 34px;
  text-align: center;
  display: flex !important;
  justify-content: center;
  color: var(--font-color-primary)
}


/*Carousel*/
.carrousel {
  background: #ffffff;
  text-align: center;
  padding: 0 0 2em 0;
  max-width: 850px;
  margin: auto;
  position: relative;
  overflow: hidden;
}
.carrousel h2 {
  margin: 0;
  margin-top: -1.7em;
  padding: 0;
  font-size: 1em;
  text-align: center;
  color: #bbbbbb;
}
.carrousel .slides {
  width: 400%;
  left: 0;
  padding-left: 0;
  padding-top: 1em;
  overflow: hidden;
  list-style: none;
  position: relative;

  -webkit-transition: transform .5s;
  -moz-transition: transform .5s;
  -o-transition: transform .5s;
  transition: transform .5s;
}
.carrousel .slides li {
  width: 25%;
  position: relative;
  float: left;
}
.carrousel li p{
  margin-top: 0;
}
.carrousel li q {
  max-width: 90%;
  margin: auto;
  color: var(--font-color-light);
  font-size: 1.3em;
}
.carrousel li img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 32px;
  vertical-align: middle;
}
.carrousel li span.author h3{
  font-size: 24px;
  margin: 0;
  color: var(--font-color-primary);
}

.carrousel li span.author > span{
  padding-top: 12px;
  font-size: 16px;
  color: var(--font-color-primary);
}

.carrousel li span.author {
  margin-bottom:1em;
  display: flex;
  font-size: 26px;
  flex-direction: column;
  align-items: center;
  color: var(--font-color-light);
}
.carrousel .slidesNavigation {
  display: block;
  list-style: none;
  text-align: center;
  bottom: 1em;
  /*--- Centering trick---*/
  /* Absolute positioning*/
  position: absolute;
  /* Abosulte positioning*/
  width: 104px; /*This width  is the addition of the width of all the navigations dots - So in this case is   104 because the navigation dots are 26px (width:10px and 6px marginleft + 6 px marginright) and there are 4 dots so 4x26=104 */
  left: 50%; /*Centering de element*/
  margin-left: -52px; /*adjusting the centering by applying a negative margin of half of the width*/
}
.carrousel input {
  display: none;
}
.carrousel .slidesNavigation label {
  float: left;
  margin: 6px;
  display: block;
  height: 10px;
  width: 10px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: solid 2px var(--font-color-primary);
  font-size: 0;
}
/* You have to repeat this with each slide
TODO: make it easier with SCSS
25% movement 100/slides-num
*/
#radio-1:checked ~ .slides {
  transform: translateX(0%);
}
#radio-2:checked ~ .slides {
  transform: translateX(-25%);
}
#radio-3:checked ~ .slides {
  transform: translateX(-50%);
}
#radio-4:checked ~ .slides {
  transform: translateX(-75%);
}


.carrousel .slidesNavigation label:hover {
  cursor: pointer;
}
/* You have to repeat this with each slide/dot */
.carrousel #radio-1:checked ~ .slidesNavigation label#dotForRadio-1,
.carrousel #radio-2:checked ~ .slidesNavigation label#dotForRadio-2,
.carrousel #radio-3:checked ~ .slidesNavigation label#dotForRadio-3,
.carrousel #radio-4:checked ~ .slidesNavigation label#dotForRadio-4 {
  background: var(--font-color-primary);
}

@media  (max-width: 480px) {
  .carrousel-title {
    font-size: 28px;
    text-align: center;
  }
  .carrousel li p {
    padding-left: 0.5em;
    padding-right: 0.5em;
  }
  .carrousel li q {
    font-size: 1em;
  }
  .carrousel li img {
    margin-right: 0.25em;
  }
}
</style>
