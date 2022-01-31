<template>
  <div class="confirm">
    <v-row justify="center" align="center" class="fill-height">
      <v-card width="350" style="border-radius: 10px" elevation="5">
        <v-card-text class="pa-5 mx-auto">
          <div class="auth_title">
            Xác nhận Email
          </div>
          <v-text-field
            name="email"
            label="Email"
            outlined
            dense
            single-line
            prepend-inner-icon="mdi-email"
          ></v-text-field>
          <v-btn color="pink" dark large block to="/login">
            <span style="text-transform: capitalize">Xác nhận</span>
            <span style="text-transform: lowercase" class="ml-1">email</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Confirm",
  data() {
    return {
      //
    };
  }
};
</script>

<style scooped lang="css">
.confirm {
  height: 100vh;
}
.auth_title {
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
}
</style>