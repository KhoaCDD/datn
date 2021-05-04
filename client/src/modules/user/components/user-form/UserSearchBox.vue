<template>
    <div>
        <v-card
            class="rounded bg-white mt-0 mb-7 pa-6 pt-0"
            elevation="2"
        >
            <div class="row">
            <div class="pt-4 pb-0 col-md-6 col-12 margin-style">
                <v-text-field
                v-model="nameSearch"
                :label="this.$t('user.userList.search')"
                hide-details="auto"
                outlined
                />
            </div>
            <div class="pt-4 pb-0 col-md-6 col-12 margin-style">
                <v-select
                v-model="genderSearch"
                :items="items"
                :label="this.$t('user.userList.userTable.gender')"
                outlined
                />
            </div>
            <div class="b-0 text-center col col-12 col-sm-6 text-sm-right">
                <v-btn
                @click="handleSearch"
                tile
                color="primary"
                class=" height43 mt-2 v-btn v-btn--contained theme--light primary"
                >
                <v-icon left>
                    mdi-magnify
                </v-icon>
                {{ this.$t('user.userList.search') }}
                </v-btn>
            </div>
            <div class="b-0 text-center col col-12 col-sm-6 text-sm-left">
                <v-btn
                @click="handleCreateDialog"
                tile
                color="primary"
                class=" height43 mt-2 v-btn v-btn--contained theme--light primary"
                >
                <v-icon left>
                    mdi-plus
                </v-icon>
                {{ this.$t('user.userList.add') }}
                </v-btn>
            </div>
            </div>
        </v-card>
        <div v-if="createDialog">
            <CreateUserDialog
            :is-open="createDialog"
            title="Create User"
            @handleOpen="handleCreateDialog"
            />
      </div>
    </div>
</template>

<script>
import CreateUserDialog from './CreateUserDialog.vue';

export default {

    name: 'UserSearchBox',
    components: {
        CreateUserDialog,
    },
  data() {
    return {
      items: ['Male', 'Female', 'Other'],
      nameSearch: '',
      genderSearch: '',
      createDialog: false,
    };
  },
  computed: {

  },
  methods: {
    handleCreateDialog() {
      this.createDialog = !(this.createDialog);
    },
    handleSearch() {
      const name = (this.nameSearch)?.toLowerCase();
      const gender = (this.genderSearch)?.toLowerCase();
      this.nameSearch = '';
      this.genderSearch = '';
      this.$store.dispatch('user/getAllUsers', { name, gender });
    },
  },
};
</script>

<style>
.height43{
    height: 43px  !important;
    margin-right:0 !important;
}
.margin-style{
    margin-top:10px;
}
</style>
