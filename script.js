body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.container {
    width: 90%;
    max-width: 600px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}

h1 {
    color: #333;
    margin-bottom: 20px;
}

.input-container {
    margin-bottom: 15px;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 5px;
    color: #555;
}

input[type="number"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

.button-group {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

button {
    padding: 10px 15px;
    margin: 0 5px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#calculateButton {
    background-color: #007bff;
    color: white;
}

#resetButton {
    background-color: #6c757d;
    color: white;
}

button:hover {
    opacity: 0.8;
}

.result {
    margin-top: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: #28a745;
}

.iframe-container {
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden;
}

iframe {
    width: 100%;
    height: 500px;
    border: none;
}

@media (max-width: 480px) {
    .button-group {
        flex-direction: column;
    }
    button {
        margin: 5px 0;
    }
}
