import app from "./app";
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('Shopping Cart API server listening on port ' + PORT);
})