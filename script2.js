// Створити клас SuperMath.
//
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
//
//     Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
//
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
//
//     p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

const X = prompt("Введіть X:");
const Y = prompt("Введіть Y:");
const znak = prompt("Введіть операцію (+, -, *, /, %):");

class SuperMath {
    check(obj) {
        const question = confirm(`Ви хочете зробити дію ${obj.znak} з ${obj.X} та ${obj.Y}?`);
        if (!question) return this.input();

        if (['+', '-', '*', '/', '%'].includes(obj.znak)) {
            let result;
            switch (obj.znak) {
                case '+':
                    result = Number(obj.X) + Number(obj.Y);
                    break;
                case '-':
                    result = Number(obj.X) - Number(obj.Y);
                    break;
                case '*':
                    result = Number(obj.X) * Number(obj.Y);
                    break;
                case '/':
                    if (Number(obj.Y) === 0) {
                        console.log("Помилка: Ділення на нуль!");
                        return;
                    }
                    result = Number(obj.X) / Number(obj.Y);
                    break;
                case '%':
                    result = Number(obj.X) % Number(obj.Y);
                    break;
            }

            alert(`Результат: ${obj.X} ${obj.znak} ${obj.Y} = ${result}`);
            return;
        }
        
        alert("Помилка: Непідтримувана математична операція.");
        this.input();
    }

    input() {
        const obj = {};
        obj.X = parseFloat(prompt("Введіть X:"));
        obj.Y = parseFloat(prompt("Введіть Y:"));
        obj.znak = prompt("Введіть операцію (+, -, *, /, %):");
        this.check(obj);
    }
}

const obj = {X, Y, znak};

const p = new SuperMath();
p.check(obj);