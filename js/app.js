const inventory = [
    {
        "category": "Informacinės technologijos",
        "books": [
            {
                "title": "Mastering JavaScript",
                "ISBN": "IT-50101",
                "publishing_year": 2022,
                "pages": 320,
                "quantity": 14,
                "price": 34.99
            },
            {
                "title": "Python for Data Science",
                "ISBN": "IT-50102",
                "publishing_year": 2023,
                "pages": 410,
                "quantity": 20,
                "price": 45.50,
                "new_book": true
            },
            {
                "title": "Web Development Essentials",
                "ISBN": "IT-50103",
                "publishing_year": 2021,
                "pages": 280,
                "quantity": 8,
                "price": 27.99
            },
            {
                "title": "Introduction to Machine Learning",
                "ISBN": "IT-50104",
                "publishing_year": 2020,
                "pages": 350,
                "quantity": 12,
                "price": 39.99
            },
            {
                "title": "Cloud Computing Concepts",
                "ISBN": "IT-50105",
                "publishing_year": 2023,
                "pages": 300,
                "quantity": 5,
                "price": 42.00,
                "new_book": true
            }
        ]
    },
    {
        "category": "Fantastika",
        "books": [
            {
                "title": "The Enchanted Forest",
                "ISBN": "FA-10101",
                "publishing_year": 2020,
                "pages": 300,
                "quantity": 15,
                "price": 19.99
            },
            {
                "title": "Dragon's Quest",
                "ISBN": "FA-10102",
                "publishing_year": 2018,
                "pages": 450,
                "quantity": 8,
                "price": 29.99
            },
            {
                "title": "Mystic Lands",
                "ISBN": "FA-10103",
                "publishing_year": 2022,
                "pages": 320,
                "quantity": 20,
                "price": 24.99
            },
            {
                "title": "The Lost City",
                "ISBN": "FA-10104",
                "publishing_year": 2017,
                "pages": 280,
                "quantity": 5,
                "price": 14.99
            },
            {
                "title": "Journey of the Gods",
                "ISBN": "FA-10105",
                "publishing_year": 2021,
                "pages": 380,
                "quantity": 10,
                "price": 22.99
            }
        ]
    },
    {
        "category": "Historical Fiction",
        "books": [
            {
                "title": "The Roman Empire",
                "ISBN": "HF-20201",
                "publishing_year": 2019,
                "pages": 340,
                "quantity": 7,
                "price": 18.50
            },
            {
                "title": "Warriors of Time",
                "ISBN": "HF-20202",
                "publishing_year": 2016,
                "pages": 410,
                "quantity": 9,
                "price": 27.99
            },
            {
                "title": "The Golden Age",
                "ISBN": "HF-20203",
                "publishing_year": 2023,
                "pages": 290,
                "quantity": 12,
                "price": 21.50
            },
            {
                "title": "The Great Conqueror",
                "ISBN": "HF-20204",
                "publishing_year": 2018,
                "pages": 360,
                "quantity": 4,
                "price": 25.00
            },
            {
                "title": "Echoes of the Past",
                "ISBN": "HF-20205",
                "publishing_year": 2020,
                "pages": 310,
                "quantity": 11,
                "price": 19.75
            }
        ]
    },
    {
        "category": "Science Fiction",
        "books": [
            {
                "title": "Space Odyssey",
                "ISBN": "SF-30301",
                "publishing_year": 2021,
                "pages": 500,
                "quantity": 6,
                "price": 30.00
            },
            {
                "title": "Galaxy of the Lost",
                "ISBN": "SF-30302",
                "publishing_year": 2019,
                "pages": 450,
                "quantity": 14,
                "price": 24.99
            },
            {
                "title": "Artificial Dawn",
                "ISBN": "SF-30303",
                "publishing_year": 2020,
                "pages": 340,
                "quantity": 18,
                "price": 22.50
            },
            {
                "title": "Planetary Wars",
                "ISBN": "SF-30304",
                "publishing_year": 2017,
                "pages": 400,
                "quantity": 8,
                "price": 27.50
            },
            {
                "title": "The Quantum Code",
                "ISBN": "SF-30305",
                "publishing_year": 2022,
                "pages": 380,
                "quantity": 10,
                "price": 25.00
            }
        ]
    },
    {
        "category": "Mystery & Thriller",
        "books": [
            {
                "title": "The Midnight Murder",
                "ISBN": "MT-40401",
                "publishing_year": 2018,
                "pages": 270,
                "quantity": 12,
                "price": 15.99
            },
            {
                "title": "Hidden Secrets",
                "ISBN": "MT-40402",
                "publishing_year": 2020,
                "pages": 320,
                "quantity": 16,
                "price": 19.99
            },
            {
                "title": "The Last Witness",
                "ISBN": "MT-40403",
                "publishing_year": 2019,
                "pages": 380,
                "quantity": 9,
                "price": 22.50
            },
            {
                "title": "Into the Shadows",
                "ISBN": "MT-40404",
                "publishing_year": 2021,
                "pages": 310,
                "quantity": 14,
                "price": 18.75
            },
            {
                "title": "Chasing the Truth",
                "ISBN": "MT-40405",
                "publishing_year": 2017,
                "pages": 290,
                "quantity": 7,
                "price": 16.99
            }
        ]
    }
]
let foundBooks = []

