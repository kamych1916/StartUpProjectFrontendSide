<template>
  <!-- <Map/> -->
  <q-layout>
    <q-img
      style="height: 100vh; position: absolute; z-index: -2123123"
      src="../../assets/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg"
    />
    <div>
      <HeaderComponent></HeaderComponent>
      <div class="flex flex-center" style="height: 100vh;">
        <q-card class="text-brown" style=" border: none; box-shadow: none">
          <q-card-section>
          <!-- <div class="row text-center"> -->

            <div class="gt-sm q-pr-xl q-pl-xl text-weight-bolder text-h6 text-center q-pb-md" style="text-shadow: 1px 1px 1px #ccc" >
              <br />Предложите свои блюда, либо заказажите
              <br />Где угодно. Когда удобно!
              
            </div>
            <div class="lt-md q-pr-md q-pl-md text-weight-bolder text-h6 text-center q-pb-md" style="text-shadow: 1px 1px 1px #ccc">
              <br />Предложите свои блюда, либо заказажите
              <br />Где угодно. Когда удобно!
            </div>
          <!-- </div> -->
          </q-card-section>

          <q-separator inset />
          <q-card-actions class="flex flex-center q-pb-md q-pt-md" style="">
            <q-btn to="/SearchFood" color="brown-5" style="width: 120px" label="Найти" />
            <q-btn color="brown-5" label="Предложить" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-layout>
  
</template>

<script src="./Main.js"></script>

<style lang="scss" src="./Main.scss"></style>


