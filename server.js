var express = require('express');

var indexRouter = require('./routes/check');
var memoListRouter = require("./routes/MemoListRout");

var app = express();

app.use('/', indexRouter);
app.use("/memoList", memoListRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));