<template>
   <div class="form-wrpapper">
        <h1 class="main-header">Форма создания клиента</h1>
        <form @submit.prevent="submitFrom">
        <div class="form-name-attributes">
            <inputForm 
            title="Имя*"
            type="text"
            :inputcls="{invalid: ($v.name.$dirty && !$v.name.required) || (!$v.name.alpha)}"
            :condition="$v.name.$dirty && !$v.name.required"
            :condition2="!$v.name.alpha"
            text="Это обязательное поле!"
            text2="Недопустимые символы!"
            v-model="name"
            ></inputForm>

            <inputForm 
            title="Фамилия*"
            type="text"
            :inputcls="{invalid: ($v.surname.$dirty && !$v.surname.required) || (!$v.surname.alpha)}"
            :condition="$v.surname.$dirty && !$v.surname.required"
            :condition2="!$v.surname.alpha"
            text="Это обязательное поле!"
            text2="Недопустимые символы!"
            v-model="surname"
            ></inputForm>

            <inputForm 
            title="Отчество"
            type="text"
            :inputcls="{invalid: ($v.fathername.$dirty && !$v.fathername.required) || (!$v.fathername.alpha)}"
            :condition="$v.fathername.$dirty && !$v.fathername.required"
            :condition2="!$v.fathername.alpha"
            text="Это обязательное поле!"
            text2="Недопустимые символы!"
            v-model="fathername"
            ></inputForm>

            <inputForm 
            title="Дата рождения*"
            type="date"
            v-model="birthday"
            ></inputForm>

            <inputForm 
            title="Номер телефона*"
            type="number"
            placeholder="+7(777)777-77-77" 
            :inputcls="{invalid: ($v.phone.$dirty && !$v.phone.required) || ($v.phone.$dirty && !$v.phone.minLength) || ($v.phone.$dirty && !$v.phone.maxLength)}"
            :condition="$v.phone.$dirty && !$v.phone.required"
            :condition2="($v.phone.$dirty && !$v.phone.minLength)|| ($v.phone.$dirty && !$v.phone.maxLength)"
            text="Это обязательное поле!"
            text2="Телефон в формате +7(777)777-77-77"
            v-model="phone"
            ></inputForm>

            <checkboxAttr title="Не получать смс" class="sms_denial" type="checkbox" v-model="checked"></checkboxAttr>

            <SelectAttribute title="Пол" v-model="sex">
                <OptionAttr 
                v-for="item in maleorfemale"
                v-bind:item="item"
                v-bind:key="item.value">
                {{item.text}}
            </OptionAttr>
            </SelectAttribute>
            
            <SelectAttribute 
            title="Группа клиентов*" 
            v-model="groupofclient"
            :selectcls="{invalid: ($v.groupofclient.$dirty && !$v.groupofclient.required)}"
            :condition="$v.groupofclient.$dirty && !$v.groupofclient.required"
            text="Это обязательное поле!"
            >
                <OptionAttr 
                v-for="item in clientgroups"
                v-bind:item="item"
                v-bind:key="item.value">
                {{item.text}}
            </OptionAttr>
            </SelectAttribute>
            
            <SelectAttribute title="Лечащий врач" v-model="doctor">
                <OptionAttr 
                    v-for="item in doctors"
                    v-bind:item="item"
                    v-bind:key="item.value">
                {{item.text}}
            </OptionAttr>
            </SelectAttribute>
        </div>
        <div class="address">
            <inputForm 
            title="Индекс"
            type="number"
            v-model="post_index"
            :inputcls="{invalid: (!$v.post_index.integer)}"
            :condition="!$v.post_index.integer"
            text="Недопустимые символы!"
            ></inputForm>

            <inputForm 
            title="Страна"
            type="text"
            v-model="country"
            :inputcls="{invalid: (!$v.country.alpha)}"
            :condition="!$v.country.alpha"
            text="Недопустимые символы!"
            ></inputForm>

            <inputForm 
            title="Область"
            type="text"
            v-model="region"
            :inputcls="{invalid: (!$v.region.alpha)}"
            :condition="!$v.region.alpha"
            text="Недопустимые символы!">
            ></inputForm>

            <inputForm 
            title="Город*"
            type="text"
            v-model="city"
            :inputcls="{invalid: ($v.city.$dirty && !$v.city.required) || (!$v.city.alpha)}"
            :condition="$v.city.$dirty && !$v.city.required"
            :condition2="!$v.city.alpha"
            text="Это обязательное поле!"
            text2="Недопустимые символы!">
            ></inputForm>


            <inputForm 
            title="Улица"
            type="text"
            v-model="street"
            :inputcls="{invalid: (!$v.street.alpha)}"
            :condition="!$v.street.alpha"
            text="Недопустимые символы!"
            ></inputForm>

            <inputForm 
            title="Дом"
            type="number"
            v-model="house"
            :inputcls="{invalid:(!$v.house.integer)}"
            :condition="!$v.house.integer"
            text="Недопустимые символы!">
            ></inputForm>
        </div>
        <div class="doctypes">
            <SelectAttribute 
            title="Тип документа" 
            v-model="doctype"
            :inputcls="{invalid: ($v.doctype.$dirty && !$v.doctype.required)}"
            :condition="$v.doctype.$dirty && !$v.doctype.required" 
            text="Это обязательное поле!">
                <OptionAttr 
                    v-for="item in doctypes"
                    v-bind:item="item"
                    v-bind:key="item.value">
                {{item.text}}
            </OptionAttr>
            </SelectAttribute>

            <inputForm 
            title="Серия"
            type="number"
            v-model="series"
            :inputcls="{invalid: ($v.seria.$dirty && !$v.seria.maxLength) || ($v.seria.$dirty && !$v.seria.minLength)}" 
            :condition="($v.seria.$dirty && !$v.seria.maxLength) || ($v.seria.$dirty && !$v.seria.minLength)"
            text="Серия должна содержать 4 цифры!"
            ></inputForm>

            <inputForm 
            title="Номер"
            type="number"
            v-model="docnum"
            :inputcls="{invalid: ($v.docnum.$dirty && !$v.docnum.maxLength) || ($v.docnum.$dirty && !$v.docnum.minLength)}"
            :condition="($v.docnum.$dirty && !$v.docnum.maxLength) || ($v.docnum.$dirty && !$v.docnum.minLength)"
            text="Номер должен содержать 6 цифр!"
            ></inputForm>

            <inputForm 
            title="Кем выдан"
            type="text"
            v-model="prod"
            :inputcls="{invalid: (!$v.prod.alpha)}"
            :condition="!$v.prod.alpha"
             text="Недопустимые сиволы!"
            ></inputForm>

            <inputForm 
            title="Дата выдачи"
            type="date"
            v-model=" passportDate"
            :inputcls="{invalid: ($v.passportDate.$dirty && !$v.passportDate.required)}"
            :condition="$v.passportDate.$dirty && !$v.passportDate.required"
            text="Это обязательное поле!"
            ></inputForm>
        </div>
        <ButtonSubmit title="Создать клиента">
        </ButtonSubmit>
    </form>
    <success title="Новый клиент успешно создан!" :callback="popupClose"></success>
   </div>
