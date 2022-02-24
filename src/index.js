module.exports = function check(str, bracketsConfig) {
  // your solution

  var array = Array.from(bracketsConfig);
    var openBr = [];
    var closeBr = [];
    var box = [];

    if (str.length % 2 != 0) {
        return false; };

    for (var i = 0; i < array.length; i++) {
        var pairs = array[i];
        var open = Array.from(pairs[0]);
        var close = Array.from(pairs[1]);
        closeBr.push(close.toString());
        openBr.push(open.toString());
        
    };

    return correct(str);

    function correct(str) {
        for (var i = 0; i < str.length; i++) {
            var br = str[i];
              if (openBr.includes(br) && closeBr.includes(br) && box.includes(br)) {
                var open = box.pop();
                var opNum = openBr.indexOf(open);
                var close = closeBr[opNum];
                   if (close != br) {
                    return false;
                };

            } 
            
            else if (openBr.includes(br)) {
                  box.push(br);
            } 
            
            else if (closeBr.includes(br)) {
                var open = box.pop();
                var opNum = openBr.indexOf(open);
                var close = closeBr[opNum];
                  if (close != br) {
                    return false;
                }
            } 
            
              else {
            return false;
            }
        }
        return true;
    };
}
