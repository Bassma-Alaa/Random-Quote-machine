// Array of quotes
        const quotes = [
            "Be yourself; everyone else is already taken. - Oscar Wilde",
            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best. - Marilyn Monroe",
            "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
            // Add more quotes here
        ];

        // Function to get a random quote from the array
        function getRandomQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const quote = quotes[randomIndex];
            document.getElementById('quoteContainer').textContent = quote;
        }

        // Event listener for the button click
        document.getElementById('generateBtn').addEventListener('click', getRandomQuote);