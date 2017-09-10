var Cookie = module.exports = function Cookie(options) {  
  this.path = '/';  
  this.maxAge = null;  
  this.httpOnly = true;  
  if (options) merge(this, options);  
  this.originalMaxAge = undefined == this.originalMaxAge  
    ? this.maxAge  
    : this.originalMaxAge;  
  //默认的originalMaxAge就是this.maxAge也就是null,如果指定了originalMaxAge那么就是用户指定的值  
};