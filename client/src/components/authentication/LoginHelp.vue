<template>
  <div class="login-help">
    <v-row justify="center" align="center" class="fill-height">
      <v-card width="350" style="border-radius: 10px" elevation="5">
        <v-card-text class="pa-5 mx-auto">
          <div class="auth_title">GỬI MÃ</div>
          <div class="mb-5">
            Chúng tôi sẽ gửi thông tin đăng nhập đến Email của bạn.
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
            <span style="text-transform: capitalize">Gửi</span>
            <span style="text-transform: lowercase" class="ml-1">mã</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "LoginHelp",
  data() {
    return {
      //
    };
  }
};
</script>

<style scooped lang="css">
.login-help {
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