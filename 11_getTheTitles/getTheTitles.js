const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

const getTheTitles = function (books) {
    let bookTitle = []
    books.forEach(item => {
        bookTitle.push(item.title);
    });

    return bookTitle;
};

console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
