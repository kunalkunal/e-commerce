/* .....Global Imports....  */
global.CONFIG = require("./configs");

const express = require('express');
const cors = require('cors');
const PORT = CONFIG.SERVER_PORT || 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json())

app.use("/api", require('./routes')) 

// Catch any bad requests   
app.get('*', (req, res) => {
    res.status(RESPONSE_STATUS.NOT_FOUND).json({
        msg: 'Sorry, This route is not found on this server',
    });
});


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));