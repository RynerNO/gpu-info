const { exec } = require('child_process')

const promiseExec = (command) => {
	return new Promise((resolve, reject) => {
		exec(command, (err, stdout, stderr) => {
			if (err) {
				return reject(err)
			}
			if (stdout) {
				resolve(stdout)
			}
			if (stderr) {
				reject(stderr)
			}
		})
	})
}

const NVIDIA = {
  name: 'nvidia-smi --query-gpu=name --format=csv,noheader',
  memClock: 'nvidia-smi --query-gpu=clocks.mem --format=csv,noheader',
  GpuClock: 'nvidia-smi --query-gpu=clocks.gr --format=csv,noheader',
	temp: 'nvidia-smi --query-gpu=temperature.gpu --format=csv,noheader',
	usageGpu: 'nvidia-smi --query-gpu=utilization.gpu --format=csv,noheader',
	memoryTotal: 'nvidia-smi --query-gpu=memory.total --format=csv,noheader',
	memoryFree: 'nvidia-smi --query-gpu=memory.free --format=csv,noheader',
	memoryUsed: 'nvidia-smi --query-gpu=memory.used --format=csv,noheader',
}

const getName = async () => {
	try {
		const name = await promiseExec(NVIDIA.name)
		return name.trim()
	} catch (err) {
		return err.message
	}
}
const getTemp = async () => {
	try {
		const temp = await promiseExec(NVIDIA.temp)
		return temp.trim()
	} catch (err) {
		return err.message
	}
}
const getUsage = async () => {
	try {
		const usage = await promiseExec(NVIDIA.usageGpu)
		return usage.trim().replace('%', '')
	} catch (err) {
		return err.message
	}
}
const getMemoryTotal = async () => {
	try {
		const memory = await promiseExec(NVIDIA.memoryTotal)
		return memory.trim().replace(/[A-Z]\w+/g, '')
	} catch (err) {
		return err.message
	}
}
const getMemoryFree = async () => {
	try {
		const memory = await promiseExec(NVIDIA.memoryFree)
		return memory.trim().replace(/[A-Z]\w+/g, '')
	} catch (err) {
		return err.message
	}
}
const getMemoryUsed = async () => {
	try {
		const memory = await promiseExec(NVIDIA.memoryUsed)
		return memory.trim().replace(/[A-Z]\w+/g, '')
	} catch (err) {
		return err.message
	}
}
const getGpuClock = async () => {
  try {
		const clock = await promiseExec(NVIDIA.GpuClock)
		return clock.trim().replace(/[A-Z]\w+/g, '')
	} catch (err) {
		return err.message
	}
}
const getMemClock = async () => {
  try {
    const clock = await promiseExec(NVIDIA.memClock)
    // It is now similar to asus monitor
		return clock.trim().replace(/[A-Z]\w+/g, '') * 2
	} catch (err) {
		return err.message
	}
}

module.exports = {
  getName,
  getTemp,
  getUsage,
  getMemoryTotal,
  getMemoryFree,
  getMemoryUsed,
  getGpuClock,
  getMemClock
}