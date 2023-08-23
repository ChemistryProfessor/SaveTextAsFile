const $ = document;
const textarea = $.querySelector("textarea"),
fileNameInput = $.querySelector(".file-name input"),
selectMenu = $.querySelector(".save-as select"),
saveBtn = $.querySelector(".save-btn");

selectMenu.addEventListener("change" , () => {//* کار اینم تغییر متن دکمه دانلود هستش تو عملکرد تائثیر نداره بیشتر برای زیبایی جالبه
    let selectedOption = selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText = `Save As ${selectedOption.split(" ")[0]} File`;
})

//? چیز هایی که لازم داریم رو سلکت کردیم
//* پروژه زیاد پیچیده ای نیست کل کاری که لازم داریم برای به انتها کافیه بعد زدن دکمه ولیو تکست اریا رو دریافت کنیم و با 
//? توجه به اپشن سلکت شده بعد زده شدن دکمه ولیو دریافت شدرو در قالب یه فایل برای کاربر دانلود کنیم

//* A-1 ----------------------------------------
//? واسه شروع کار باید بریم به اپشن های سلکتد که نوشتیم پسوند فایلی که میخوایم بعد زدن اون ها دانلود شرو به عنوان ولیو بدیم
//? پسوند مورد نظر رو از سایت زیر پیدا کنید
//? https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
//? حتی ما میتونیم فایل های ایکون موسیقی یا سی اس اس یا زبان های نشانه گذاری و زبان های برنامه نویسی بزاریم
//? همشون پسوندشون تو سایت زیر موجوده

//* بعد این نیاز داریم از بلاب یا حباب استفاده کنیم میتونید در داکیومنت زیر راجبش بخونید
//* https://developer.mozilla.org/en-US/docs/Web/API/Blob
//* به طور کلی رابط فایل ها هستن که با استفاده از جی اس ما بتونیم همچین پروژه ای رو انجام بدیم
saveBtn.addEventListener("click" , () => {
    //* در  واقع این بلاد یه شی هستش که برای داده های دودویی مانند متن تصویر و غیره استفاده میشود
    const blob = new Blob([textarea.value] , {type: selectMenu.value});
    const fileUrl = URL.createObjectURL(blob);
    const link = $.createElement("a");
    link.download = fileNameInput.value;
    link.href = fileUrl;
    link.click(); 
});
//* A-1 ----------------------------------------


















