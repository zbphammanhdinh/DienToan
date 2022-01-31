<template>
  <v-footer dark padless height="400" color="#3a0ca3">
    <v-card flat tile color="#3a0ca3" class="white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Các địa điểm du lịch văn hóa nổi tiếng Việt Nam níu chân đông đảo du khách tới tham quan và chiêm ngưỡng mỗi ngày. Hãy đọc thật kỹ nội dung bài viết bởi sẽ có rất nhiều điều thú vị về du lịch văn hóa Việt Nam khiến bạn hứng thú, chỉ muốn xách balo lên và đến tìm hiểu ngay! Chúc bạn sẽ có được những trải nghiệm du lịch lý thú.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Curious</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
    };
  }
};
</script>