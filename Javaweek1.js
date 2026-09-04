// أول كود للتأكد إن JavaScript شغالة
console.log("JavaScript is working");

// window هو الكائن العام الأكبر في المتصفح
console.log(window);

// document بيمثل صفحة HTML نفسها
console.log(document);

// بنجيب العناصر اللي هنشتغل عليها من الصفحة
const titleElement = document.getElementById("page-title");
const infoElement = document.getElementById("info");
const typesElement = document.getElementById("types");

// متغيرات بأنواع بيانات مختلفة
var trackName = "JavaScript Basics";
let userName = "Mostafa";
let userAge = 22;
let isStudent = true;
let emptyValue = null;
let futureValue;

// دمج النصوص مع القيم في جملة واحدة
let message =
  "الكورس: " +
  trackName +
  " | الاسم: " +
  userName +
  " | العمر: " +
  userAge +
  " | طالب؟ " +
  isStudent;

// عرض البيانات داخل الصفحة
titleElement.textContent = "أهلاً يا " + userName;
infoElement.textContent = message;

// typeof بتساعدني أعرف نوع البيانات
typesElement.innerHTML =
  "نوع userName: " +
  typeof userName +
  "<br>" +
  "نوع userAge: " +
  typeof userAge +
  "<br>" +
  "نوع isStudent: " +
  typeof isStudent +
  "<br>" +
  "نوع emptyValue: " +
  typeof emptyValue +
  "<br>" +
  "نوع futureValue: " +
  typeof futureValue;

// ملحوظة مهمة: null لما نستخدم typeof عليه هيدينا object
// دي نقطة معروفة في JavaScript ومش معناها إن null بقى object فعلاً

// مثال على خطأ شائع - سيبه كومنت علشان الكود يفضل شغال
// document.getElementByID("info");
// الغلط هنا إن Id اتكتبت ID بحرف D كبير، والصح getElementById
// console.log("My name is mostafa");
// console.log("I am learning javascript");
// console.log("this is my recovery mode");

// const userName = "Mostafa";
// let userAge = 22;
// let userScore= 1;

// console.log(userName);
// console.log(userAge);
// console.log(userScore);

// userAge = 21;
// userScore= 100;
// console.log(userAge)
// console.log(userScore)

// let studenName = "Mostafa";
// let studentAge = 22;
// let courseName = "JavaScript";

// console.log(studenName);
// console.log(studentAge);
// console.log(courseName);

// studenAge = 23;
// console.log(studentAge);

// let x = 10;
// let y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// let points = 100;
// points+= 20;
// console.log(points)
// points-= 20;
// console.log(points)
// points*= 40;
// console.log(points)
// points/= 2;
// console.log(points)
