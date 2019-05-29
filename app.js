var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  methodOverride = require("method-override"),
  passportLocalMongoose = require("passport-local-mongoose"),
  User = require("./models/user"),
  Types = require("./models/types"),
  Task = require("./models/task"),
  Pic = require("./models/pictures");

var indexRoutes = require("./routes/index"),
  homeRoutes = require("./routes/home"),
  catagoriesRoutes = require("./routes/catagories"),
  photographyRoutes = require("./routes/list"),
  profileRoutes = require("./routes/profiles");
var app = express();
mongoose.connect('mongodb://localhost:27017/uPlan', {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
  extended: true
}));
app.set("view engine", "ejs");

app.use(require("express-session")({
  secret: "Boxer is the cutest dog",
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(__dirname + "/public"));
app.use('/uploads', express.static('uploads'));
app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

app.use(indexRoutes);
app.use(homeRoutes);
app.use("/catagories", catagoriesRoutes);
app.use("/list", photographyRoutes);
app.use("/profile", profileRoutes);

app.listen(3000, function() {
  console.log("Server is on.");
});
