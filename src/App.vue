<template>
  <div id="app">
    <h1>Notely</h1>
    <router-link to="/">Meine Notizen</router-link>
    <button @click="createNote">Notiz erstellen</button> 
    <router-view :notes="notes"
     @add-note="add"
     @edit-note="edit"
     @delete-note="clear" 
     /> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: [],
      lastId: 0,
      colors: ['#8B7E95','#648DE5','#5C8085','#809B8C','#A68A64']
    };
  },
  mounted() { //Wird ausgeführt, wenn Komponente initialisiert wird
    this.load();
    const savedId = localStorage.getItem('lastId');
    if (savedId) {
      this.lastId = parseInt(savedId); //Liest letzte vergebene ID aus dem localStorage
    }
  },
  methods: {
    createNote() { //Erstellt neue Notiz
      const newNote = {
        id: this.newId(),
        title: '', 
        text: '',
        date: new Date(),
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      };
      this.$router.push({ 
        name: 'note-detail', 
        params: { id: newNote.id }, 
        query: { newNote: JSON.stringify(newNote) } 
      });
    },
    add(newNote) { //Fügt neue Notiz zum Array hinzu
      this.notes.push(newNote);
      this.save();
    },
    edit(id, newText) { //Bearbeitet bestehende Notiz
      const index = this.notes.findIndex(note => note.id === id);
      if (index !== -1) {
        this.notes[index].text = newText;
        this.save();
      }
    },
    clear(id) { //Löscht Notiz
      this.notes = this.notes.filter(note => note.id !== id);
      this.save();
    },
    newId() {
      this.lastId++;
      localStorage.setItem('lastId', this.lastId);
      return this.lastId;
    },
    save() { //Speichert Notiz im localStorage
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    load() { //Laedt Notiz aus localStorage
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        this.notes = JSON.parse(savedNotes);
      }
    }
  }
};
</script>