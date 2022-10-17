let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

for (let i = 0; i <= 10; i++){
    if(i % 2 == 0){
        console.log('Число парне');
    }else{
        console.log('Число непарне');
    }
}

let num = 20;

while (num <= 28){
    console.log(num);
    num++;
}

let Name = prompt(`Введіть ім'я`);

while (Name.length < 6){
    console.log(Name);
    Name = prompt(`Введіть ім'я`);
}