const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ 
        status: 500, 
        response: "Something went wrong" 
    });
};

module.exports = errorHandler;
