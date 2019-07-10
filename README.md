
[Powershell](#powershell) 
[Docker](#docker-powershell) 
[Linux](#linux-bash)
[Visual Studio Hotkeys](#visual-studio-hotkeys)

---
[GULP](gulp-guide.md)
---
---


## POWERSHELL
#### Получить информацию о прослушываемых портах
 	netstat -an | where { $_ -like '*LISTENING*' } 

#### Просмотреть содержимое файла 
	Get-Content -Path myfile.txt  

#### Отправить вебзапрос
	Invoke-WebRequest -URI http://0.0.0.0 -UseBasicParsing
	Invoke-WebRequest -URI http://docker.for.win.localhost -UseBasicParsing
	Invoke-WebRequest -URI http://www.google.ru -UseBasicParsing
	Invoke-WebRequest -URI http://195.133.48.168 -UseBasicParsing

---

## DOCKER powershell	
#### Запустить контейнер в интерактивном режиме (-it) с настройками сети хост-машины (--network) 
	docker run -it --network=host --rm container_id/container_name	
	
#### Удалить все контейнеры
	docker rm $(docker ps -a -q)  
	
#### удалить все закрытые контейнеры
	docker container prune  
	
#### Remove all unused containers, networks, images (both dangling and unreferenced), and optionally, volumes.
docker system prune

#### Получить ip последнего запущенного контейнера:
 ###### windows container
	docker inspect --format '{{ .NetworkSettings.Networks.nat.IPAddress }}' $(docker ps -l -q) 
 ###### linux container
	docker inspect --format '{{ .NetworkSettings.IPAddress }}' $(docker ps -l -q)  


#### The cp command can be used to copy files. One specific file can be copied like:
	docker cp foo.txt mycontainer:/foo.txt
	docker cp mycontainer:/foo.txt foo.txt
#### Multiple files contained by the folder src can be copied into the target folder using:
	docker cp src/. mycontainer:/target
	docker cp mycontainer:/src/. target

#### Запустить контейнер с монтированной папкой (доступной для редактирования с обоих сторон) 
	docker run -it --rm --volume /h/Cloudmail/Sources/C#/Diplom-CGC/Bomber_wpf_serverside/User_client/User_client/User_0:/cgc kepo4ka/ubuntu_mono /h/Cloudmail/Sources/C#/Diplom-CGC/Bomber_wpf_serverside/User_client/User_client/User_0

#### Выполнить комманду внутри запущенного в фоне контейнере
	docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
	пример:
	docker exec -it container_id/container_name dir

#### Удалить все образы с тегом <none>
	docker rmi $(docker images -f “dangling=true” -q)


---

## Linux bash:
#### Присвоить значение переменной
	a=123
	let a=123
#### Записать в переменную результат работы каманды
	a= `lsb_release -a`
	a= $(lsb_release -a)

#### Обращение к переменной
	echo $a

#### Записать в массив результат работы команды
	readarray -t array <<< "$(pdc status -a 2>&1 | grep 'okay')"
#### Вывести первый элемент
	echo "${array[0]}"
#### Вывести все 
	echo "${array[@]}"
	
#### Получить ip хост-машины из Docker контейнера 
	(Предварительно запустив контейнер с параметром --network=host) 
	route | awk '/^default/ { print $2 }'  

#### Узнать версию системы
	lsb_release -a

#### Установить curl
	sudo apt-get install curl

---
## Visual Studio Hotkeys
	Команда > Параметры > Клавиатура
	Правка.Наоднустрокувверх
	Правка.Наоднустрокувниз
	Правка.Вконецстроки
	Правка.Вначалостроки
	
---
	
