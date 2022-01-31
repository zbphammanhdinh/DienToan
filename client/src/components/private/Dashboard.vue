<template>
  <div class="dashboard">
    <v-app-bar flat app>
      <div class="dashboard_title">Dinh Pham</div>
      <v-spacer></v-spacer>
      <v-avatar>
        <img src="../../assets/admin.jpg" alt="Dinh Pham" />
      </v-avatar>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
    <v-progress-linear
      indeterminate
      color="primary"
      v-if="loading"
    ></v-progress-linear>
    <v-sheet style="margin-top: 2rem">
      <v-row justify="center">
        <v-col cols="11" md="10">
          <v-row justify="center">
            <v-col cols="12" md="8">
              <Form
                @saveupload="saveupload"
                :item="item"
                :isEdited="isEdited"
                @removeupload="removeupload"
                @createnewpost="createnewpost"
                @previewitem="previewitem"
                @publishitem="publishitem"
                @savedraft="savedraft"
                @deletepost="deletepost"
              />
            </v-col>
            <v-col cols="12" md="4">
              <v-list two-line>
                <v-subheader>BÀI VIẾT</v-subheader>
                <v-list-item-group v-model="selected" active-class="pink--text">
                  <template v-for="(item, index) in items">
                    <v-list-item :key="item.id" @click="edititem(item)">
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="JSON.parse(item.content).title"
                          ></v-list-item-title>

                          <v-list-item-subtitle
                            v-text="JSON.parse(item.content).text"
                          ></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text>{{
                            formatDate(item.createdAt)
                          }}</v-list-item-action-text>

                          <v-list-item-action-text>
                            {{ ispublished(item.published) }}
                          </v-list-item-action-text>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider
                      v-if="index < items.length - 1"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import moment from "moment";
import Form from "./Form";
import {
  createnewblog,
  deleteblog,
  retriveallblog,
  updateblog
} from "../MySQL-express-script";
export default {
  name: "Dashboard",
  components: { Form },
  data() {
    return {
      selected: [],
      loading: false,
      item: {
        _id: null,
        status: "",
        author: {
          // should load user details on authentication
          name: "Dinh Pham",
          email: "",
          about: ""
        },
        content: {
          // content
          title: "",
          src: "",
          text: ""
        },
        published: false
      },
      isEdited: false,
      editedIndex: -1,
      file: null
    };
  },
  computed: {
    items() {
      return this.$store.state.articles;
    }
  },
  async mounted() {
    const results = await retriveallblog();
    // save to vuex
    this.$store.commit("updatearticle", results.data);
  },
  methods: {
    // format date
    formatDate(item) {
      return moment(item).fromNow();
    },
    // is published
    ispublished(item) {
      if (item === true) return "Published";
      else return "Draft";
    },
    // log out
    logout() {
      this.$router.push("/");
    },
    // save upload
    saveupload(e) {
      this.file = e;
      this.item.content.src = URL.createObjectURL(e.target.files[0]);
    },
    // edit item
    edititem(item) {
      this.isEdited = true;
      this.editedIndex = this.items.indexOf(item);
      this.item = {
        _id: item._id ? item._id : item.id,
        author: Object.assign({}, JSON.parse(item.author)),
        content: Object.assign({}, JSON.parse(item.content)),
        published: item.published,
        createdAt: item.createdAt
      };
    },
    // create new post
    createnewpost() {
      this.item.content.title = "";
      this.item.content.src = "";
      this.item.content.text = "";
      this.file = "";
      this.selected = [];
      this.editedIndex = -1;
    },
    // remove upload
    removeupload() {
      this.item.content.src = "";
      this.file = null;
    },
    // preview item
    previewitem() {
      this.$store.commit("updateselected", this.item);
      sessionStorage.setItem("@article_edit", JSON.stringify(this.item));
      let route = `/read/${this.item._id}`;
      this.$router.push(route);
    },
    //save draft
    async savedraft() {
      this.loading = true;
      let data = [...this.items];
      // save in database
      const response = await createnewblog(this.item);
      data.push(response.data);
      // save to vuex
      this.$store.commit("updatearticle", data);
      // timeout
      setTimeout(() => {
        this.loading = false;
        this.createnewpost();
      }, 1000);
    },
    // publish
    async publishitem() {
      this.loading = true;
      let data = [...this.items];
      this.item.published = true;
      let response;
      if (this.editedIndex > -1) {
        await updateblog(this.item);
        Object.assign(data[this.editedIndex], {
          _id: this.item._id,
          author: JSON.stringify(this.item.author),
          content: JSON.stringify(this.item.content),
          published: this.item.published,
          createdAt: this.item.createdAt,
          updatedAt: this.item.updatedAt
        });
      } else {
        response = await createnewblog(this.item);
        data.push(response);
      }
      // save to vuex
      this.$store.commit("updatearticle", data);
      // save to database
      // timeout
      setTimeout(() => {
        this.loading = false;
        this.createnewpost();
      }, 1000);
    },
    // delete blog
    async deletepost() {
      this.loading = true;
      const data = [...this.items];
      const index = this.items.indexOf(this.item);
      data.splice(index, 1);
      // save to vuex
      this.$store.commit("updatearticle", data);
      let deleted_id = this.item._id ? this.item._id : this.item.id;
      await deleteblog(deleted_id);
      // timeout
      setTimeout(() => {
        this.loading = false;
        this.createnewpost();
      }, 1000);
    }
  }
};
</script>

<style scooped lang="css">
.dashboard_title {
  font-family: "Montserrat", sans-serif;
  color: black;
  font-size: 1.25rem;
}
</style>