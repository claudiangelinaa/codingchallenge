var arr = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ]

        function printArray () {
            var tableRow = document.getElementsByTagName('tr')
            console.log(tableRow)

            var table = ''
            var row = ''

            for (let i = 0; i < arr.length; i++) {
                var out = ''
                for (let j = 0; j < arr.length; j++) {
                    out += `<td id="kotak${arr[i][j]}">${arr[i][j]}</td>`

                }
                tableRow[i].innerHTML = out + `<td><button class="iconify" data-icon="tabler:arrows-left-right" data-inline="false" id="sortLeft" onclick="sortLeft(${i})">sort</button></td>`
            }

            tableRow[3].innerHTML = `
                <td><button class="iconify" data-icon="tabler:arrows-sort" data-inline="false" id="sortBottom" onclick="sortBottom(${0})">sort</button></td>
                <td><button class="iconify" data-icon="tabler:arrows-sort" data-inline="false" id="sortBottom" onclick="sortBottom(${1})">sort</button></td>
                <td><button class="iconify" data-icon="tabler:arrows-sort" data-inline="false" id="sortBottom" onclick="sortBottom(${2})">sort</button></td>
                <td></td>
            `
        }

        function sortLeft (index) {
            console.log(index)
            console.log(arr[index][0], arr[index][2])
            if (arr[index][0] > arr[index][2]) {
                arr[index].sort((a, b) => a > b ? 1 : -1) // acceding sort
            } else {
                arr[index].sort((a, b) => a > b ? -1 : 1)
            }
            printArray()
        }

        function sortBottom(index) {
            console.log(index)
            // take an elements from one colum in matrix to new array
            var arrNew = []
            for (let i = 0; i < arr.length; i++) {
                arrNew.push(arr[i][index])
            }
            console.log(arrNew)

            // sort it
            if (arrNew[0] > arrNew[2]) {
                arrNew.sort((a, b) => a > b ? 1 : -1) // acceding sort
            } else {
                arrNew.sort((a, b) => a > b ? -1 : 1)
            }

            arr[0][index] = arrNew[0]
            arr[1][index] = arrNew[1]
            arr[2][index] = arrNew[2]
            printArray()            
        }

        function clockwise () {
            var newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            arr.reverse()
            // console.log(arr)
            for (let i = 0; i < arr.length; i++) {
                for (let j = 2; j >= 0; j--) {
                    newArr[j][i] = arr[i][j]
                }
            }
            arr = newArr
            // console.log(newArr)
            printArray()
        }

        function counter () {
            var newArr = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
            for (let i = 0; i < arr.length; i++) {
                for (let j = 2; j >= 0; j--) {
                    newArr[j][i] = arr[i][j]
                }
            }
            arr = newArr.reverse()
            printArray()
        }

        function reset () {
            arr = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
            ]

            document.getElementById('num').value = ''
            // console.log(arr)
            printArray()
        }

        function left () {
            var num = document.getElementById('num').value
            let i = 0
            while (i < num) {
                counter()
                i++
            }
        }

        function right () {
            var num = document.getElementById('num').value
            let i = 0
            while (i < num) {
                clockwise()
                i++
            }
        }

        // call main function
        printArray()