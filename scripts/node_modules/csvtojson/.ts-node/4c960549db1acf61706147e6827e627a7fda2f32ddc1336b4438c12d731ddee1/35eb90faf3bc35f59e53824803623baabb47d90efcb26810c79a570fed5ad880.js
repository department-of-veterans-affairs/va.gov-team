"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//return first eol found from a data chunk.
function default_1(data, param) {
    if (!param.eol && data) {
        for (var i = 0, len = data.length; i < len; i++) {
            if (data[i] === "\r") {
                if (data[i + 1] === "\n") {
                    param.eol = "\r\n";
                    break;
                }
                else if (data[i + 1]) {
                    param.eol = "\r";
                    break;
                }
            }
            else if (data[i] === "\n") {
                param.eol = "\n";
                break;
            }
        }
    }
    return param.eol || "\n";
}
exports.default = default_1;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL2t4aWFuZy93b3JrL3Byb2plY3RzL2NzdjJqc29uL3NyYy9nZXRFb2wudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9reGlhbmcvd29yay9wcm9qZWN0cy9jc3YyanNvbi9zcmMvZ2V0RW9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQTJDO0FBQzNDLG1CQUF5QixJQUFZLEVBQUUsS0FBbUI7SUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO1FBQ3RCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUNwQixJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO29CQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztvQkFDbkIsTUFBTTtpQkFDUDtxQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RCLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO29CQUNqQixNQUFNO2lCQUNQO2FBQ0Y7aUJBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUMzQixLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztnQkFDakIsTUFBTTthQUNQO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUM7QUFDM0IsQ0FBQztBQWxCRCw0QkFrQkM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFyc2VSdW50aW1lIH0gZnJvbSBcIi4vUGFyc2VSdW50aW1lXCI7XG4vL3JldHVybiBmaXJzdCBlb2wgZm91bmQgZnJvbSBhIGRhdGEgY2h1bmsuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZGF0YTogc3RyaW5nLCBwYXJhbTogUGFyc2VSdW50aW1lKTogc3RyaW5nIHtcbiAgaWYgKCFwYXJhbS5lb2wgJiYgZGF0YSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoZGF0YVtpXSA9PT0gXCJcXHJcIikge1xuICAgICAgICBpZiAoZGF0YVtpICsgMV0gPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBwYXJhbS5lb2wgPSBcIlxcclxcblwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFbaSArIDFdKSB7XG4gICAgICAgICAgcGFyYW0uZW9sID0gXCJcXHJcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBcbiAgICAgIH0gZWxzZSBpZiAoZGF0YVtpXSA9PT0gXCJcXG5cIikge1xuICAgICAgICBwYXJhbS5lb2wgPSBcIlxcblwiO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhcmFtLmVvbCB8fCBcIlxcblwiO1xufTtcbiJdfQ==