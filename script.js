const passwordInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const toggleBtn = document.getElementById("toggleBtn");
/*
document 指网页本身，html文档
getElementById("password") 是获取网页中id为"password"的元素
toggleBtn 是获取网页中id为"toggleBtn"的元素 
toggle 切换（我提到的显示和隐藏）btn--button
*/

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  let strength = 0;

  // 判定ルール（字數少場合）
  /*（字數多的情況下）
  3種類以上の文字種を含む場合は強度を上げる
  英語、数字、記号のいずれかを含む
  8文字以上であれば強度を上げる

  "string" 字符串
  
  // 實際運行：調用函数
let score = checkPasswordStrength("abcABC123!");
console.log(score);  // 輸出 4

^（在最前面）	表示“取反”，也就是“不匹配这些”

value 是指string，可以是变量名。eg：value="abcABC123!"
console.log(strength); // 打印变量值，控制台查看结果（在控制台里输出的意思）
const 是指 常量，不能被重新赋值。eg：const value = "abc123"。如果需要修改，可以使用let或var。
意思是："创建一个名字叫value的box，里面装着文字abc123"
const regex = /abc/  // 创建一个检查有没有abc的工具

regex  // regular expression 正規表現（检查工具）
const regex = /abc/;  // 创建一个检查有没有abc的工具（string里面）

  */

  if (value.length >= 8) strength++;
  if (/[A-Z]/.test(value)) strength++;
  if (/[0-9]/.test(value)) strength++;
  if (/[^A-Za-z0-9]/.test(value)) strength++;


  /*
  [^A-Za-z0-9]。/.../是正则表达式的开始和结束。regular expression 正規表現で英数字以外の文字を含む場合は強度を上
  console.log(checkPasswordStrength("abcABC123!"));
  "abcABC123!" a+1，A+1，1+1，!+1。strength = 4
  パスワード数字、英語、記号を含む8文字以上
  
  */


  /*
  break // 跳出判断， 结束这个case

  */
// 強度表示

  switch (strength) {
    case 0:
      strengthBar.style.background = "#8A716C"; 
      strengthText.textContent = "パスワード強度：未入力";
      break;
    case 1:
      strengthBar.style.background = "#200702";
      strengthText.textContent = "パスワード強度：弱い";
      break;
    case 2:
      strengthBar.style.background = "orange";
      strengthText.textContent = "パスワード強度：普通";
      break;
    case 3:
      strengthBar.style.background = "yellowgreen";
      strengthText.textContent = "パスワード強度：やや強い";
      break;
    case 4:
      strengthBar.style.background = "green";
      strengthText.textContent = "パスワード強度：強い";
      break;
  }
  
});

// 密码显示/隐藏切换

toggleBtn.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";         // 显示パスワード
    toggleBtn.textContent = "👀";       
  } else {
    passwordInput.type = "password";     // 隐藏パスワード
    toggleBtn.textContent = "🙈";        
  }
});


// script.js（hhg）
document.addEventListener("DOMContentLoaded", () => {
  // 等网页加载完成后执行（保证html elemrnts都能找到）
  const buttons = document.querySelectorAll(".btn");
  // 获取所有class为btn的元素
    buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      // 为每个按钮添加点击事件
      // e.preventDefault(); // 1.阻止<a href="#">默认行为(the default behavior of the <a href="#"> tag)
                           // 2.弹出提示框alert替代跳转
                        
     //  alert("Workout details coming soon!");
    });
  });
});

// 跳转lgin
document.getElementById("loginBtn").addEventListener("click", function () {
  // 这里可以做密码检查，比如密码不为空
  const password = document.getElementById("password").value;
  if (password.length > 0) {
    // 跳转到 index.html（自己定的网页名称）
    window.location.href = "hhg.html";
  } else {
    alert("パスワードを入力してください"); // 弹出提示
  }
});

/*后面可接网址  
window.location.href = "https://www.google.com"; 
*/
// 跳转到hhg introduction.html

