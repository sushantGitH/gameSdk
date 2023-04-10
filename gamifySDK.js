
gamifySDK = {
  init: function() {
    // quit if this function has already been called
    if (arguments.callee.done) return;
    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    // kill the timer
    if (_timer) clearInterval(_timer);
    
    if (!document.createElement || !document.getElementsByTagName) return;
    
  },
  formatCash: function(thinEnabled,n) {

    console.log("added");
    console.log("new");

    if (!(thinEnabled)) 
        return n;

    let newVal = Math.floor( n );
    let precesion = 3;

    let isNegativeValue = false;
    if(newVal < 0){
        isNegativeValue = true;
        newVal *= -1;
        n *= -1;
    }

    let value;
    function toFixedTrunc(x, n) {
        const v = (typeof x === 'string' ? x : x.toString()).split('.');
        if (n <= 0) return v[0];
        let f = v[1] || '';
        if (f.length > n) {
            f = f.substr(0,n);
            while(f.substr(f.length-1) === "0"){
                f = f.substr(0,f.length-1);
            }
        }
        // while (f.length < n) f += '0';
        let val = `${v[0]}${f.length > 0 ? "." : ""}${f}`;
        return val;
    }

    if (newVal < 1e3) value = n;
    if (newVal >= 1e3 && newVal < 1e6) value = toFixedTrunc(newVal / 1e3,precesion) + "K";
    if (newVal >= 1e6 && newVal < 1e9) value = toFixedTrunc(newVal / 1e6,precesion) + "M";
    if (newVal >= 1e9 && newVal < 1e12) value = toFixedTrunc(newVal / 1e9,precesion) + "B";
    if (newVal >= 1e12) value = toFixedTrunc(newVal / 1e12,precesion) + "T";

    return isNegativeValue ? "-"+value : value;
  }
}