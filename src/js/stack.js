/**
 * 堆栈
 * */
/**
 * 给定一个只包含（）[] {}的字符串，判断字符串是否有效；
 */

function isValid (str) {
  const stack = [];
  const temp = {'(': ')', '[': ']', '{': '}'};
  // 如果不考虑有符号之外的字符场景，不用定义temp_reverse字段即可。
  const temp_reverse = {')': '(', ']': '[', '}': '{'};
  const strArr = str.split('');
  for (let key in strArr) {
    let s = strArr[key];
    if (temp[s])
      stack.unshift(s);
    else {
      const stackTop = stack[0];
      if (temp[stackTop] === s) {
        stack.shift();
      } else if (temp_reverse[s]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

const string = '((a[f1]faasfd))asja[sfd]{sdf()}';
console.log(isValid(string));