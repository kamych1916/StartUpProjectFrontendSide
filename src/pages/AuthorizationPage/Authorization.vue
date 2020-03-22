<template>
  <!-- <Map/> -->
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <div class="flex flex-center" style="height: 100vh ">
      <!-- <q-card class="text-white q-pa-md text-center bg-brown">
        <div class="text-center q-pt-xl q-pb-md">
          <span class="gt-sm q-pa-xl text-weight-bolder text-h6">Авторизация</span>
          <span class="lt-md q-pa-md text-weight-bolder text-h6">Авторизация</span>
        </div>
        <div class="q-pl-md q-pr-md q-pb-xl" style="width: 450px">
          <div class="row">
            <q-input
              class="q-pb-md"
              style="width: 100%"
              color="white"
              dark
              type="email"
              v-model="email"
              placeholder="Введите эл. адрес"
            >
              <template v-slot:append>
                <q-icon name="mail" />
              </template>
            </q-input>
          </div>
          <div class="row">
            <q-input
              class="q-pb-md"
              style="width: 100%"
              color="white"
              dark
              :type="isPwd ? 'password' : 'text'"
              v-model="password"
              placeholder="Введите пароль"
              :dense="dense"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="row flex justify-between">
            <div class="q-pt-md text-h8 ">
              <q-btn no-caps>Войти</q-btn>
              <q-spacer></q-spacer>
              <span>sdfsdf</span>
            </div>
          </div>
        </div>
      </q-card>-->
      <q-stepper
        v-model="step"
        flat
        active-color="brown"
        done-color="secondary"
        animated
      >
        <q-step :name="1" title="Ввод электронного адресса" icon="edit" :done="done1">
          <q-input
            class="q-pb-md"
            style="width: 100%"
            color="brown"
            label-color="brown"
            type="email"
            v-model="postBody.email"
            placeholder="Введите эл. адрес"
            outlined
          >
            <template v-slot:append>
              <q-icon name="mail" />
            </template>
          </q-input>
          <div class="text-right" v-show="btn_Create_Account_Vsb">
            <q-btn to="/Registration" size="sm" no-caps flat style="color: red">Cоздать аккаунт</q-btn>
          </div>
          <q-stepper-navigation>
            <q-btn
              @click="loadData(1)"
              no-caps
              color="brown"
              label="Продолжить"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="2" title="Ввод пароля" icon="edit" >
          <q-input
            class="q-pb-md"
            style="width: 100%"
            :type="isPwd ? 'password' : 'text'"
            v-model="postBody.password"
            placeholder="Введите пароль"
            color="brown"
            label-color="brown"
            outlined
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <div class="text-right" v-show="btn_Send_To_Mail_Vsb">
            <q-btn to="/" size="sm" no-caps flat style="color: red">Отпавить новый пароль на почту</q-btn>
          </div>
          <q-stepper-navigation>
            <q-btn @click="loadData(2)" no-caps color="brown" label="Войти" />
            <q-btn
              flat
              color="brown"
              @click="step = 1"
              label="Вернуться"
              class="q-ml-sm"
              no-caps
            />
          </q-stepper-navigation>
        </q-step>

        <!-- <template v-slot:navigation>
          <q-stepper-navigation>
            <q-btn
              @click="loadData(1)"
              color="brown"
              :label="step === 2 ? 'Войти' : 'Продолжить'"
              no-caps
            />
            <q-btn
              v-if="step > 1"
              flat
              color="brown"
              @click="loadData(2)"
              label="Вернуться"
              class="q-ml-sm"
              no-caps
            />
          </q-stepper-navigation>
        </template>-->
      </q-stepper>
    </div>
  </q-layout>
</template>

<script src="./Authorization.js"></script>

<style lang="scss" src="./Authorization.scss"></style>
