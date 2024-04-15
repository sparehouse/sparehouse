const express = require('express');
const app = express();
const { body, validationResult } = require('express-validator');
const port = 3000;
const users = [];

app.use(express.json());

app.post('/signup', [
    body('name').notEmpty().withMessage("Name is required"),
    body('email').notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body('password').notEmpty().withMessage("Password is required").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { name, email, password } = req.body;
        const findUser = users.find((data) => email === data.email);
        if (findUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        users.push({ name, email, password });
        return res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log("Server is running");
});

