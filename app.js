const features = require('./config');

console.log(`Current environment: ${process.env.NODE_ENV || 'development'}`);

if (features.Albums) {
  console.log("Albums feature is enabled!");
} else {
  console.log("Albums feature is disabled.");
}

if (features.Avatar) {
  console.log("Avatar feature is enabled!");
} else {
  console.log("Avatar feature is disabled.");
}

