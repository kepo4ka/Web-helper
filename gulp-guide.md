[Install](#install)  
[Commands](#commands) 

* Новая версия API:  function вместо task()
В прошлом task() использовался для регистрации ваших функций в качестве задач. 
Хотя этот API все еще доступен, экспорт должен быть основным механизмом регистрации, за исключением крайних случаев, когда экспорт не будет работать.



## Install:
##### Установить node.js, npx https://nodejs.org/en/
##### Установите утилиту командной строки gulp 
	npm install --global gulp-cli
##### Создать отдельную папку, в ней пустой файл package.json и команду
	npm init
##### Install gulp
	npm init
	npm install --save-dev gulp
	gulp --version
##### Create a gulpfile
	function defaultTask(cb) {
	  // place code for your default task here
	  cb();
	}

	exports.default = defaultTask
##### Test it
	gulp
	
## Commands:
##### Get aviable tasks
	gulp --tasks
##### Show installed packages
	npm list -g --depth 0
	  
 * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
* `npm run build` — builds minified project for production
	
	
	
## FAQ:
##### series 
выполняет переданные функции последовательно, новая функция не начинает работу, 
пока предыдущая не выполнится. 
Если возникнет ошибка, то произойдёт полное прерывание.

##### parrallel 
выполняет переданные функции параллельно.
Если возникнет ошибка, то непонятно.
	

	
	
	
	
