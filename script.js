// //Słowo kluczowe this w JavaScript odnosi się do obiektu, w kontekście którego zostało wywołane. Oznacza to, że this zawsze odnosi się do obiektu, w ramach którego zostało użyte, a nie obiektu, który zdefiniował funkcję, w której znajduje się this. Jest to szczególnie przydatne w programowaniu obiektowym, gdzie umożliwia odwoływanie się do właściwości i metod obiektu, na którym wywołano daną funkcję, bez potrzeby odnoszenia się do konkretnych nazw obiektów.

// //Przykłady:

// //Użycie this w metodzie obiektu:

// const person = {
//   username: "Maciej",
//   showName: function() {
//     console.log(this.username);
//   }
// };

// person.showName(); // Wyświetli "Maciej"


// //W tym przykładzie, this odnosi się do obiektu person, 
// //więc this.username odnosi się do właściwości username obiektu person.

// // Użycie this w konstruktorze obiektu:

// function Bookshelf() {
//   this.authors = [];

//   this.getAuthors = function() {
//     return this.authors;
//   };

//   this.addAuthor = function(authorName) {
//     this.authors.push(authorName);
//   };
// }

// const shelf = new Bookshelf();
// shelf.addAuthor("Stephen King");
// shelf.addAuthor("J.K. Rowling");

// console.log(shelf.getAuthors()); // Wyświetli ["Stephen King", "J.K. Rowling"]

// //W tym przypadku, this odnosi się do konkretnej instancji obiektu Bookshelf,
// // na której wywołano metodę.

// // Obiekt reprezentujący osobę
// const person = {
//   // Właściwość przechowująca imię osoby
//   username: "Maciej",

//   // Metoda wyświetlająca imię osoby
//   showName: function() {
//     console.log(this.username);
//   }
// };

// person.showName(); // Wyświetli "Maciej"

// // Obiekt reprezentujący półkę na książki
// function Bookshelf() {
//   // Tablica przechowująca imiona autorów
//   this.authors = [];

//   // Metoda zwracająca listę autorów
//   this.getAuthors = function() {
//     return this.authors;
//   };

//   // Metoda dodająca autora do półki
//   this.addAuthor = function(authorName) {
//     this.authors.push(authorName);
//   };
// }

// const shelf = new Bookshelf();
// shelf.addAuthor("Stephen King");
// shelf.addAuthor("J.K. Rowling");

// console.log(shelf.getAuthors()); // Wyświetli ["Stephen King", "J.K. Rowling"]
