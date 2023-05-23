const mydata = [
    {
      image: "./img/humo.png",
      code: "9860"
    },
    {
      image: "./img/uzcard.png",
      code: "8600"
    },
    {
      image: "./img/mastercard.png",
      code: "5300"
    },
    {
      image: "./img/visa.png",
      code: "4278"
    }
  ];
  
  const mybank = [
    {
      name: "Kapital Bank",
      code: "1650"
    },
    {
      name: "NBU",
      code: "2742"
    },
    {
      name: "TBC",
      code: "3572"
    },
    {
      name: "OFB",
      code: "1660"
    },
    {
      name: "SQB",
      code: "7532"
    },
    {
      name: "Xalq Banki",
      code: "1135"
    }
  ];
  
  const inputValues = [];
  
  const input = document.querySelector('.ss');
  const imageBank = document.querySelector('.bankImage');
  const banktitle = document.querySelector('.banktitle');
  
  const myFunc = () => {
    input.addEventListener('input', (e) => {
      let inputValue = e.target.value;
      inputValues.push(inputValue);
  
      if (inputValue.length === 4) {
        const matchedData = mydata.find((elem) => elem.code === inputValue);
        if (matchedData) {
          imageBank.src = matchedData.image;
        }
      } else if (inputValue.length === 8) {
        const matchedBank = mybank.find((elem) => elem.code === inputValue.substring(4));
        if (matchedBank) {
          banktitle.innerHTML = matchedBank.name
        }
      }
    });
  };
  
  myFunc();



  //Birinchi mydata degan o'zgaruvchi ochip oldim undan so'ng array ochdim arrayni ichida berilgan
  //qiymatlarni object ga orap oldim. Undan so'ng yana o'zgaruvchi ochdim uni nomini mybank deb 
  //nomladim. Yana o'zgaruvchi ochip uni inputValeu deb nomladim va uni bo'sh arrayga tenglap qo'ydim.
  //Undan so'ng htmldan o'zmga kerakli bo'lgan taglarni document.querySelector orqali chaqirip oldim.
  //Myfunc degan funksiya yozdim va funksiya if else orqali shart berdim.