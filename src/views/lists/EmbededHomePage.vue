<template>
    <div v-html="fetchedHtmlContent"></div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        fetchedHtmlContent: '',
      };
    },
    mounted() {
      this.fetchContent();
    },
    methods: {
      fetchContent() {
        axios.get('https://mild-grumpy-shark-w4x9ef.teleporthq.app/')
          .then(response => {
            this.fetchedHtmlContent = response.data;
          })
          .catch(error => console.error('Error fetching content:', error));
      },
    },
  };
  </script>
  