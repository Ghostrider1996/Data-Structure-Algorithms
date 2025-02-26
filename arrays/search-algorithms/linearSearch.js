const array1 = [1, 3, 4, 7, 9, 10, 32, 54, 67, 88, 100, 123, 145, 176, 23, 54, 7, 21, 7, 9];
const array2 = [
    "book", "dvd", "movie", "game", "number", "fridge", "airplane",
    "ocean", "mountain", "river", "tree", "cloud", "computer", "coffee",
    "bicycle", "planet", "piano", "sunflower", "jungle", "forest"
];

const array3 = [
    {
        bookTitle: "Harry Potter and the Philosopher's Stone",
        description: "A fantasy novel by J.K. Rowling that introduces Harry Potter and his journey at Hogwarts."
    },
    {
        bookTitle: "The Lord of the Rings",
        description: "An epic high fantasy novel by J.R.R. Tolkien, chronicling the quest to destroy the One Ring."
    },
    {
        bookTitle: "A Game of Thrones",
        description: "The first book in George R.R. Martin's A Song of Ice and Fire series, filled with political intrigue and epic battles."
    },
    {
        bookTitle: "Alice's Adventures in Wonderland",
        description: "A classic tale by Lewis Carroll about a girl's journey through a fantastical world."
    },
    {
        bookTitle: "To Kill a Mockingbird",
        description: "Harper Lee's timeless novel exploring themes of racial injustice and moral growth in the American South."
    },
    {
        bookTitle: "1984",
        description: "George Orwell's dystopian novel that explores the dangers of totalitarianism and extreme political ideology."
    },
    {
        bookTitle: "The Great Gatsby",
        description: "F. Scott Fitzgerald's classic depiction of the glamour and excess of the Jazz Age in America."
    },
    {
        bookTitle: "Moby Dick",
        description: "Herman Melville's epic tale of obsession and revenge on the high seas, featuring the great white whale."
    },
    {
        bookTitle: "Pride and Prejudice",
        description: "Jane Austen's beloved novel of manners and romance set in early 19th-century England."
    },
    {
        bookTitle: "War and Peace",
        description: "Leo Tolstoy's monumental work that weaves the lives of several families during the Napoleonic Wars."
    },
    {
        bookTitle: "The Catcher in the Rye",
        description: "J.D. Salinger's novel about teenage angst and alienation, narrated by Holden Caulfield."
    },
    {
        bookTitle: "The Hobbit",
        description: "J.R.R. Tolkien's prelude to The Lord of the Rings, following Bilbo Baggins on an unexpected adventure."
    },
    {
        bookTitle: "Fahrenheit 451",
        description: "Ray Bradbury's dystopian classic where books are banned and 'firemen' burn any that are found."
    },
    {
        bookTitle: "Brave New World",
        description: "Aldous Huxley's visionary novel depicting a technologically advanced society with dark undertones."
    },
    {
        bookTitle: "The Chronicles of Narnia",
        description: "C.S. Lewis's series of fantasy novels that transport readers to the magical land of Narnia."
    },
    {
        bookTitle: "The Da Vinci Code",
        description: "Dan Brown's gripping thriller that combines art, history, and conspiracy in a fast-paced narrative."
    },
    {
        bookTitle: "The Kite Runner",
        description: "Khaled Hosseini's emotionally charged novel about friendship and redemption set against Afghanistan's turbulent history."
    },
    {
        bookTitle: "Crime and Punishment",
        description: "Fyodor Dostoevsky's psychological exploration of guilt, redemption, and moral dilemmas in 19th-century Russia."
    },
    {
        bookTitle: "The Alchemist",
        description: "Paulo Coelho's inspiring tale of self-discovery and the pursuit of one's dreams across diverse landscapes."
    },
    {
        bookTitle: "The Hitchhiker's Guide to the Galaxy",
        description: "Douglas Adams's humorous and satirical science fiction adventure through space, filled with wit and absurdity."
    }
];


function linearSearch(array, target) {

    for (let index = 0; index < array.length; index++) {
        const element = array[index];



        if (typeof element === "object") {
            if (element.bookTitle === target) return `Target Element ${element.bookTitle} with description: ${element.description} found at Index: ${index}.`
        } else {
            if (element === target) return `Target Element: ${element} found at Index: ${index}`
        }
    }

    return -1;

}

console.log(linearSearch(array1, 21));
console.log(linearSearch(array2, "forest"));
console.log(linearSearch(array3, "The Hitchhiker's Guide to the Galaxy"));

