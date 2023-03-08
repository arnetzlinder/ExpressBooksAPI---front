let bookList = document.getElementById("bookList");

fetch("http://localhost:3000/books")
.then(res => res.json())
.then(data => {
    printBooks(data);
});

function printBooks (books) {
    books.map (book => {
        let li = document.createElement("li")
        let button = document.createElement("button")
        button.id = book.id;
        li.id = book.id;
        li.innerText = book.title + "    låneknapp!";

        //printa text på knappen, låna om available är true, utlånad om available är false
        button.innerText = book.available;
        bookList.appendChild(li);
        bookList.appendChild(button);


    })
}