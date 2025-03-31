<template>
    <div class="container">
        <h1>Контакт</h1>
        <form id="contact-form" @submit.prevent="handleSubmit">
            <div class="alert alert-danger" v-if="errors.length">
                <div v-for="(error, index) in errors" :key="index">{{ error }}</div>
            </div>

            <div class="mb-3">
                <label for="fullname" class="form-label">Фамилия Имя Отчество</label>
                <input type="text" class="form-control" v-model="fullname" id="fullname" placeholder="Введите ФИО">
                <div class="invalid-feedback" v-if="!isValidFullname">Поле ФИО должно быть заполнено и состоять из 3 слов</div>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Ваш email</label>
                <input type="email" class="form-control" v-model="email" id="email" placeholder="your@email.ru">
                <div class="invalid-feedback" v-if="!isValidEmail">Поле email: неверно </div>
            </div>

            <div class="mb-3">
                <label for="phone" class="form-label">Ваш телефон</label>
                <input type="tel" class="form-control" v-model="phone" id="phone" placeholder="+79781112233">
                <div class="invalid-feedback" v-if="!isValidPhone">Телефон: неверно</div>
            </div>

            <div class="mb-3">
                <label for="birthday" class="form-label">Ваша дата рождения</label>
                <input type="date" class="form-control" v-model="birthday" id="birthday">
                <div class="invalid-feedback" v-if="!isValidBirthday">Дата рождения: неверно</div>
            </div>

            <div class="mb-3">
                <label class="form-label">Ваш пол</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="sex" value="male" id="sex-option-male">
                    <label class="form-check-label" for="sex-option-male">Мужской</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" v-model="sex" value="female" id="sex-option-female">
                    <label class="form-check-label" for="sex-option-female">Женский</label>
                </div>
            </div>

            <div class="mb-3">
                <label for="age" class="form-label">Ваш возраст</label>
                <select v-model="age" class="form-select">
                    <option value="до 18 лет">До 18 лет</option>
                    <option value="18-29 лет">18-29 лет</option>
                    <option value="30-50 лет">30-50 лет</option>
                    <option value="старше 50 лет">Старше 50 лет</option>
                </select>
            </div>

            <div class="mb-3">
                <label for="message" class="form-label">Сообщение</label>
                <textarea class="form-control" v-model="message" id="message" placeholder="Чё хотите, то и пишите"></textarea>
                <div class="invalid-feedback" v-if="!isValidMessage">Обязательно заполнить!</div>
            </div>

            <div class="mb-3" id="contact-form-buttons">
                <button type="reset" class="btn btn-danger" @click="resetForm">Очистить</button>
                <button type="submit" class="btn btn-success" :disabled="errors.length > 0">Отправить</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data() {
    return {
      fullname: '',
      email: '',
      phone: '',
      birthday: '',
      sex: null,
      age: 'до 18 лет',
      message: '',
      errors: [],
    };
  },
  computed: {
    isValidFullname() {
      const words = this.fullname.trim().split(/\s+/); // Разделяем по пробелам
      return words.length === 3 && this.fullname.trim() !== '';
    },
    isValidEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.email);
    },
    isValidPhone() {
      const phoneRegex = /^\+7\d{10}$/;
      return phoneRegex.test(this.phone);
    },
    isValidBirthday() {
      return this.birthday !== ''; // Проверяем, что дата выбрана
    },
    isValidMessage() {
      return this.message.trim() !== '';
    },
  },
  watch: {
    // Обновляем массив ошибок при изменении любого поля.
    fullname() { this.validateForm(); },
    email() { this.validateForm(); },
    phone() { this.validateForm(); },
    birthday() { this.validateForm(); },
    sex() { this.validateForm(); },
    age() { this.validateForm(); },
    message() { this.validateForm(); }
  },
  mounted() {
    this.validateForm(); // Проверяем при загрузке компонента
  },
  methods: {
    handleSubmit() {
      this.validateForm();
      if (this.errors.length === 0) {
        // Отправка формы
        alert('Форма отправлена!'); // Замените на реальную отправку
        this.resetForm();
      } else {
        alert('Форма заполнена некорректно!');
      }
    },
    validateForm() {
      this.errors = []; // Очищаем массив ошибок перед каждой валидацией

      if (!this.isValidFullname) {
        this.errors.push('Поле ФИО должно быть заполнено и состоять из 3 слов');
      }
      if (!this.isValidEmail) {
        this.errors.push('Поле email: неверно');
      }
      if (!this.isValidPhone) {
        this.errors.push('Телефон: неверно');
      }
      if (!this.isValidBirthday) {
        this.errors.push('Дата рождения: неверно');
      }
      if (!this.sex) {
        this.errors.push('Необходимо выбрать пол');
      }
      if (!this.isValidMessage) {
        this.errors.push('Обязательно заполнить сообщение!');
      }
    },
    resetForm() {
      this.fullname = '';
      this.email = '';
      this.phone = '';
      this.birthday = '';
      this.sex = null;
      this.age = 'до 18 лет';
      this.message = '';
      this.errors = [];
    },
  },
};
</script>

<style scoped>
/*  Стили  (необязательно, но рекомендуется) */
.invalid-feedback {
  display: block; /*  Отображаем сообщение об ошибке */
}
</style>