# Керівні принципи проєкту 

## 1. Структура проєкту

Проєкт дотримується конкретної структури для забезпечення узгодженості в процесі розробки та супроводу.
Вихідний код розташований у теці `source`, а скомпільований — у теці `lib`.

## 2. Структура вихідного коду

Вихідний код поділяється на модулі, які розташовані в теках в теці `source`:
- `colors-css` — модулі, що реалізують кольори
- `common-css` — модулі, що реалізують загальні стилі
- `common-js` — модулі, що реалізують загальні функції
- `components` — модулі, що реалізують компоненти
- `core` — модулі, що реалізують ядро бібліотеки
- `datetime` — модуль, що реалізує компоненти для роботи з датою та часом
- `dom` — модуль, що реалізує компоненти для роботи з DOM
- `extensions` — модулі, що реалізують розширення стандартних JavaScript об'єктів
- `farbe` — модуль, що реалізує роботу з кольором
- `guardian` — модуль, що реалізує функції валідації даних
- `hooks` — модулі, що реалізують хуки (`useMemo`, `useState`, `useEffect`, тощо)
- `html` — модулі, що реалізують функції для створення HTML елементів на JavaScript
- `i18n` — модулі, що реалізують функції для роботи з локалізацією
- `icons` — модулі, що реалізують функції для роботи з іконками
- `include` — LESS модулі, що реалізують змінні стилів та міксіни
- `model` — модуль, що реалізує функції для роботи з реактивною моделлю даних
- `reset` — модуль, що реалізує скидання стилів
- `router` — модуль, що реалізує функції для роботи з маршрутизацією для SPA
- `string` — модуль, що реалізує функції для роботи з рядками

Окремі файли в теці `source`:
- `index.js` — точка входу для бандлерів, включає в зборку всі компоненти та стилі
- `i18n.js` — точка входу для бандлерів, включає всі локалізації
- `icons.js` — точка входу для бандлерів, включає всі іконки
- `runtime.js` — точка входу для бандлерів, включає в зборку всі функції, які не є компонентами і стилями
- `default.js` — точка входу для бандлерів, включає в зборку `reset`, `common{css,js}`, `i18n`, `runtime`, and all `component`

### 2.1. Компоненти
Кожен компонент має свою теку, в якій розташовані файли `index.js`, `[component-name].less`, `[component-name].js`.
Також, у теці компонента, можуть бути розташовані додаткові включення компонентів, які використовуються поточним компонентом.

### 2.2. Стилі кольору
Стилі кольору розташовані в теці `colors-css`. Кожен файл являє собою окремий модуль з класами, які реалізують одну специфічну поведінку.

### 2.3. Загальні стилі
Загальні стилі розташовані в теці `common-css`. Кожен файл являє собою окремий модуль з класами, які реалізують одну специфічну поведінку.

### 2.4. Загальні функції
Загальні функції розташовані в теці `common-js`. Файл містить різноманітні функції, які не є компонентами або стилями, але використовуються в різних компонентах.

### 2.5. Зовнішні модулі
В теках: `dom`, `html`, `datetime`, `farbe`, `guardian`, `hooks`, `model`, `router`, та `string` розташовані функції, які підключають сторонні модулі для використання з Metro UI.

### 2.6. Ядро бібліотеки
В теці `core` розташовані модулі, які реалізують ядро бібліотеки та глобальний неймспейс `Metro`.

## 3. Вимоги до тестування

