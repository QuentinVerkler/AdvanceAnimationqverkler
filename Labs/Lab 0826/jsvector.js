
// JSVector -- a Javascript 2D vector class

// The class constructor
function JSVector(x,y){
  this.x = x;
  this.y = y;
}

// Set the magnitude of the vector,
// retaining the angle (direction).
JSVector.prototype.setMagnitude = function(mag){
  var x2 = mag * cos(this.getDirection());
  var y2 = mag * sin(this.getDirection());
  this.x = this.x + x2;
  this.y = this.y + y2;
}

// Get the magnitude of the vector using pythagorean theorem
JSVector.prototype.getMagnitude = function(){
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
 }

// Set the angle (direction) of the vector,
// retaining the magnitude.
JSVector.prototype.setDirection = function(angle){
  var mag = this.getMagnitude();
}

// Get the direction (angle) of the vector
JSVector.prototype.getDirection = function(){
  Math.atan2(this.y, this.x);
}

// Add another vector to this vector
JSVector.prototype.add = function(v2){
  this.x = v2.x + this.x;
  this.y = v2.y + this.y;
}

// Subtract another vector from this vector
JSVector.prototype.sub = function(v2){
  this.x = this.x - v2.x;
  this.y = this.y - v2.y;
}

// Class method to return a new vector that is the sum of two vectors
JSVector.addGetNew = function(v1,v2){
  v1.x = v1.x + v2.x;
  v1.y = v1.y + v2.y;
  return v1;
}

// Class method to return a new vector that is the difference of two vectors
JSVector.subGetNew = function(v1,v2){
  v1.x = v1.x - v2.x;
  v1.y = v1.y - v2.y;
  return v1;
}

// Multiply this vector by a scalar
JSVector.prototype.multiply = function(scalar){
  this.x = this.x * scalar;
  this.y = this.y * scalar;
}

// Divide this vector by a scalar
JSVector.prototype.divide = function(scalar){
  this.x = this.x / scalar;
  this.y = this.y / scalar;
}

// Normalize this vector so that it has a magnitude of 1
JSVector.prototype.normalize = function(){
  var mag = this.getMagnitude();
  this.x = this.x/mag;
  this.y = this.y/mag;
}

// Limit the magnitude of this vector
JSVector.prototype.limit = function(lim){
  if(this.mag >lim)
    this.mag = lim;
}

// Get the distance between this vector and another one
JSVector.prototype.distance = function(v2){

}

// Get square of the distance between this vector and another one
JSVector.prototype.distanceSquared = function(v2){

}

// Rotate this vector by some number of radians
// using the rotation matrix |  cos   -sin  |
//                           |  sin   +cos  |
JSVector.prototype.rotate = function(angle) {

}

// Get the angle between this vector and another one
JSVector.prototype.angleBetween = function(v2){
}

// Make a copy of this vector
JSVector.prototype.copy = function(){
 }

// Override inherited toString() to describe this instance
JSVector.prototype.toString = function() {

}
