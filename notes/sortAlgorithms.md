### 数组测试平台类

```javascript

    function cArray (numElements) {
        this.dataStore = [];
        this.pos = 0;
        this.numElements = numElements;
        this.insert = insert;
        this.toString = toString;
        this.clear = clear;
        this.setData = setData;
        this.swap = swap;
        for (var i=0; i<numElements; ++i) {
            this.dataStore[i] = i;
        }
    }

    function setData () {
        for (var i=0; i<this.numElements; ++i) {
            this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
        }
    }

    function clear () {
        for (var i=0; i<this.dataStore.length; ++i) {
            this.dataStore[i] = 0;
        }
    }

    function insert (element) {
        this.dataStore[this.pos++] = element;
    }

    function toString () {
        var restr = "";
        for (var i=0; i<this.dataStore.length; ++i) {
            restr += this.dataStore[i] + " ";
            if (i>0 & i%10==0) {
                restr += "\n";
            }
        }
        return restr;
    }

    function swap (arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
```

### 基本排序算法

#### 冒泡排序

最慢的排序算法之一，但是容易实现，假如将一组数字按肾虚排列，较大的值会浮动到数组的右侧，较小的值则会浮动到数组的左侧。是因为算法会多次在数组中移动，比较相邻的数据，当左侧值大于右侧值时将他们进行互换。

```javascript
    cArray.prototype.bublleSort = function () {
        var numElements = this.dataStore.length;
        var temp;
        for (var outer = numElements; outer >= 2; --outer) {
            for (var inner = 0; inner <= outer-1; ++inner) {
                if (this.dataStore[inner] > this.dataStore[inner+1]) {
                    this.swap(this.dataStore, inner, inner+1);
                }
            }
        }
    }
```

#### 选择排序

选择排序从数组的开头开始，将第一个元素和其他元素进行比较，检查完所有元素后，最小的元素会被放到数组的第一个位置，然后算法会从第二个位置继续，这一过程一直进行，当进行到数组的倒数第二个位置时，所有数据便完成了排序。

```javascript
    cArray.prototype.selectSort = function () {
        var min, temp;
        for (var outer = 0; outer <= this.dataStore.length-2; ++outer) {
            min = outer;
            for (var inner = outer+1; inner <= this.dataStore.length-1; ++inner) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }
                this.swap(this.dataStore, outer, min);
            }
        }
    }

```

#### 插入排序

插入排序有两个循环，外循环将数组元素挨个移动，而内循环则对外循环选中的元素以及它后面的那个袁旭进行比较，如果外循环选中的元素比内循环选中的元素小，那么数组元素会向右移动，为内循环中的这个元素腾出位置。

```javascript
    cArray.prototype.insertionSort = function () {
        var temp, inner;
        for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
            temp = this.dataStore[outer];
            inner = outer;
            while (inner > 0 && (this.dataStore[inner - 1] >= temp)) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                --inner;
            }
            this.dataStore[inner] = temp;
        }
    }

```

### 高级排序算法

#### 希尔排序

在插入排序的基础上做了很大的改善，核心理念与插入排序不同，会先比较距离较远的元素，而非相邻的元素。希尔排序的工作原理是通过定义一个间隔序列来表示在排序过程中进行比较的元素直接有多远的间隔。可以动态定义间隔序列，也可以提前定义好。

- 提前定义好间隔序列

```javascript
    cArray.prototype.setGaps = function (arr) {
        this.gaps = arr;
    };

    cArray.prototype.shellSort = function () {
        this.gaps = this.setGaps([5, 3, 1]);
        for (var g = 0; g < this.gaps.length; ++g) {
            for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
                var temp = this.dataStore[i];
                for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                    this.dataStore[j] = this.dataStore[j - this.gaps[g]];
                }
                this.dataStore[j] = temp;
            }
        }
    }

```

- 动态计算间隔序列的希尔排序

```javascript
    cArray.prototype.shellsort1 = function () {
        var N = this.dataStore.length;
        var h = 1;
        while (h < N/3) {
            h = 3 * h + 1;
        }
        while (h >= 1) {
            for (var i = h; i < N; i++) {
                for (var j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
                    this.swap(this.dataStore, j, j-h);
                }
            }
            h = (h-1)/3;
        }
    }

```

#### 归并排序

把一系列排列好的子序列合并成一个大的完整有序序列。需要两个排序好的子数组，然后通过比较数据大小，先从最小的数据开始插入，最后合并得到第三个数组。

- 自顶向下的归并排序

递归实现

- 自底向上的归并排序

采用非递归或者迭代版本的归并排序是一个自底向上的过程，这个算法首先将数据集分解为一组只有一个元素的数组，然后通过创建一组左右子数组将他们慢慢合并起来，每次合并都保存一部分排好序的数据，直到最后剩下的这个数组所有的数据都已完美排序。

```javascript
    function mergeSort (arr) {
        if (arr.length < 2) {
            return;
        }
        var step = 1, left, right;
        while (step < arr.length) {
            left = 0;
            right = step;
            while (right + step <= arr.length) {
                mergeArrays(arr, left, left+step, right, right+step);
                left = right + step;
                right = left + step;
            }
            if (right < arr.length) {
                mergeArrays(arr, left, left+step, right, arr.length);
            }
            step *= 2;
        }
        console.log("arr - ", arr);
    }

    function mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
        var rightArr = new Array(stopRight - startRight + 1);
        var leftArr = new Array(stopLeft - startLeft + 1);
        var k = startRight;
        for (let i = 0; i < rightArr.length - 1; ++i) {
            rightArr[i] = arr[k];
            ++k;
        }
        k = startLeft;
        for (let i = 0; i < leftArr.length - 1; ++i) {
            leftArr[i] = arr[k];
            ++k;
        }
        rightArr[rightArr.length - 1] = Infinity;
        leftArr[leftArr.length - 1] = Infinity;
        var m = 0, n = 0;
        for (let j = startLeft; j < stopRight; ++j) {
            if (leftArr[m] <= rightArr[n]) {
                arr[j] = leftArr[m];
                m++;
            } else {
                arr[j] = rightArr[n];
                n++;
            }
        }
        console.log("left arr - ", leftArr);
        console.log("right arr - ", rightArr);
    }

```

#### 快速排序

快速排序是处理大数据集最快速的排序算法之一。它是一种分而治之的算法，通过递归的方式将数据依次分解为包含较小元素和较大元素的不同子序列。该算法不断重复这个步骤直到所有数据都是有序的。
这个算法首先要在列表中选择一个元素作为基准值。数据排序围绕基准值进行，将列表中小于基准值得元素移到数组的底部，将大于基准值的元素移到数组的顶部。

```javascript
    function qSort (list) {
        if (list.length == 0) {
            return [];
        }
        var lesser = [], greater = [], pivot = list[0];
        for (var i = 1; i < list.length; i++) {
            if (list[i] < pivot) {
                lesser.push(list[i]);
            } else {
                greater.push(list[i]);
            }
        }
        return qSort(lesser).concat(pivot, qSort(greater));
    }
```