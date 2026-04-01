// app.js

// User authentication
class UserAuth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
    }

    register(username, password) {
        const user = { username, password };
        this.users.push(user);
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    login(username, password) {
        return this.users.some(user => user.username === username && user.password === password);
    }
}

// Ticket booking management
class TicketBooking {
    constructor() {
        this.bookedTickets = JSON.parse(localStorage.getItem('bookedTickets')) || [];
    }

    bookTicket(ticketInfo) {
        this.bookedTickets.push(ticketInfo);
        localStorage.setItem('bookedTickets', JSON.stringify(this.bookedTickets));
    }

    getBookedTickets() {
        return this.bookedTickets;
    }
}

// Cart management
class Cart {
    constructor() {
        this.cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    }

    addToCart(item) {
        this.cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

    getCartItems() {
        return this.cartItems;
    }

    clearCart() {
        this.cartItems = [];
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
}

// Example usage:
const auth = new UserAuth();
auth.register('user1', 'password1');
console.log(auth.login('user1', 'password1')); // true

const booking = new TicketBooking();
booking.bookTicket({ id: 1, date: '2026-04-01', park: 'Amusement Park' });
console.log(booking.getBookedTickets());

const cart = new Cart();
cart.addToCart({ name: 'Ticket', price: 50 });
console.log(cart.getCartItems());


