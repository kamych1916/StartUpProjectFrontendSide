import HeaderComponent from 'src/components/HeaderComponent.vue'
import { axiosInstance } from 'boot/axios'
export default {
    name: "Registration",
    components: {
        HeaderComponent
    },
    data: () => ({
        postBody: {
            password: '',
            email: '',
            name: '',
            surname: '',
        },
        isPwd: true,
        step: 1,
        dense: false,
        next_Input: 1,
        stepper: '',
        done1: false,
        done2: false,
        done3: false,
        done4: false,
        btn_Authorization_Vsb: false,
        btn_Send_To_Mail_Vsb: false
    }),
    props: {
        source: String,
    },
    created() {
    },
    methods: {
        loadData(eventData) {
            if (eventData == 1) {
                console.log('kek')
                axiosInstance.post('/api/sign_up/email/', JSON.stringify(this.postBody.email))
                    .then((response) => {
                        this.data = response.data
                        this.done1 = true; this.step = 2
                    })
                    .catch(() => {
                        this.btn_Authorization_Vsb = !this.btn_Authorization_Vsb
                        this.$q.notify({
                            color: 'negative',
                            position: 'bottom',
                            message: 'Пользователь с данным почтовым адрес уже существует!',
                            icon: 'report_problem'
                        })
                    })
            } else if (eventData == 2) {
                this.done2 = true; this.step = 3
            } else if (eventData == 3) {
                this.done3 = true; this.step = 4
            } else {
                axiosInstance.post('/api/sign_up/password/', JSON.stringify(this.postBody))
                    .then((response) => {
                        this.data = response.data
                        this.$router.push('/Authorization')
                    })
                    .catch(() => {
                        this.btn_Send_To_Mail_Vsb = !this.btn_Send_To_Mail_Vsb
                        this.$q.notify({
                            color: 'negative',
                            position: 'bottom',
                            message: 'Сервер не отвечает.. Попробуйте позже!',
                            icon: 'report_problem'
                        })
                    })
            }
        },

        sendToMail() {

            this.$q.notify({
                color: 'positive',
                position: 'bottom',
                message: 'Новый пароль был отправлен к вам на почту!',
                icon: 'done'
            })
            this.$router.push('/')
        }
    }
};