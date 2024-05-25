`use strict`

// aggiungo il (data)
const { createApp } = Vue

  createApp({
    data() {
      return {
        // il messaggio
        message: `hello`,        
        // immagine
        width: `w-50`,
        wolf: `https://wallpapersmug.com/download/3840x2160/14b73f/wolf-muzzle.jpg`,
        // immagine centrare
        center: `text-center`
      }
    }
  }).mount('body')
