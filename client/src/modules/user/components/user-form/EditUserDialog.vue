<template>
   <div>
    <v-dialog
      v-model="isOpen"
      persistent
      max-width="60rem"
    >
      <v-card>
        <!-- Tittle -->
        <v-card-title>
          <span class="headline">{{ title }}</span>
        </v-card-title>
        <v-card-text>
          <validation-observer
            ref="observer"
            v-slot="{ invalid }"
          >
            <form @submit.prevent="submit">
              <!-- email -->
              <div>
                <validation-provider
                v-slot="{ errors }"
                name="Email"
                rules="required|email"
                >
                  <label class="input-title mb-1 font-weight-bold">Email
                    <span class="text-error">*</span>
                  </label>
                  <v-text-field
                    v-model.trim="editingUser.email"
                    :error-messages="errors"
                    placeholder="Email"
                    required
                    outlined
                    readonly
                    class="theme-light input-style"
                  />
                </validation-provider>
              </div>
              <!-- input name -->
              <div class="">
                <validation-provider
                v-slot="{ errors }"
                name="Full Name"
                rules="required"
                >
                  <label class="input-title mb-1 font-weight-bold">Full Name
                    <span class="text-error">*</span>
                  </label>
                  <v-text-field
                    v-model.trim="editingUser.fullName"
                    placeholder="Full name"
                    :error-messages="errors"
                    required
                    outlined
                    class="theme-light input-style"
                  />
                </validation-provider>
              </div>
              <!-- Gender -->
              <div class="row">
                <div class="col-md-6 col-12">
                  <label class="input-title mb-1 font-weight-bold">Gender
                    <span class="text-error">*</span>
                  </label>
                  <validation-provider
                  v-slot="{ errors }"
                  name="Gender"
                  :rules="{
                    required: true,
                    oneOf: genders
                  }"
                  >
                    <v-select
                      v-model="editingUser.gender"
                      prepend-icon="mdi-account-multiple"
                      :items="genders"
                      :error-messages="errors"
                      data-vv-name="Gender"
                      required
                      outlined
                      class="theme-light input-style"
                    />
                  </validation-provider>
                </div>
                <div class="col-md-6 col-12">
                  <!-- Birthday -->
                  <label class="input-title mb-1 font-weight-bold">Birthday
                  </label>
                  <validation-provider
                    v-slot="{ errors }"
                    name="Birthday"
                  >
                    <v-menu
                      ref="menu"
                      v-model="datePicker"
                      :close-on-content-click="false"
                      :return-value.sync="editingUser.birthday"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="editingUser.birthday"
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                          outlined
                          class="theme-light input-style"
                        />
                      </template>
                      <v-date-picker
                        v-model="editingUser.birthday"
                        no-title
                        scrollable
                        :locale="lang"
                        :max="new Date().toISOString().slice(0, 10)"
                      >
                        <v-spacer />
                        <v-btn
                          text
                          color="primary"
                          @click="datePicker = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(editingUser.birthday)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                      <v-text-field>{{ errors }}</v-text-field>
                    </v-menu>
                  </validation-provider>
                </div>
              </div>
              <!-- phone number -->
              <div>
                <validation-provider
                  v-slot="{ errors }"
                  name="Phone Number"
                  :rules="{
                    required: false,
                    regex: '^[0-9\-\+]{7,15}$'
                  }"
                >
                <label class="input-title mb-1 font-weight-bold">Phone Number
                  </label>
                  <v-text-field
                    v-model.trim="editingUser.phone"
                    :counter="10"
                    placeholder="Phone Number"
                    :error-messages="errors"
                    outlined
                    class="theme-light input-style"
                  />
                </validation-provider>
              </div>
              <!-- Action -->
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  class="b-0 text-center theme-light"
                  @click="handleClose()"
                >
                  Close
                </v-btn>
                <v-btn
                  type="submit"
                  color="blue darken-1"
                  text
                  :disabled="invalid"
                  @submit.prevent="submit()"
                  class="b-0 text-center theme-light"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-dialog>
   </div>
</template>

<script>
import {
       required, email, max, regex, oneOf, is,
       } from 'vee-validate/dist/rules';
import {
       extend, ValidationObserver, ValidationProvider, setInteractionMode,
       } from 'vee-validate';
import Swal from 'sweetalert2';

setInteractionMode('eager');

extend('oneOf', {
  ...oneOf,
  message: '{_field_} must be one of values: Male, Female, Other',
});

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
});

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
});

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not valid',
});

extend('email', {
  ...email,
  message: 'Email must be valid',
});

extend('is', {
  ...is,
  message: 'Password is not match',
});

export default {
    name: 'CreateUserDialog',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    props: {
        title: {
            type: String,
            default: () => '',
        },
        isOpen: {
            type: Boolean,
            default: () => false,
        },
    },
    mounted() {
      const user = (this.$store.state.user?.editingUser);
      this.editingUser = user;
    },
    data() {
        return {
          editingUser: {},
          genders: ['Male', 'Female', 'Other'],
          datePicker: false,
          lang: localStorage.getItem('lang'),
        };
    },
    methods: {
      handleOpen() {
        const openStatus = !(this.isOpen);
        this.clear();
        this.$emit('handleOpen', openStatus);
      },
      // Form handle Functions
      async updateUser() {
        await this.$refs.observer.validate();
        const {
          fullName, gender, birthday, phone, id,
          } = this.editingUser;
        const user = {
          fullName,
          gender: gender.toLowerCase(),
          phone,
          birthday,
          id,
        };
        const result = await this.$store.dispatch('user/updateUser', user);
        if (result.success) {
          Swal.fire(
            'Success!',
            'Updated user !',
            'success',
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: 'Update failure',
              text: result.message,
            },
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        }
      },
      async submit() {
        await this.updateUser();
        this.handleClose();
      },
      clear() {
        this.$refs.observer.reset();
      },
      handleClose() {
        const openStatus = !(this.isOpen);
        this.clear();
        this.$emit('handleOpen', openStatus);
      },
    },
};
</script>
<style lang="scss" scoped>
.text-error{
  color: red;
}
.input-style{
  margin-bottom: -0.5rem !important;
}
</style>
