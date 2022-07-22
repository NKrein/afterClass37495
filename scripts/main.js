// -------------- Creo mi constructor para los objetos que mi programa va a manejar --------------
class PostItem {
  constructor(author, title, description) {
    this.id = parseInt(Math.random() * 100000); // Genero un id único, para poder referenciarlos luego
    this.author = author;
    this.title = title;
    this.description = description;
    this.isFavorite = false; // Defino falso por defecto
    this.date = new Date().toDateString();
  }
  // puedo manejar esta propiedad mediante un método propio de la clase
  handleFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
