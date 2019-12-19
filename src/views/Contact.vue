<template>
    <div class="contact-wrapper">
        <h1>Get in touch with me!</h1>

        <form
            @submit.prevent
            action="https://getsimpleform.com/messages?form_api_token=e3782d7d7e0fbc539eb8e9976031f03b"
            method="POST"
            ref="form"
        >
            <label for="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                :class="{ 'has-error': submitting && invalidName }"
                v-model.lazy="name"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label for="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                :class="{ 'has-error': submitting && invalidEmail }"
                v-model.lazy="email"
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label for="msg">Your message here</label>
            <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                :class="{ 'has-error': submitting && invalidMessage }"
                v-model.lazy="message"
                @focus="clearStatus"
                @keypress="clearStatus"
            ></textarea>
            <p v-if="error && submitting" class="error-message">❗Please fill out all fields</p>
            <p
                v-if="success"
                class="success-message"
            >✅ Message successfully sent! I´ll contact you very soon :)</p>
            <button class="btn" @click="handleSubmit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            submitting: false,
            success: false,
            error: false,
            name: "",
            email: "",
            message: ""
        };
    },
    computed: {
        invalidName() {
            return this.name === "";
        },
        invalidEmail() {
            return this.email === "";
        },
        invalidMessage() {
            return this.message === "";
        }
    },
    methods: {
        handleSubmit() {
            this.submitting = true;
            this.clearStatus();

            if (this.invalidName || this.invalidEmail || this.invalidMessage) {
                this.error = true;
                return;
            }

            this.formSubmit();

            this.error = false;
            this.success = true;
            this.submitting = false;
        },
        formSubmit() {
            event.preventDefault();
            this.$refs.form.submit();
        },
        clearStatus() {
            this.success = false;
            this.error = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.contact-wrapper {
    margin: 0 auto;
}
label {
    margin-bottom: 5px;
}
form {
    max-width: 400px;
}
input,
textarea {
    border-radius: 4px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
    transition: all 0.3s;
    font-size: 1rem;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    margin-bottom: 15px;
    width: 100%;
}
textarea {
    resize: none;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-color: #87f;
}

.btn {
    display: block;
    padding: 10px 30px;
    background: #87f;
    border-radius: 4px;
    color: #fff;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
}

.btn:hover {
    background: #65d;
    transform: scale(1.1);
}

[class*="-message"] {
    font-weight: 500;
}

.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}

.has-error {
    border: 1px solid #d33c40;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1), 0 0 6px #f4cecf;
}
</style>