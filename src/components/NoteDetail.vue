<template>
    <div class="note-detail" v-if="note">
      <div class="textarea-container">
        <input type="text" v-model="note.title" placeholder="Titel eingeben" maxlength="30">
        <textarea v-model="note.text" placeholder="Notiz " ref="textarea"></textarea>
      </div>
      <p>Erstellt am: {{ formattedDate }}</p>
      <button @click="save">Speichern</button>
      <button @click="clear">Löschen</button>
      <div v-if="errorMessage" class="errorMessage">{{ errorMessage }}</div>
      <div v-else-if="successMessage" class="successMessage">{{ successMessage }}</div> 
    </div>
    <div v-else>
      <p>Notiz nicht gefunden.</p>
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
  data() {
    return {
      newNote: null,
      editMode: false,
      errorMessage: null,
      successMessage: null,
    };
  },
  computed: { //Berechnet nur neu wenn sich abhaengige Daten aendern
    note() {  //Aktuelle angezeigte Notiz
      if (this.newNote) {
        return this.newNote; 
      }
      const id = parseInt(this.$route.params.id);
      return this.notes.find(note => note.id === id);
    },
    formattedDate() { //Formatiert Datum der Notiz
      if (this.note.date instanceof Date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return this.note.date.toLocaleDateString('de-DE', options).replace(/\//g, '.'); 
      }
      return this.note.date;
    }
  },
  mounted() { //Wird ausgeführt, wenn die Komponente initialisiert wird
    if (this.$route.query.newNote) {
      this.newNote = JSON.parse(this.$route.query.newNote);
      this.editMode = true; 
      this.newNote.date = new Date(); 
    }
  },
  methods: {
    clear() { 
        this.$emit('delete-note', this.note.id);
        this.$router.push('/');
    },
    save() {
      if (!this.note.title.trim()) {
        this.errorMessage = "Bitte geben Sie einen Titel ein.";
        this.successMessage = null;
        return;
      }
      this.errorMessage = null;
      if (this.newNote) { 
        this.$emit('add-note', this.note);
        this.newNote = null;
        this.successMessage = "Notiz erfolgreich erstellt!";
      } else {
        this.$emit('edit-note', this.note.id, this.note.text);
        this.successMessage = "Notiz erfolgreich gespeichert!";
      }
      setTimeout(() => {
        this.$router.push('/');
      }, 1000);
    },
  }
};

</script>

<style>
    @import './NoteDetail.css';
  </style>