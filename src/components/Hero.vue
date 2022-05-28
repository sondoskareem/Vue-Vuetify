<template>
  <div class="heroBlock">
    <v-carousel hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      >
        <v-row class="fill-height title" align="center" justify="center">
          <div  >{{item.title}}</div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {
      items: [
        {
          src: require("../assets/images/img-carousel1.jpg"),
          title: "We are createive",
        },

        {
          src: require("../assets/images/img-carousel3.jpg"),
          title: "We are profssional",
        },

        {
          src: require("../assets/images/img-carousel2.jpg"),
          title: "We are hard worker",
        },
      ],
    };
  },
};
</script>
