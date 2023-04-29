import Expense from "../models/expense";

export const EXPENSES = [
    new Expense('e1', 'Book', 14.99, new Date()),
    new Expense('e2', 'Vegetables', 5.99, new Date('2023-03-26 00:00:00')),
    new Expense('e3', 'Bananas', 3.58, new Date('2023-03-27 00:00:00')),
    new Expense('e4', 'Book', 10.28, new Date('2023-03-28 00:00:00')),
    new Expense('e5', 'Potatos', 7.50, new Date('2023-03-29 00:00:00')),
    new Expense('e6', 'Coffe', 6.39, new Date('2023-03-30 00:00:00')),
    new Expense('e7', 'Breakfast', 3.68, new Date('2023-01-03 00:00:00')),
]