const cardsMainBody = document.getElementById('cards__main__body');
//Add NEW BOOK to books
function bookYear(book){
            if(Number(book.publishing_year) >= 2021){
                return `Publish Year: ${book.publishing_year} NEW BOOK!`
            } else {
                return `Publish Year: ${book.publishing_year}`  
            }
}
// Creates h1 Categorys names, used in displayBooks
function createCategoryText(inventory, cardsMainBody){

    inventory.forEach(category => {
        const cardsCategory = document.createElement('div')
        cardsCategory.classList.add('col-12', 'cards__category')

        const cardsCategoryText = document.createElement('h1');
        cardsCategoryText.textContent = category.category;

        cardsCategory.appendChild(cardsCategoryText);
        cardsMainBody.appendChild(cardsCategory);

        
        createCategoryBookCard(category.books, cardsMainBody)
    });
}
//Creates book cards
function createCategoryBookCard(category, cardsMainBody){
    category.forEach(book => {

        const cardsWrapperDiv = document.createElement('div');
        cardsWrapperDiv.classList.add('col-11','col-lg-3','cards__wrapper');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        const cardTextTitle = document.createElement('h5');
        cardTextTitle.classList.add('card-title');
        cardTextTitle.textContent = book.title;

        const cardTextIsbn = document.createElement('p');
        cardTextIsbn.classList.add('card-text', 'text-muted');
        cardTextIsbn.innerHTML = `ISBN: ${book.ISBN}`;

        const cardTextYear = document.createElement('p');
        cardTextYear.classList.add('card-text');
        cardTextYear.innerHTML = bookYear(book);

        const cardTextPages = document.createElement('p');
        cardTextPages.classList.add('card-text');
        cardTextPages.innerHTML = `Pages: ${book.pages}`;

        const cardTextQuantity = document.createElement('p');
        cardTextQuantity.classList.add('card-text');
        cardTextQuantity.innerHTML = `Quantity ${book.quantity}`;

        const cardTextPrice = document.createElement('p');
        cardTextPrice.classList.add('card-text');
        cardTextPrice.innerHTML = `Price: ${book.price}`;

        cardBodyDiv.appendChild(cardTextTitle);
        cardBodyDiv.appendChild(cardTextIsbn);
        cardBodyDiv.appendChild(cardTextYear);
        cardBodyDiv.appendChild(cardTextPages)
        cardBodyDiv.appendChild(cardTextQuantity);
        cardBodyDiv.appendChild(cardTextPrice);

        cardDiv.appendChild(cardBodyDiv);
        cardsWrapperDiv.appendChild(cardDiv);
        cardsMainBody.appendChild(cardsWrapperDiv);
    })
}
//Create one book 
function createOneBookDisplay(book){

        const cardsCategory = document.createElement('div')
        cardsCategory.classList.add('col-12', 'cards__category')

        const cardsCategoryText = document.createElement('h1');
        cardsCategoryText.textContent = book.category;

        cardsCategory.appendChild(cardsCategoryText);
        cardsMainBody.appendChild(cardsCategory);

        const cardsWrapperDiv = document.createElement('div');
        cardsWrapperDiv.classList.add('col-11','col-lg-3','cards__wrapper');

        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.classList.add('card-body');

        const cardTextTitle = document.createElement('h5');
        cardTextTitle.classList.add('card-title');
        cardTextTitle.textContent = book.title;

        const cardTextIsbn = document.createElement('p');
        cardTextIsbn.classList.add('card-text', 'text-muted');
        cardTextIsbn.innerHTML = `ISBN: ${book.ISBN}`;

        const cardTextYear = document.createElement('p');
        cardTextYear.classList.add('card-text');
        cardTextYear.innerHTML = `Publish Year: ${book.publishing_year}`;

        const cardTextPages = document.createElement('p');
        cardTextPages.classList.add('card-text');
        cardTextPages.innerHTML = `Pages: ${book.pages}`;

        const cardTextQuantity = document.createElement('p');
        cardTextQuantity.classList.add('card-text');
        cardTextQuantity.innerHTML = `Quantity ${book.quantity}`;

        const cardTextPrice = document.createElement('p');
        cardTextPrice.classList.add('card-text');
        cardTextPrice.innerHTML = `Price: ${book.price}`;

        cardBodyDiv.appendChild(cardTextTitle);
        cardBodyDiv.appendChild(cardTextIsbn);
        cardBodyDiv.appendChild(cardTextYear);
        cardBodyDiv.appendChild(cardTextPages)
        cardBodyDiv.appendChild(cardTextQuantity);
        cardBodyDiv.appendChild(cardTextPrice);

        cardDiv.appendChild(cardBodyDiv);
        cardsWrapperDiv.appendChild(cardDiv);
        cardsMainBody.appendChild(cardsWrapperDiv);
}
// Creates category selection list
function CreateCategorySelectionMenu(inventory) {
    const formSelect = document.getElementById('form-select');
    let i = 0;
    inventory.forEach(category => {
        const optionItem = document.createElement('option');
        optionItem.value = category.category;
        optionItem.innerText = `${category.category}`;

        formSelect.appendChild(optionItem)
    })
}

