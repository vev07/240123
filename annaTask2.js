db.posts.aggregate([
    { $match: { author_id: 1 } },
    { $sort: { created_at: -1 } }
]);
