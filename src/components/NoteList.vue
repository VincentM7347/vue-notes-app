<template>
    <div class="search-container">
      <input type="text" v-model="searchterm" placeholder="Suche">
    </div>
    <div class="note-list">
        <router-link :to="`/notes/${note.id}`" v-for="note in filteredNotes" :key="note.id">
        <div class="note-item" :style="{ backgroundColor: note.color }">
          <h3 class="title">{{  note.title }}</h3>
          <p class="date"> {{ formattedDate }} </p>
          <p class="preview"> {{ shortenedText(note.text) }}</p>
        </div>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      notes: {
        type: Array,
        required: true
      }
    },
    data(){
        return {
            searchterm: ''
        };
    }, 
    computed: {
    filteredNotes() { // gefilterte Liste der Notizen basierend auf Suchbegriff
      if (!this.searchterm) {
        return this.notes;
      }
      const searchtermSmall = this.searchterm.toLowerCase(); // Suchbegriff in Kleinbuchstaben umwandeln
      return this.notes.filter(note => {
        return note.title.toLowerCase().includes(searchtermSmall);
      });
    },
  },
  methods: {
    shortenedText(text) { //Kuerzt Text auf 40 Zeichen
      const maxLength = 40; 
      if (text.length > maxLength) {
        return text.substring(0, maxLength) + "...";
      } else {
        return text;
      }
    }
  }
  };
  </script>
  
  <style>
    @import './NoteList.css';
  </style>