// Calculate value of inventory
function calculateValueAndDisplay(inventory) {
    function bookQuantityValue(book){
        return book.price * book.quantity;
    }
    //Category value
    function booksCategoryValue(category){
        let sumOfCategoryValue = 0;
        for(let book of category.books){
            sumOfCategoryValue += bookQuantityValue(book);
        }
        return sumOfCategoryValue;
    }
    //Inventory value
    function booksInventoryValue(inventory){
    let sumOfInventoryValue = 0;
        for(let category of inventory){
            sumOfInventoryValue += booksCategoryValue(category);
        }
    return sumOfInventoryValue;
    }

    const modalListBody = document.getElementById("modal-value-ul")
    document.querySelector('.modal-header .modal-title').innerText = `Inventory value: ${booksInventoryValue(inventory).toFixed(2)}\u20AC`
    inventory.forEach(category => {
        const categoryListItem = document.createElement('li')
        categoryListItem.classList.add('list-group-item', 'list-group-item-dark')
        categoryListItem.textContent = `Category: ${category.category} - Value: ${booksCategoryValue(category).toFixed(2)}\u20AC`
        modalListBody.appendChild(categoryListItem)

        category.books.forEach(book => {
            const bookListItem = document.createElement('li')
            bookListItem.classList.add('list-group-item')
            bookListItem.textContent = `${book.title} - ${book.price}\u20AC * ${book.quantity}QTY = ${bookQuantityValue(book).toFixed(2)}\u20AC`
            modalListBody.appendChild(bookListItem)
        })
    })
}

//Display all categorys and books
function displayAllBooks(inventory){
    cardsMainBody.innerHTML = '';
    createCategoryText(inventory, cardsMainBody)
}

//Title sorting
function sortBooksByTitleAsc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> a.title.localeCompare(b.title))
    }
    cardsMainBody.innerHTML = ``;
    displayAllBooks(inventory)
}
function sortBooksByTitleDesc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> b.title.localeCompare(a.title))
    }
    cardsMainBody.innerHTML = ``;
    displayAllBooks(inventory)
}
//Price sorting
function sortBooksByPriceAsc(inventory){
        for(let category of inventory){
            category.books.sort((a,b)=> a.price-b.price)
        }
        cardsMainBody.innerHTML = ``;
        displayAllBooks(inventory);
}

function sortBooksByPriceDesc(inventory){
    for(let category of inventory){
        category.books.sort((a,b)=> b.price-a.price)
    }
    cardsMainBody.innerHTML = ``;
    displayAllBooks(inventory);
}


//Books min or max price
function findBookMinPrice(inventory){
    const allBooks = inventory.flatMap(category => category.books.map(book => ({
        ...book, category: category.category
    })));
     maxPriceBook = allBooks[0];

    for (let book of allBooks) {
        if (book.price < maxPriceBook.price) {
            maxPriceBook = book;
        }
    }
    return maxPriceBook;
}

function findBookMaxPrice(inventory){
    const allBooks = inventory.flatMap(category => category.books.map(book => ({
        ...book, category: category.category
    })));
     maxPriceBook = allBooks[0];

    for (let book of allBooks) {
        if (book.price > maxPriceBook.price) {
            maxPriceBook = book;
        }
    }
    return maxPriceBook;

}

