# Notizen-App mit Vue.js

> Ein persönliches Projekt zur Demonstration von Frontend-Entwicklungsfähigkeiten mit dem Vue.js-Framework.

## 1. Kurzbeschreibung

Dies ist eine einfache, aber voll funktionsfähige **Single-Page-Application (SPA)** zur Verwaltung von persönlichen Notizen. Die Anwendung ermöglicht das Erstellen, Anzeigen, Bearbeiten und Löschen von Notizen in einer reaktiven und benutzerfreundlichen Oberfläche.

Das Projekt wurde entwickelt, um die Kernkonzepte von Vue.js, einschließlich Komponentenarchitektur, State Management und Client-seitigem Routing, praktisch anzuwenden.

## 2. Architektur

Die Anwendung ist als reine Frontend-SPA aufgebaut:

* **Komponenten-Architektur:** Die Benutzeroberfläche ist modular in wiederverwendbare Vue-Komponenten unterteilt (z.B. `NoteList` zur Anzeige aller Notizen und `NoteDetail` zur Ansicht und Bearbeitung einer einzelnen Notiz).
* **Client-seitiges Routing:** Die Navigation zwischen den verschiedenen Ansichten (z.B. der Listenansicht und der Detailansicht) wird durch `vue-router` gesteuert, was eine schnelle Navigation ohne Neuladen der Seite ermöglicht.
* **Datenpersistenz:** Die Notizen werden lokal im Browser mittels `localStorage` gespeichert, sodass sie auch nach dem Schließen des Fensters erhalten bleiben.

## 3. Kernfeatures

* **Notizen erstellen & löschen:** Benutzer können neue Notizen hinzufügen und bestehende aus der Liste entfernen.
* **Detailansicht:** Durch Klick auf eine Notiz in der Liste gelangt man zu einer Detailansicht.
* **Dynamisches Routing:** Jede Notiz ist über eine eigene URL erreichbar (z.B. `/notes/1`).
* **Reaktive Oberfläche:** Änderungen an den Daten werden dank des reaktiven Systems von Vue.js sofort in der Benutzeroberfläche widergespiegelt.

## 4. Verwendeter Tech-Stack

| Kategorie       | Technologie / Bibliothek   |
| --------------- | -------------------------- |
| **Framework** | Vue.js (Version 3)         |
| **Routing** | Vue Router                 |
| **Sprachen** | JavaScript (ES6+), HTML5, CSS3 |
| **Build-Tool** | Vue CLI / Vite             |
| **Paketmanager**| npm                        |


## 5. Setup & Ausführung

### Voraussetzungen

* Node.js und npm (Node Package Manager)

### Lokale Ausführung

1.  **Repository klonen und Abhängigkeiten installieren:**
    ```bash
    git clone [https://github.com/DEIN-BENUTZERNAME/DEIN-NOTIZEN-REPO.git](https://github.com/DEIN-BENUTZERNAME/DEIN-NOTIZEN-REPO.git)
    cd DEIN-NOTIZEN-REPO
    npm install
    ```

2.  **Entwicklungsserver starten:**
    ```bash
    # Falls du Vue CLI verwendet hast:
    npm run serve

    # Falls du Vite verwendet hast:
    npm run dev
    ```
Die Anwendung ist anschließend unter `http://localhost:8080` (oder einem ähnlichen Port) im Browser erreichbar.
