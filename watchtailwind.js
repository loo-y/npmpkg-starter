const { spawn } = require('child_process')
const { glob, globSync } = require('glob')

// 监听的目录
const watchDir = './src/'
const pattern = '*.css' // 匹配所有文件

const inputTailwindStyleList = globSync(`${watchDir}${pattern}`)
const npxByPlatform = process.platform === 'win32' ? 'npx.cmd' : 'npx'
inputTailwindStyleList.forEach(file => {
    console.log(`Watching file: ${file}`)
    const tailwindProcess = spawn(npxByPlatform, [
        'tailwindcss',
        '-i',
        file,
        '-o',
        `./public/package.tw.css`,
        // '--watch',
        '--minify',
    ])

    tailwindProcess.stdout.on('data', data => {
        console.log(`[${file}] stdout: ${data}`)
    })

    tailwindProcess.stderr.on('data', data => {
        console.error(`[${file}] stderr: ${data}`)
    })

    tailwindProcess.on('close', code => {
        console.log(`[${file}] child process exited with code ${code}`)
    })
})