// Filter by pages, search input
function searchInputPagesAndValues(searchInputText, searchInputPages, selectedValue, inventory) {
    foundBooks = []
    let categoryBooks = []
    if (selectedValue !== "All Categories") {
        inventory.forEach(category => {
            if (selectedValue === category.category) {
                categoryBooks.push(...category.books);
                    categoryBooks.forEach(book => {
                        if (searchInputText && searchInputPages) {
                            if (Number(book.pages) >= Number(searchInputPages) && book.title.toLowerCase().includes(searchInputText.toLowerCase())) {
                                foundBooks.push({ ...book });
                            }
                        } else if (searchInputPages) {
                            if (Number(book.pages) >= Number(searchInputPages)) {
                                foundBooks.push({ ...book });
                            }
                        } else if (searchInputText) {
                            if (book.title.toLowerCase().includes(searchInputText.toLowerCase())) {
                                foundBooks.push({ ...book });
                            }
                        } else {
                            foundBooks.push({ ...book });
                        }
                    });
            }
        });
    } else {
        inventory.forEach(category => {
            category.books.forEach(book => {
                if (searchInputText && searchInputPages) {
                    if (Number(book.pages) >= Number(searchInputPages) && book.title.toLowerCase().includes(searchInputText.toLowerCase())) {
                        foundBooks.push({ ...book, category: category.category });
                    }
                } else if (searchInputPages) {
                    if (Number(book.pages) >= Number(searchInputPages)) {
                        foundBooks.push({ ...book, category: category.category });
                    }
                } else if (searchInputText) {
                    if (book.title.toLowerCase().includes(searchInputText.toLowerCase())) {
                        foundBooks.push({ ...book, category: category.category });
                    }
                } else {
                    foundBooks.push({ ...book });
                }
            });
        });
        
    }
    return foundBooks;
    
}
// Custom sorting
function CustomSortBooksByTitleAsc(inventory){
    inventory.sort((a,b)=> a.title.localeCompare(b.title))
    cardsMainBody.innerHTML = '';
    createCategoryBookCard(foundBooks, cardsMainBody)
}
function CustomSortBooksByTitleDesc(inventory){
    inventory.sort((a,b)=> b.title.localeCompare(a.title))
    cardsMainBody.innerHTML = '';
    createCategoryBookCard(foundBooks, cardsMainBody)
}

function CustomSortBooksByPriceAsc(inventory){
    inventory.sort((a,b)=> a.price-b.price)
    cardsMainBody.innerHTML = '';
    createCategoryBookCard(foundBooks, cardsMainBody)
}

function CustomSortBooksByPriceDesc(inventory){
    inventory.sort((a,b)=> b.price-a.price)
    cardsMainBody.innerHTML = '';
    createCategoryBookCard(foundBooks, cardsMainBody)
}

window.addEventListener('load', () => {
    CreateCategorySelectionMenu(inventory);
    displayAllBooks(inventory);
    document.querySelector('#searchInput').value = ''
    document.querySelector('#pagesInput').value = ''

    // Event listeners
    document.querySelector('#find-min-price').addEventListener('click', () => {
        const bookByPrice = findBookMinPrice(inventory);
        cardsMainBody.innerHTML = '';
        createOneBookDisplay(bookByPrice);
    });
    document.querySelector('#find-max-price').addEventListener('click', () => {
        const bookByPrice = findBookMaxPrice(inventory);
        cardsMainBody.innerHTML = '';
        createOneBookDisplay(bookByPrice);
    });

    document.querySelector('#calculate-Value').addEventListener('click',() => {
        calculateValueAndDisplay(inventory)
    })

    document.querySelector('#search-reset-button').addEventListener('click', () => {
        cardsMainBody.innerHTML = '';
        document.querySelector('#searchInput').value = ''
        document.querySelector('#pagesInput').value = ''
        document.querySelector('#form-select').value = 'All Categories'
        displayAllBooks(inventory);
    })


    document.querySelector('#filterButton').addEventListener('click', () => {
        const searchInputText = document.querySelector('#searchInput').value
        const searchInputPages = document.querySelector('#pagesInput').value
        const selectedValue = document.querySelector('#form-select').value
        cardsMainBody.innerHTML = '';
        createCategoryBookCard(searchInputPagesAndValues(searchInputText, searchInputPages, selectedValue, inventory), cardsMainBody);
    })
    document.querySelector('#sort-alpha-up').addEventListener('click', () => {
        if(foundBooks.length == 0){
            sortBooksByTitleAsc(inventory)
        }else {
            CustomSortBooksByTitleAsc(foundBooks)    
        }});
    document.querySelector('#sort-alpha-down').addEventListener('click', () => {
        if(foundBooks.length == 0){
            sortBooksByTitleDesc(inventory)
        }else {
            CustomSortBooksByTitleDesc(foundBooks) 
            
        }});
    document.querySelector('#sort-numeric-up').addEventListener('click', () => {
        if(foundBooks.length == 0){
            sortBooksByPriceAsc(inventory)
        }else {
            CustomSortBooksByPriceAsc(foundBooks)  
        }});
    document.querySelector('#sort-numeric-down').addEventListener('click', () => {
        if(foundBooks.length == 0){
            sortBooksByPriceDesc(inventory)
        }else {
            CustomSortBooksByPriceDesc(foundBooks) 
        }});
});




