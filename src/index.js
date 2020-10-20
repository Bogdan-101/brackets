module.exports = function check(text, bracketsConfig) {
    var i,
            l=text.length,
            char,
            last,
            stack=[];

        for(i=0; i<l; i++){
            char=text[i];

            for(let j=0; j<bracketsConfig.length; j++) {
                if(char == bracketsConfig[j][0] && bracketsConfig[j][1]!==stack[stack.length - 1]){
                    stack.push(char);
                }else if(char == bracketsConfig[j][1]){
                    if(stack.length>0){
                        last=stack[stack.length-1];
                        if ((char == bracketsConfig[j][1] && last == bracketsConfig[j][0])) {
                            stack.pop();
                        }
                    } else {
                        return false;
                    }
                }
            }
        }

        return stack.length == 0;
}
