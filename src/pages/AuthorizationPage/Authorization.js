import HeaderComponent from 'src/components/HeaderComponent.vue'
import { axiosInstance } from 'boot/axios'
export default {
    name: "Authorization",
    components: {
        HeaderComponent
    },
    data: () => ({
        postBody: {
            password: '',
            email: '',
        },
        next_Input: 1,
        btn_Create_Account_Vsb: false,
        btn_Send_To_Mail_Vsb: false,
        isPwd: true,
        step: 1,
        dense: false,
        done1: false,
        done2: false,
    }),
    props: {
        source: String,
    },
    created() {
    },
    methods: {
        loadData(eventData) {
            if(eventData == 1){
                axiosInstance.post('api/sign_in/email/', JSON.stringify(this.postBody.email))
                    .then((response) => {
                        this.data = response.data
                        console.log(this.data)
                        this.done1 = true; this.step = 2
                    })
                    .catch((e) => {
                        this.btn_Create_Account_Vsb=!this.btn_Create_Account_Vsb
                        this.$q.notify({
                            color: 'negative',
                            position: 'bottom',
                            message: 'Введенная вами почта уже существует!',
                            icon: 'report_problem'
                        })
                    })
            }else{
                axiosInstance.post('api/sign_in/password/', JSON.stringify(this.postBody))
                .then((response) => {
                    this.data = response.data
                    console.log(this.data)
                    this.done2 = true
                    this.$router.push('/SearchFood')
                })
                .catch((e) => {
                    this.btn_Send_To_Mail_Vsb=!this.btn_Send_To_Mail_Vsb
                    this.$q.notify({
                        color: 'negative',
                        position: 'bottom',
                        message: 'Введенный вами пароль неверный',
                        icon: 'report_problem'
                    })
                })
            }
        }
        // loadData(previousValue) {
        //     if (this.next_Input == 1) {
        //         console.log(this.next_Input);
        //         this.next_Input++
        //         axiosInstance.post('/api', this.postBody.body)
        //             .then((response) => {
        //                 this.data = response.data
        //                 $refs.stepper.next()
        //             })
        //             .catch((e) => {
        //                 this.$q.notify({
        //                     color: 'negative',
        //                     position: 'bottom',
        //                     message: 'Введенная вами почта уже существует!',
        //                     icon: 'report_problem'
        //                 })
        //             })
        //     } else {
        //         axiosInstance.post('/api', this.postBody)
        //         .then((response) => {
        //             this.data = response.data
        //             $refs.stepper.previous()
        //         })
        //         .catch((e) => {
        //             this.$q.notify({
        //                 color: 'negative',
        //                 position: 'bottom',
        //                 message: 'Введенный вами пароль неверный',
        //                 icon: 'report_problem'
        //             })
        //         })
        //     }
        //     if (previousValue == 2) {
        //         this.next_Input--
        //     }

        // }
    }
};