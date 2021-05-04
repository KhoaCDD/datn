<template>
  <div class="content px-8 mb-7">
    <v-container
      fluid
      tag="section"
      class="mx-5"
    >
      <!-- Search Box -->
      <UserSearchBox />
      <!-- Pagination bar -->
      <div class="pagination-layout text-sm-right">
        <v-pagination
          v-model="page"
          :length="totalPages"
          @input="handlePagination(page)"
        />
      </div>
      <!-- User Table -->
      <div>
        <v-data-table
            :headers="headers"
            :items="userList"
            :hide-default-footer="true"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-btn
            @click="handleEditDialog(item)"
            depressed
            class="user-table-button v-btn--icon v-btn--round v-size--default success--text"
            >
              <v-icon>
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
            @click="handleChangePasswordDialog(item)"
            depressed
            class="user-table-button v-btn--icon v-btn--round v-size--default primary--text"
            >
              <v-icon>
                mdi-lock-reset
              </v-icon>
            </v-btn>
            <v-btn
            @click="deleteUser(item)"
            depressed
            class="user-table-button v-btn--icon v-btn--round v-size--default error--text"
            >
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </div>
      <div v-if="editDialog">
        <EditUserDialog
          :is-open="editDialog"
          title="Edit User"
          @handleOpen="handleEditDialog"
        />
      </div>
      <div v-if="changePasswordDialog">
        <ChangePasswordDialog
          :is-open="changePasswordDialog"
          title="user.userList.changePassword"
          :user="changePasswordUser"
          @handleOpen="handleChangePasswordDialog"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { mapState } from 'vuex';
import UserSearchBox from '../components/user-form/UserSearchBox.vue';
import EditUserDialog from '../components/user-form/EditUserDialog.vue';
import ChangePasswordDialog from '../components/user-form/ChangePasswordDialog.vue';

export default {

  name: 'UserListPage',
  components: {
    EditUserDialog,
    ChangePasswordDialog,
    UserSearchBox,
  },
  data() {
    return {
      page: 1,
      deleteDialog: false,
      editDialog: false,
      changePasswordDialog: false,
      changePasswordUser: {},
    };
  },
  created() {
    this.$store.dispatch('user/getAllUsers');
  },
  computed: {
    userList() {
      return this.$store.getters['user/getListUsers'] || [];
    },
    ...mapState('user', {
      totalPages: (state) => {
        const { totalItems } = state;
        const limit = process.env.VUE_APP_PAGINATION_ITEM_PER_PAGE || 5;
        return (totalItems < limit ? 1 : Math.ceil(totalItems / limit));
      },
    }),
    headers() {
      return [
        {
          text: '#',
          align: 'center',
          sortable: false,
          value: 'index',
          class: 'table-header-style',
        },
        { text: this.$t('user.userList.userTable.fullName'), value: 'fullName', class: 'table-header-style' },
        {
          text: this.$t('user.userList.userTable.email'), value: 'email', class: 'table-header-style', sortable: false,
        },
        {
          text: this.$t('user.userList.userTable.birthday'), value: 'birthday', class: 'table-header-style', align: 'center', sortable: false,
        },
        { text: this.$t('user.userList.userTable.gender'), value: 'genderMultiLanguage', class: 'table-header-style' },
        {
          text: this.$t('user.userList.userTable.phone'), value: 'phone', class: 'table-header-style', align: 'center',
        },
        {
          text: this.$t('user.userList.userTable.action'), value: 'actions', class: 'table-header-style', sortable: false, align: 'center',
        },
      ];
    },
  },
  methods: {
    handleEditDialog(user) {
      this.$store.dispatch('user/setEditingUser', user);
      this.editDialog = !(this.editDialog);
    },
    handleChangePasswordDialog(item) {
      const user = {
        email: item?.email,
        id: item?.id,
      };
      this.changePasswordUser = user;
      this.changePasswordDialog = !(this.changePasswordDialog);
    },
    async deleteUser(user) {
      this.deleteDialog = true;
      let deleteResult = {};
      const { id } = user;
      const result = await Swal.fire({
        title: this.$t('user.userList.confirmDelete'),
        text: this.$t('user.userList.deleteWarning'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: this.$t('user.userList.cancel'),
        confirmButtonText: this.$t('user.userList.yes'),
      });
      if (result.isConfirmed) {
        deleteResult = await this.$store.dispatch('user/deleteUser', id);
        if (deleteResult.success) {
          Swal.fire(
            this.$t('user.userList.deleted'),
            this.$t('user.userList.deleted'),
            'success',
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        } else {
          Swal.fire(
            {
              icon: 'error',
              title: this.$t('user.userList.deleteFailure'),
              text: deleteResult.message,
            },
          ).then(() => {
            this.$store.dispatch('user/getAllUsers');
          });
        }
      }
    },
    handlePagination(page) {
      this.page = page;
      const limit = process.env.VUE_APP_PAGINATION_ITEM_PER_PAGE;
      this.$store.dispatch('user/getAllUsers', {
        name: '', gender: '', page, limit,
        });
    },
  },
};
</script>

<style>
.content{
    max-width: -webkit-calc(100% - 0.375rem);
    transition: all .3s ease;
}
.pagination-layout{
    display: flex;
    justify-content: flex-end;
}
.table-header-style{
    font-weight: 600 !important;
    font-size: 1rem!important;
    color: rgb(10, 10, 10)!important;
    padding: .5rem!important;
}
.user-table-button{
  background-color: transparent !important;
}
</style>
