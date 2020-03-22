<template>
  <!-- <Map/> -->
  <q-layout>
    <HeaderComponent></HeaderComponent>
    <div class="flex flex-center" style="height: 100vh ">
      <q-stepper v-model="step" flat active-color="brown" done-color="secondary" animated>
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
          <div class="text-right" v-show="btn_Authorization_Vsb">
            <q-btn to="/Authorization" size="sm" no-caps flat style="color: red">Авторизоваться</q-btn>
          </div>
          <q-stepper-navigation>
            <q-btn @click="loadData(1)" no-caps color="brown" label="Продолжить" />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="2" title="Ввод Фамилии" icon="edit" :done="done2">
          <q-input
            class="q-pb-md"
            style="width: 100%"
            placeholder="Введите Фамилию"
            color="brown"
            label-color="brown"
            outlined
            v-model="postBody.surname"
          >
            <template v-slot:append>
              <q-icon name="account_box" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn @click="loadData(2)" no-caps color="brown" label="Продолжить" />
            <q-btn flat color="brown" @click="step = step - 1; done2 = false" label="Вернуться" class="q-ml-sm" no-caps />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="3" title="Ввод Имени" icon="edit" :done="done3">
          <q-input
            class="q-pb-md"
            style="width: 100%"
            placeholder="Введите Имя"
            color="brown"
            label-color="brown"
            outlined
            v-model="postBody.name"
          >
            <template v-slot:append>
              <q-icon name="account_box" />
            </template>
          </q-input>
          <q-stepper-navigation>
            <q-btn @click="loadData(3)" no-caps color="brown" label="Продолжить" />
            <q-btn flat color="brown" @click="step = step - 1; done3 = false" label="Вернуться" class="q-ml-sm" no-caps />
          </q-stepper-navigation>
        </q-step>

        <q-step :name="4" title="Ввод пароля" icon="edit" :done="done4">
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
            <q-btn @click="sendToMail()" size="sm" no-caps flat style="color: red">Отпавить новый пароль на почту</q-btn>
          </div>
          <q-stepper-navigation>
            <q-btn @click="loadData(4)" no-caps color="brown" label="Зарегистрироваться" />
            <q-btn flat color="brown" @click="step = step - 1" label="Вернуться" class="q-ml-sm" no-caps />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </q-layout>
</template>

<script src="./Registration.js"></script>

<style lang="scss" src="./Registration.scss"></style>
