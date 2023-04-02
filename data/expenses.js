import Expense from "../models/expense";

export const EXPENSES = [
    new Expense('e1', 'Book', 14.99, new Date()),
    new Expense('e2', 'Vegetables', 5.99, new Date(2023, 3, -5)),
    new Expense('e3', 'Bananas', 3.58, new Date(2023, 3, -4)),
    new Expense('e4', 'Book', 10.28, new Date(2023, 3, -3)),
    new Expense('e5', 'Potatos', 7.50, new Date(2023, 3, -2)),
    new Expense('e6', 'Coffe', 6.39, new Date(2023, 3, -1)),
    new Expense('e7', 'Breakfast', 3.68, new Date(2023, 1, 3)),
]