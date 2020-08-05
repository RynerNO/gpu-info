# GPU-INFO-NV
#### Description
Shows GPU Load, Temp, Clocks, Name.
Currently working only for NVIDIA GPU's(until I get an AMD GPU for tests)

#### Install
``` 
Using NPM
	npm install gpu-info-nv
Using Yarn
	yarn add gpu-info-nv
```
#### Usage
``` 
// Example 

const nv = require('gpu-info-nv');

nv.getName().then(data => {
	console.log(data) ---> GeForce GTX 1060 3GB
})
```

#### Available Methods
``` 
	1. getName() --> Returns GPU Name
	2. getTemp() --> Returns Current GPU Temp in Celsius
	3. getUsage() ---> Returns Current GPU Load in Percents
	4. getMemoryTotal() ---> Returns Total GPU Memory in MB
	5. getMemoryUsed() ---> Returns Total Used Memory in MB
	6. getMemoryFree() ---> Returns Total Free Memory in MB
	7. getGpuClock() ---> Returns GPU Clock in MHZ
	8. getMemClock() ---> Returns Memory Clock in MHZ
  
```