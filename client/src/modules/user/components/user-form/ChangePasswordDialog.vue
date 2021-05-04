<template>
   <div>
    <v-dialog
      v-model="isOpen"
      persistent
      max-width="40rem"
    >
      <v-card>
        <!-- Tittle -->
        <v-card-title>
          <span class="headline">{{ $t(title) }}</span>
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
                  <label class="input-title mb-1 font-weight-bold">{{ $t('user.userList.userTable.email') }}
                    <span class="text-error">*</span>
                  </label>
                  <v-text-field
                    v-model.trim="user.email"
                    :error-messages="errors"
                    :placeholder="$t('user.userList.userTable.email')"
                    required
                    outlined
                    disabled
                    class="theme-light input-style"
                  />
                </validation-provider>
              </div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <label class="input-title mb-1 font-weight-bold">{{ $t('user.userList.password') }}
                    <span class="text-error">*</span>
                  </label>
                  <validation-provider
                  v-slot="{ errors }"
                  name="Old Password"
                  rules="required"
                  >
                    <v-text-field
                    v-model.trim="oldPassword"
                    type="password"
                    :placeholder="$t('user.userList.password')"
                    prepend-icon="mdi-lock"
                    :error-messages="errors"
                    required
                    outlined
                    class="theme-light input-style"
                    />
                  </validation-provider>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 col-12">
                  <label class="input-title mb-1 font-weight-bold">{{ $t('user.userList.password') }}
                    <span class="text-error">*</span>
                  </label>
                  <validation-provider
                  v-slot="{ errors }"
                  name="New Password"
                  rules="required"
                  >
                    <v-text-field
                    v-model.trim="newPassword"
                    type="password"
                    :placeholder="$t('user.userList.password')"
                    prepend-icon="mdi-lock"
                    :error-messages="errors"
                    required
                    outlined
                    class="theme-light input-style"
                    />
                  </validation-provider>
                </div>
                <div class="col-md-6 col-12">
                  <label class="input-title mb-1 font-weight-bold">{{ $t('user.userList.password') }}
                    <span class="text-error">*</span>
                  </label>
                  <validation-provider
                  v-slot="{ errors }"
                  name="Repeat Password"
                  :rules="{
                    required: true,
                    is: newPassword
                  }"
                  >
                    <v-text-field
                    type="password"
                    v-model="rePassword"
                     :placeholder="$t('user.userList.password')"
                    prepend-icon="mdi-lock-reset"
                    :error-messages="errors"
                    required
                    outlined
                    :disabled="!newPassword.length"
                    class="theme-light input-style"
                    />
                  </validation-provider>
                </div>
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
              <!-- <v-btn
                class="mr-4"
                type="submit"
                :disabled="invalid"
                @click="handleOpen"
              >
                submit
              </v-btn> -->
              <!-- <v-btn @click="clear">
                clear
              </v-btn> -->
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-dialog>
   </div>
</template>

<script>
import {
       required, is,
       } from 'vee-validate/dist/rules';
import {
       extend, ValidationObserver, ValidationProvider, setInteractionMode,
       } from 'vee-validate';
import Swal from 'sweetalert2';
import i18n from '../../../../plugins/i18n';

setInteractionMode('eager');

extend('required', {
  ...required,
  message: (field) => `${field} ${i18n.t('user.userList.changePassword')}`,
});

extend('is', {
  ...is,
  message: `${i18n.t('user.userList.passwordUnmatch')}`,
});

export default {
    name: 'ChangePasswordDialog',
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
        user: {
            type: Object,
            default: () => ({
                    email: '',
                    id: '',
                }),
        },
    },
    data() {
        return {
          oldPassword: '',
          newPassword: '',
          rePassword: '',
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
      async updatePassword() {
        await this.$refs.observer.validate();
        const user = {
          id: this.user.id,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          rePassword: this.rePassword,
        };
        const result = await this.$store.dispatch('user/updateUserPassword', user);
        if (result.success) {
          Swal.fire(
            'Success!',
            'Updated password !',
            'success',
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: 'Update password failure',
              text: result.message,
            },
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        }
      },
      async submit() {
        await this.updatePassword();
        this.handleClose();
      },
      clear() {
        this.password = '';
        this.rePassword = '';
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
