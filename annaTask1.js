db.transactions.aggregate([
    {
        $match: { currency: "eur" }
    },
    { $sample: { size: 1 } }
]);