+ Для тестування вихідного коду використовуються тести на основі фреймворку Latte (@olton/latte).
+ Документація по тестуванню доступна за посиланням: [Latte Documentation](https://latte.org.ua)
+ Тестування вихідного коду є обов'язковим для всіх компонентів, які реалізують нову функціональність або змінюють існуючу.
+ Тестування вихідного коду є необов'язковим для компонентів, які реалізують лише стилі або не змінюють функціональність.
+ Запуск тестів можна здійснити за допомогою команди 
```bash
npm test
```
+ Для мокінгу використовуються функції фреймворку Latte: `mock()`, `spy()`
+ Для створення тестових груп використовуються функції фреймворку Latte: `suite()` або `describe()`. Ці функції не можуть бути вкоаденими в інші функції.
+ Для створення тестів всередині групи використовується функція фреймворку Latte: `it()`. 
+ Для створення окремо стоячих тестів використовується функція фреймворку Latte: `test()`. 

## 4. Code Style

+ Для форматування вихідного коду використовується `Biom`.
+ Форматування має відповідати вимогам [JavaScript Standard Style](https://standardjs.com/) за виключенням того, що замість 2-х пробілів, використовується 4 пробіли.

## 5. Documentation
This guide provides instructions for creating documentation for Metro UI components. 
The documentation should be in markdown format and placed in a README.md file in each component's directory. 
The documentation should describe plugin parameters, API methods (excluding those starting with an underscore), and how to style the component using CSS variables.

Документація складається з файлів `README.md`, які розташовані в теках компонентів.
Якщо є відповідний приклад використання компонента в теці `__html__`, то його слід використовувати як приклад використання компонента.
Майже всі компоненти ініціалізуються за допомогою `data-role` атрибута, тому в прикладах використання слід використовувати `data-role` атрибут.

Винятком є компоненти:
- `notify`
- `toast`
- компоненти які реалізуються лише в стилях (у таких компонентах відсутній файл `[component-name].js`)

Для деяких компонентів реалізовані додаткові методи ініціалізації, зазвичай для таких компонентів створюється окремий неймспейс в об'єкті `Metro` (наприклад: `Metro.notify`, `Metro.toast`).

Readme.md кожного компонента повинен дотримуватися цієї структури:

### Documentation Structure

#### 5.1. **Title and Description**
   ```markdown
   # Component Name
   
   Brief description of what the component does and its main features.
   ```

#### 5.2. **Usage Examples**
   ```markdown
   ## Usage
   
   ### Basic Usage
   
   ```html
   <!-- Example HTML code -->
   <div data-role="component-name"></div>
   ```

   ### Additional Configurations

   ```html
   <!-- More examples showing different configurations -->
   ```

#### 5.3. **Plugin Parameters**
   ```markdown
   ## Plugin Parameters
   
   | Parameter | Type | Default | Description |
   | --------- | ---- | ------- | ----------- |
   | `paramName` | type | default | Description of parameter |
   ```

#### 5.4. **API Methods**
   ```markdown
   ## API Methods
   
   ### Method Name
   
   ```javascript
   // Example of method usage
   $('#element').data('component-name').methodName();
   ```

#### 5.5. **Events**
   ```markdown
   ## Events
   
   | Event | Description |
   | ----- | ----------- |
   | `onEventName` | Description of event |
   ```

#### 5.6. **CSS Variables**
   ```markdown
   ## Styling with CSS Variables
   
   | Variable | Default (Light) | Dark Mode | Description |
   | -------- | --------------- | --------- | ----------- |
   | `--variable-name` | value | value | Description of variable |
   
   ### Example of Custom Styling
   
   ```css
   /* Custom styling example */
   #my-element {
       --variable-name: custom-value;
   }
   ```

#### 5.7. **CSS Classes**
   ```markdown
   ## Available CSS Classes
   
   ### Base Classes
   - `.class-name` - Description
   
   ### Modifiers
   - `.modifier-class` - Description
   ```

### How to Create Documentation

For each component that needs documentation:

1. **Examine the Component Files**:
    - Look at the JavaScript file (e.g., `component-name.js`) to understand:
        - Default configuration options (usually in a variable like `ComponentDefaultConfig`)
        - API methods (public methods that don't start with underscore or `#`)
        - Events (usually in the configuration with names like `onEvent`)

    - Look at the LESS file (e.g., `component-name.less`) to understand:
        - CSS variables (usually defined in `:root` and `.dark-side` selectors)
        - Available CSS classes and their purpose

2. **Create the README.md File**:
    - Use the structure outlined above
    - Include practical examples showing different configurations
    - Document all parameters, methods, events, and styling options
    - Provide clear descriptions for each item

3. **Test the Documentation**:
    - Ensure all examples are correct and work as expected
    - Verify that all parameters, methods, and CSS variables are accurately documented