</template>

<script>
import {minLength, maxLength, required, integer, alpha} from 'vuelidate/lib/validators';
import ButtonSubmit from './ButtonSubmit.vue'
import inputForm from './FormAttribute.vue'
import SelectAttribute from './SelectAttribute.vue'
import OptionAttr from './OptionAttr.vue'
import checkboxAttr from './checkboxAttr.vue'
import success from './success.vue'



export default {
    data: function () {
      return {
        name: '',
        surname: '',
        fathername: '',
        birthday: '',
        phone: '',
        sex: '',
        doctor: '',
        groupofclient:'',
        checked: false,
        post_index: '',
        country:'',
        region: '',
        city: '',
        street: '',
        house: '',
        doctype: '',
        series: '',
        docnum: '',
        prod: '',
        passportDate: '',
        maleorfemale:[
             {text: 'Мужской', value: 'male'},
             {text: 'Женский', value: 'female'}
        ],
        clientgroups:[
             {text: 'VIP', value: 'vip'},
             {text: 'Проблемные', value: 'problem'},
             {text: 'ОМС', value: 'insuarance'}
        ],
         doctors:[
             {text: 'Захаров', value: 'zakharov'},
             {text: 'Чернышева', value: 'chernyshova'},
             {text: 'Сидорова', value: 'sidorova'}
        ],
        doctypes:[
             {text: 'Паспорт', value: 'passport'},
             {text: 'Водительское удостоверение', value: 'driver_license'},
             {text: 'Свидетельство о рождении', value: 'born_evidence'}
        ]
        }
    },  
    components: {
        ButtonSubmit,
        inputForm,
        OptionAttr,
        SelectAttribute,
        checkboxAttr,
        success
    },
    validations : {
    name: {
      alpha: val => /^[а-яё]*$/i.test(val),
      required
    },
    surname: {
      alpha: val => /^[а-яё]*$/i.test(val),
      required
    },
    fathername: {
      alpha: val => /^[а-яё]*$/i.test(val),
      required
    },
    phone: {
      integer,
      required,
      maxLength: maxLength(11),
      minLength: minLength(11),
    },
    seria: {
      integer,
      maxLength: maxLength(4),
      minLength: minLength(4),
    },
    docnum: {
      integer,
      maxLength: maxLength(6),
      minLength: minLength(6)
    },
    post_index: {
      integer
    },
    city: {
      alpha: val => /^[а-яё]*$/i.test(val),
      required
    },
    country: {
        alpha: val => /^[а-яё]*$/i.test(val),
    },
    region: {
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    street: {
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    house: {
      integer
    },
    passportDate: {
      required,
    },
    prod: {
      alpha: val => /^[а-яё]*$/i.test(val)
    },
    groupofclient: {
      required,
    },
    doctype: {
      required
    }
    },
    methods: {
     submitFrom() {
        if(this.$v.$invalid){
            this.$v.$touch()
            return
        }
         let formData = {
            name: this.name,
            surname: this.surname,
            fathername: this.fathername,
            birthday: this.birthday,
            phone: this.phone,
            sex: this.sex,
            doctor: this.doctor,
            groupofclient:this.groupofclient,
            checked: this.checked,
            post_index: this.post_index,
            country:this.country,
            region: this. region,
            city: this.city,
            street: this.street,
            house: this.house,
            doctype: this.doctype,
            series: this.series,
            docnum: this.docnum,
            prod: this.prodOrg,
            passportDate: this.passportDate,
            }
            console.log(formData);
            const successMessage = document.querySelector('.overlay')
            successMessage.classList.add('active')
        },
        popupClose () {
           const successMessage = document.querySelector('.overlay')
           successMessage.classList.remove('active')
            this.name = '',
            this.surname = '',
            this.fathername = '',
            this.birthday = '',
            this.phone = '',
            this.sex = '',
            this.doctor = '',
            this.groupofclient = '',
            this.checked = '',
            this.post_index = '',
            this.country = '',
            this.region = '',
            this.city = '',
            this.street = '',
            this.house = '',
            this.doctype = '',
            this.series = '',
            this.docnum = '',
            this.prod = '',
            this.passportDate = ''         
        }
        
    }
}
</script>

<style lang="scss">
    label {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin-top: 2rem;
    }
    .invalid {
        border-bottom: 1px solid red;
    }
    .active {
        display: block;
    }
    .main-header {
        text-align: center;
    }
    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 80rem;
        margin: auto;
        border: 1px solid #000;
        border-radius: 1rem;
        .form-name-attributes {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            .sms_denial {
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
                align-items: center;
            }
        }
        .addBtn{
            flex-basis: 100%;
            left: 50%;
            display: flex;
            justify-content: center;
            button {
                padding: 1rem 4rem;
                margin: auto;
                margin-top: 3rem;
                margin-bottom: 3rem;
            }
        }
     }
     @media screen and (max-width: 650px){
    .form-name-attributes {
        width: 80%;
    }
    .address{
        width: 80%;
    }
    .doctypes{
        width: 80%;
    }
}
</style>